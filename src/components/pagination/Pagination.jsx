import { useState, useEffect } from "react";
import useInfiniteScroll from "./useInfiniteScroll";

const Pagination = ({ data, setLimit, limit }) => {
  const [user, setUser] = useState([]);
  const [isFetching, setIsFetching] = useInfiniteScroll(limit  < 60 ? moreData : false);

  function moreData() {
    setLimit(limit+12);
    setUser([...data, ...user]);
     
    setIsFetching(false);
  }

  return (
    <>
      {
      user?.slice(0,60)?.map((item, index) => (
        <p key={index}>{item.firstName}</p>
      ))}
    </>
  );
};

export default Pagination;
