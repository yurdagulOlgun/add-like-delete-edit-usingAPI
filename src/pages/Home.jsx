import { useState } from "react";
import { useQuery } from "react-query";
import Pagination from "../components/pagination/Pagination";
import { fetchUsers } from "../data";
import UserCard from "../styledComponents/UserCard";
import styled from "styled-components"

export default function Home(props){

 const [limit,setLimit] = useState(12)

    const { data } = useQuery(["users" , limit],() => fetchUsers(limit), {
        retry: false,
        select: (data) => data.data.users,
      });

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