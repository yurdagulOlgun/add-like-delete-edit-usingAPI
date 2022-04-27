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
import { deleteUserSuccess } from "../redux/userRedux";

const Home = (props) => {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.user.users);

  // const [users, setUsers] = useState([]);
  const [q, setQ] = useState("");
  const inputRef = useRef();
  const [limit, setLimit] = useState(12);
  const [isOpen, setIsOpen] = useState(false);

  // useEffect(() => {
  //   setUsers(usersRR);
  // }, [usersRR]);

  useEffect(() => {
    getUsers(dispatch, limit);
  }, [dispatch, limit]);

  const popupHandler = () => {
    setIsOpen(!isOpen);
  };

  function delButtonHandler(id) {
    dispatch(deleteUserSuccess(id));
  }

  return (
    <>
      {isOpen && <EditUser setIsOpen={setIsOpen} />}

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
            />
          ))}
        </Wrapper>
      )}
      <Pagination data={users} setLimit={setLimit} limit={limit} />
    </>
  );
};

export default Home;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
