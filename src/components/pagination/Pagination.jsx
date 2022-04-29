import { useEffect } from "react";

const Pagination = ({ setLimit, limit }) => {
  
  useEffect(() => {
    window.addEventListener("scroll", isScrolling);
    return () => window.removeEventListener("scroll", isScrolling);
  }, []);

  const isScrolling = () => {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      if(limit < 60) {
        setLimit(limit += 12);
      }
    }
  }
 
};

export default Pagination;