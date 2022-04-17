import { useQuery } from "react-query";
import { fetchUsers } from "../data";

export default function Home(props){

    const { data } = useQuery("users", fetchUsers, {
        retry: false,
        select: (data) => data.data.users,
      });
      console.log(data);
    return(
        <>
            {
                data?.map((item) => (
                    <p key={item.id}>{item.firstName}</p>
                ))
            }
        </>
    )
}