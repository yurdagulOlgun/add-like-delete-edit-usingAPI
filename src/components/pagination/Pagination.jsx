import { useState } from "react";
import useInfiniteScroll from "./useInfiniteScroll";
import UserCard from "../../styledComponents/UserCard";
import styled from "styled-components";

const Pagination = ({ data, setLimit, limit }) => {
  const [user, setUser] = useState([]);
  const [isFetching, setIsFetching] = useInfiniteScroll(
    limit < 60 ? moreData : false
  );

  function moreData() {
    setLimit(limit + 12);
    setUser([...data]);
    setIsFetching(false);
  }
  console.log(user);
  return (
    <>
      <Wrapper>
        {user?.map((item, index) => (
          <UserCard key={index} item={item} />
        ))}
      </Wrapper>
    </>
  );
};

export default Pagination;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
