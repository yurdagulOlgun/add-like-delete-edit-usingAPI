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
import { changeTheme } from "../redux/themeRedux";
import Loading from "../styledComponents/Loading";

const Home = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);

  const [q, setQ] = useState("");
  const inputRef = useRef();
  const [limit, setLimit] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  //edit states
  const [firstName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [domain, setDomain] = useState("");
  const [userID, setUserID] = useState();

  //loading
  const [isLoading, setIsLoading] = useState(true);

  // for theme
  const [mode, setMode] = useState(
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
  );
  useEffect(() => {
    const modeMe = (e) => {
      setMode(e.matches ? "dark" : "light");
    };
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", modeMe);
    return () =>
      window.matchMedia("(prefers-color-scheme: dark)").removeListener(modeMe);
  }, [setMode]);

  useEffect(() => {
    dispatch(changeTheme(mode));
    mode === "light"
      ? (document.body.style.backgroundColor = " #ffffff")
      : (document.body.style.backgroundColor = " #5e5e5e");
  }, []);

  //I put setTimeout so I can see Loading Component running.
  useEffect(() => {
    setTimeout(() => {
      if (users.length < 1) {
        getUsers(dispatch);
      }
      setIsLoading(false);
    }, 500);
  }, [dispatch, users]);

  const popupHandler = (id) => {
    setIsOpen(!isOpen);
    setUserID(id);
    document.body.style.overflow = "hidden";
  };

  function delButtonHandler(id) {
    dispatch(deleteUserSuccess(id));
  }

  function editClickHandler(e) {
    e.preventDefault();
    dispatch(editUser({ userID, firstName, email, phone, domain }));
    setIsOpen(!isOpen);
  }

  if (isLoading) {
    return <Loading />;
  }


  return (
    <>
      {isOpen && (
        <EditUser
          setIsOpen={setIsOpen}
          firstName={firstName}
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

      {window.matchMedia("(max-width: 729px)").matches ? null : (
        <Search q={q} setQ={setQ} inputRef={inputRef} />
      )}

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
            .slice(0, limit + 12)
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
          {users?.slice(0, limit + 12).map((item, index) => (
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
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(382px, 1fr));
`;
