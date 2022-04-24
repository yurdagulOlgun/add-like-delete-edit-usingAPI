import React from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import Pagination from "../components/pagination/Pagination";
import { fetchSearchUsers, fetchUsers } from "../data";
import UserCard from "../styledComponents/UserCard";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Search from "../styledComponents/Search";
import { useRef } from "react";
import { useMemo } from "react";
import EditUser from "../styledComponents/EditUser";
const Home = (props) => {
  // const {deleteUser} = useSelector((state) => state)

  const [q, setQ] = useState("");
  const inputRef = useRef();
  const [limit, setLimit] = useState(12);
  const [isOpen, setIsOpen] = useState(false)

  const { data } = useQuery(["users", {limit,q}], () => fetchUsers(limit,q), {
    retry: false,
    select: (data) => data.data.users,
  });

  const popupHandler = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
    {
      isOpen && <EditUser setIsOpen={setIsOpen} />
    }

      {window.screen.width > 729 ? (
        <Search q={q} setQ={setQ} inputRef={inputRef} />
      ) : null}
      {
        q ? (<Wrapper>
           {
            data?.filter((data) => data.firstName.toLowerCase().includes(q.toLowerCase() )
              || data.lastName.toLowerCase().includes(q.toLowerCase() ) 
              || data.email.toLowerCase().includes(q.toLowerCase() ) 
              || data.phone.toLowerCase().includes(q.toLowerCase() ) 
              || data.website.toLowerCase().includes(q.toLowerCase() ) 
              
            )
            .map((item,index) => (
                <UserCard key={index} item={item} popupHandler={popupHandler} />
            ))
        }
        </Wrapper>) : ( 
        <Wrapper>
        {data?.map((item, index) => (
          <UserCard key={index} item={item} popupHandler={popupHandler} />
        ))}
      </Wrapper> 
      )
      }
      <Pagination data={data} setLimit={setLimit} limit={limit}  />
    </>
  );
}

export default Home

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

// (<>
//   { window.screen.width > 729 ? <Search q={q} setQ={setQ} inputRef={inputRef} /> : null }

// <Wrapper>
//        {
//         searchData?.filter((data) => data.firstName.toLowerCase().includes(q.toLowerCase())
//         )
//         .map((item,index) => (
//             <UserCard key={index} item={item} />
//         ))
//     }
//   </Wrapper>
// </>)
