import React from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import Pagination from "../components/pagination/Pagination";
import { fetchUsers } from "../data";
import UserCard from "../styledComponents/UserCard";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Search from "../styledComponents/Search";
import { useRef } from "react";
import EditUser from "../styledComponents/EditUser";
import { deleteUserRedux } from "../redux/delete";
// import { useEffect } from "react";
const Home = (props) => {
  const dispatch = useDispatch();
  const { deleteUser } = useSelector((state) => state);

  // const [users, setUsers] = useState("");
  const [q, setQ] = useState("");
  const inputRef = useRef();
  const [limit, setLimit] = useState(12);
  const [isOpen, setIsOpen] = useState(false);

  const { data } = useQuery(["users", { limit }], () => fetchUsers(limit), {
    retry: false,
    select: (data) => data.data.users,
  });

  // useEffect(() => {
  //   setUsers(data);
  // }, []);

  const popupHandler = () => {
    setIsOpen(!isOpen);
  };

  const delButtonHandler = () => {
    return (
      <>
        {isOpen && <EditUser setIsOpen={setIsOpen} />}

        {window.screen.width > 729 ? (
          <Search q={q} setQ={setQ} inputRef={inputRef} />
        ) : null}

        <Wrapper>
          {deleteUser
            ?.filter((del) => del.id !== data?.id)
            .map((item, index) => (
              <UserCard key={index} item={item} popupHandler={popupHandler} delButtonHandler={delButtonHandler} />
            ))}
        </Wrapper>
      </>
    );
  };


  return (
    <>
      {isOpen && <EditUser setIsOpen={setIsOpen} />}

      {window.screen.width > 729 ? (
        <Search q={q} setQ={setQ} inputRef={inputRef} />
      ) : null}

      {q ? (
        <Wrapper>
          {data
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
          {data?.map((item, index) => (
            <UserCard
              key={index}
              item={item}
              popupHandler={popupHandler}
              delButtonHandler={delButtonHandler}
            />
          ))}
        </Wrapper>
      )}
      <Pagination data={data} setLimit={setLimit} limit={limit} />
    </>
  );
};

export default Home;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
