import styled from "styled-components";
import search from "../assets/search.png";
import blue from "../assets/blue.png";
export default function Search(props) {
  const { q, setQ, inputRef } = props;

  function inputHandler(event) {
    setTimeout(() => {
      setQ(event.target.value);
    }, 300);
  }

  return (
    <>
      <SearchWrapper>
        <SearchInput
          name="q"
          type="text"
          placeholder="Search..."
          ref={inputRef}
          defaultValue={q}
          onChange={inputHandler}
        />
      </SearchWrapper>
    </>
  );
}

const SearchWrapper = styled.div`
  padding: 10px;
  margin-top: 20px;
`;

const SearchInput = styled.input`
  height: 72px;
  border: 0;
  width: 50%;

  background-image: url(${search});
  background-repeat: no-repeat;
  background-position: 98% 50%;
  box-shadow: 0px 2px #e8e8e8;

  &:focus {
    background-image: url(${blue});
    background-repeat: no-repeat;
    background-position: 98% 50%;
    outline: none;
    box-shadow: 0px 2px #1890ff;
  }
`;
