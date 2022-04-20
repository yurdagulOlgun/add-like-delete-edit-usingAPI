import { useState, useEffect } from "react";
import useInfiniteScroll from "./useInfiniteScroll";

const Pagination = ({ data, setLimit, limit }) => {
  const [user, setUser] = useState([]);
  //   const [page, setPage] = useState(1);
  const [isFetching, setIsFetching] = useInfiniteScroll(moreData);

  const loadData = () => {
    setUser(data);
  };
  function moreData() {
    setUser([...data, ...data]);
    setLimit(limit + 12);
    setIsFetching(false);
    if(limit > 60){
        return setIsFetching(false)
    }
  }
  console.log(limit);
  useEffect(() => {
    loadData();
  }, []);

  return (
    <>

      {
     
      user?.map((item, index) => (
        <p key={index}>{item.firstName}</p>
      ))}
    </>
  );
};

export default Pagination;
