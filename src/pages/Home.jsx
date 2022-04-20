import { useState } from "react";
import { useQuery } from "react-query";
import Pagination from "../components/pagination/Pagination";
import { fetchUsers } from "../data";


export default function Home(props){

 const [limit,setLimit] = useState(12)

    const { data } = useQuery(["users" , limit],() => fetchUsers(limit), {
        retry: false,
        select: (data) => data.data.users,
      });

    return(
        <>
            {
                data?.map((item) => (
                    <p key={item.id}>{item.firstName}</p>
                ))
            }
          <Pagination data={data} setLimit={setLimit} limit={limit} />
        </>
    )
}