import React from "react";
import { useState } from "react";
import Pagination from "../components/pagination/Pagination";
import UserCard from "../styledComponents/UserCard";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Search from "../styledComponents/Search";
import { useRef } from "react";
import EditUser from "../styledComponents/EditUser";
import { useEffect } from "react";
import { getUsers } from "../redux/apiCalls";
import { deleteUserSuccess, editUser } from "../redux/userRedux";

const Home = (props) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);

  const [q, setQ] = useState("");
  const inputRef = useRef();
  const [limit, setLimit] = useState(12);
  const [isOpen, setIsOpen] = useState(false);
  //edit states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [domain, setDomain] = useState("");
  const [userID, setUserID] = useState();

  useEffect(() => {
    if (users.length < 1) {
      getUsers(dispatch, limit);
    }
  }, [dispatch, limit, users]);

  const popupHandler = (id) => {
    setIsOpen(!isOpen);
    setUserID(id)
  };

  function delButtonHandler(id) {
    dispatch(deleteUserSuccess(id));
  }

  function editClickHandler(e){
    e.preventDefault();
    dispatch(editUser({userID,name,email,phone,domain}))
    setIsOpen(!isOpen)
  }

  return (
    <>
      {isOpen && (
        <EditUser 
        setIsOpen={setIsOpen}
        name={name} 
        setName={setName}
        email={email}
        setEmail={setEmail}
        phone={phone}
        setPhone={setPhone}
        domain={domain}
        setDomain={setDomain}
        editClickHandler={editClickHandler}
        />
      )}

      {window.screen.width > 729 ? (
        <Search q={q} setQ={setQ} inputRef={inputRef} />
      ) : null}

      {q ? (
        <Wrapper>
          {users
            ?.filter(
              (data) =>
                data.firstName?.toLowerCase().includes(q.toLowerCase()) ||
                data.lastName?.toLowerCase().includes(q.toLowerCase()) ||
                data.email?.toLowerCase().includes(q.toLowerCase()) ||
                data.phone?.toLowerCase().includes(q.toLowerCase()) ||
                data.website?.toLowerCase().includes(q.toLowerCase())
            )
            .map((item, index) => (
              <UserCard
                key={index}
                item={item}
                popupHandler={popupHandler}
                delButtonHandler={delButtonHandler}
                editClickHandler={editClickHandler}
              />
            ))}
        </Wrapper>
      ) : (
        <Wrapper>
          {users?.map((item, index) => (
            <UserCard
              key={index}
              item={item}
              popupHandler={popupHandler}
              delButtonHandler={delButtonHandler}
              editClickHandler={editClickHandler}
            />
          ))}
        </Wrapper>
      )}
      <Pagination setLimit={setLimit} limit={limit} />
    </>
  );
};

export default Home;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
