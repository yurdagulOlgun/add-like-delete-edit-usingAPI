import styled from "styled-components";
import phone from "../assets/phone.png";
import email from "../assets/email.png";
import link from "../assets/link.png";
import FavEditDel from "./FavEditDel";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { checkUsersID, deleteUserSuccess } from "../redux/userRedux";

export default function UserCard({
  item,
  popupHandler,
  delButtonHandler,
  editClickHandler,
}) {
  const dispatch = useDispatch();

  const { theme } = useSelector((state) => state);
  const themeName = theme.themeName;

  // document.addEventListener('keyup', function(event) {
  //   if (event.ctrlKey && event.which === 68) {
  //     console.log("pressed ctrl+d ");
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }
  // }, false);

  const [check, setCheck] = useState([]);
  const [isChecked, setChecked] = useState(false);

  function radioButtonHandler(id) {
    dispatch(checkUsersID(id));
    setCheck(id);
    setChecked(!isChecked);
  }

  function yoyoyoyo() {}

  return (
    <>
      <Container theme={themeName}>
        <CheckRound id={item.id}>
          <input
            type="checkbox"
            id={item.id}
            name="checkbox"
            value={check}
            onClick={() => radioButtonHandler(item.id)}
            defaultChecked={isChecked}
          />
          <label htmlFor={item.id}></label>
        </CheckRound>
        <Avatar
          src={`https://avatars.dicebear.com/v2/avataaars/${item.firstName}.svg`}
          theme={themeName}
          onMouseOver={() =>
            (document.getElementById(`${item.id}`).style.display = "flex")
          }
          onMouseLeave={() =>
            (document.getElementById(`${item.id}`).style.display = "none")
          }
        />
        <NameIconText theme={themeName}>
          <Name theme={themeName}>
            {item.firstName} {item.lastName}
          </Name>
          <IconText theme={themeName}>
            <Icon src={email} />
            <Text theme={themeName}>{item.email}</Text>
          </IconText>
          <IconText theme={themeName}>
            <Icon src={phone} />
            <Text theme={themeName}>{item.phone}</Text>
          </IconText>
          <IconText theme={themeName}>
            <Icon src={link} />
            <Text theme={themeName}>https://{item.domain}</Text>
          </IconText>
        </NameIconText>
        <BottomIconsWrapper theme={themeName}>
          <FavEditDel
            item={item}
            popupHandler={popupHandler}
            delButtonHandler={delButtonHandler}
            editClickHandler={editClickHandler}
          />
        </BottomIconsWrapper>
      </Container>
    </>
  );
}

const Container = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  text-align: start;
  border: 1px solid
    ${({ theme }) => (theme === "light" ? "#f2f2f2" : "#4F4F4F")};
  background-color: ${({ theme }) =>
    theme === "light" ? "#FAFAFA" : "#1A1A1A"};
`;

const CheckRound = styled.div`
  display: none;
  height: 0;
  align-self: flex-end;
  > input {
    opacity: 0;
  }
  > input + label {
    position: relative;
    padding-left: 25px;
    cursor: pointer;
    &:before {
      content: "";
      position: absolute;
      left: 0;
      top: 1px;
      width: 18px;
      height: 18px;
      border: 1px solid #1890ff;
      background: #ffffff;
      border-radius: 50%;
    }
    &:after {
      content: "";
      position: absolute;
      top: 4px;
      left: 3px;
      width: 12px;
      height: 12px;
      background: #1890ff;
      border: 1px solid #1890ff;
      border-radius: 50%;
      transition: all 0.2s;
    }
  }
  > input:not(:checked) + label {
    &:after {
      opacity: 0;
      transform: scale(0);
    }
  }
  > input:checked + label {
    &:after {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const Avatar = styled.img`
  padding: 0.9rem;
  height: 10rem;

  width: 100%;
  &:hover {
    background-color: ${({ theme }) =>
      theme === "light" ? "#E8E8E8" : "rgba(150, 150, 150, 0.7)"};
  }
`;

const Name = styled.h1`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  align-self: flex-start;
  color: ${({ theme }) => (theme === "light" ? "#1a1a1a" : "#ffffff")};
  padding-left: 21px;
`;

const NameIconText = styled.div`
  background-color: ${({ theme }) =>
    theme === "light" ? "#FFFFFF" : "#383838"};
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  width: 100%;
`;

const Icon = styled.img``;

const Text = styled.p`
  margin: 1rem 2rem;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;

  color: ${({ theme }) => (theme === "light" ? "#1a1a1a" : "#ffffff")};
`;

const IconText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: flex-start;
  padding-left: 21px;
`;

const BottomIconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 100%;
  background: ${({ theme }) => (theme === "light" ? "#fafafa" : "#1a1a1a")};
  box-shadow: 0px -1px 0px ${({ theme }) => (theme === "light" ? "#e8e8e8" : "#4f4f4f")};
`;
