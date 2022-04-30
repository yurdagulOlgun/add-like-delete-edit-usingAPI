import styled from "styled-components";
import search from "../assets/search.png";
import blue from "../assets/blue.png";
import { useSelector } from "react-redux";

export default function Search(props) {
  const { q, setQ, inputRef } = props;

  const { theme } = useSelector((state) => state);
  const themeName = theme.themeName;

  function inputHandler(event) {
    setTimeout(() => {
      setQ(event.target.value);
    }, 300);
  }

  return (
    <>
      <SearchWrapper theme={themeName}>
        <SearchInput
          name="q"
          type="text"
          placeholder="Search..."
          ref={inputRef}
          defaultValue={q}
          onChange={inputHandler}
          theme={themeName}
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
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  height: 72px;
  border: 0;
  width: 50%;
  background-color: ${({ theme }) =>
    theme === "light" ? "#ffffff" : "#5e5e5e"};
  background-image: url(${search});
  background-repeat: no-repeat;
  background-position: 98% 50%;
  box-shadow: 0px 2px
    ${({ theme }) => (theme === "light" ? "#e8e8e8" : "#969696")};
  &::placeholder {
    color: ${({ theme }) => (theme === "light" ? "#1a1a1a" : "#ffffff")};
  }
  &:focus {
    background-image: url(${blue});
    background-repeat: no-repeat;
    background-position: 98% 50%;
    outline: none;
    box-shadow: 0px 2px #1890ff;
    color: ${({ theme }) => (theme === "light" ? "#1a1a1a" : "#ffffff")};
  }
`;
