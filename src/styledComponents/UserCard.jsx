import styled from "styled-components";
import phone from "../assets/phone.png";
import email from "../assets/email.png";
import link from "../assets/link.png";
import FavEditDel from "./FavEditDel";
import { useSelector } from "react-redux";

export default function UserCard({
  item,
  popupHandler,
  delButtonHandler,
  editClickHandler,
}) {
  const { theme } = useSelector((state) => state);
  const themeName = theme.themeName;
  return (
    <>
      <Container theme={themeName}>
        <Avatar
          src={`https://avatars.dicebear.com/v2/avataaars/${item.firstName}.svg`}
          theme={themeName}
        />
        <NameIconText theme={themeName} >
          <Name theme={themeName} >
            {item.firstName} {item.lastName}
          </Name>
          <IconText theme={themeName}>
            <Icon src={email} />
            <Text theme={themeName} >{item.email}</Text>
          </IconText>
          <IconText theme={themeName} >
            <Icon src={phone} />
            <Text theme={themeName} >{item.phone}</Text>
          </IconText>
          <IconText theme={themeName} >
            <Icon src={link} />
            <Text theme={themeName} >https://{item.domain}</Text>
          </IconText>
        </NameIconText>
        <BottomIconsWrapper theme={themeName} >
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
  /* filter: drop-shadow(0px 4px 4px #f2f2f2); */
  background-color: ${({ theme }) =>
    theme === "light" ? "#FAFAFA" : "#1A1A1A"};
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
