import useInfiniteScroll from "./useInfiniteScroll";

const Pagination = ({ setLimit, limit }) => {
  const [isFetching, setIsFetching] = useInfiniteScroll(
    limit < 60 ? moreData : false
  );

  function moreData() {
    setLimit(limit + 12);
    setIsFetching(false);
  }
};

export default Pagination;
