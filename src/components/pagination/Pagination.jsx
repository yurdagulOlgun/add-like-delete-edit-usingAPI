import { useState, useEffect } from "react";
import useInfiniteScroll from "./useInfiniteScroll";
import UserCard from "../../styledComponents/UserCard";

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
        <UserCard key={index} item={item} />
      ))}
    </>
  );
};

export default Pagination;
