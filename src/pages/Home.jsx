import { useState } from "react";
import { useQuery } from "react-query";
import Pagination from "../components/pagination/Pagination";
import { fetchUsers } from "../data";
import UserCard from "../styledComponents/UserCard";
import styled from "styled-components"
import { useSelector } from "react-redux";

export default function Home(props){

  // const {deleteUser} = useSelector((state) => state)
  

 const [limit,setLimit] = useState(12)

    const { data } = useQuery(["users" , limit],() => fetchUsers(limit), {
        retry: false,
        select: (data) => data.data.users,
      });
// const isDelete = deleteUser?.some((del) => del.id === data?.id)
    return(
        <>
        <Wrapper>
               {
                data?.map((item,index) => (
                    <UserCard key={index} item={item} />
                ))
            } 
          </Wrapper>  
            
          <Pagination data={data} setLimit={setLimit} limit={limit} />
        </>
    )
}

const Wrapper = styled.div`
    display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;