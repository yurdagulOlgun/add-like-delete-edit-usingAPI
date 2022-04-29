import styled from "styled-components";
import phone from "../assets/phone.png";
import email from "../assets/email.png";
import link from "../assets/link.png";
import FavEditDel from "./FavEditDel";
export default function UserCard({ item,popupHandler,delButtonHandler,editClickHandler }) {

  // function editClickHandler(){
  //   console.log(item.id);
  // }

  return (
    <>
      <Container>
        <Avatar
          src={`https://avatars.dicebear.com/v2/avataaars/${item.firstName}.svg`}
        />
        <Name>
          {item.firstName} {item.lastName}
        </Name>
        <IconText>
          <Icon src={email} />
          <Text>{item.email}</Text>
        </IconText>
        <IconText>
          <Icon src={phone} />
          <Text>{item.phone}</Text>
        </IconText>
        <IconText>
          <Icon src={link} />
          <Text>https://{item.domain}</Text>
        </IconText>
        <BottomIconsWrapper>
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
  border: 1.5px solid #f2f2f2;
  filter: drop-shadow(0px 4px 4px #f2f2f2);
  background-color: #FAFAFA;
`;

const Avatar = styled.img`
  padding: 0.9rem;
  height: 10rem;

  width: 100%;
  &:hover {
    background-color: #E8E8E8;
  }
`;

const Name = styled.h1`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  align-self: flex-start;
  color: #1a1a1a;
  padding-left: 21px;
`;

const Icon = styled.img``;

const Text = styled.p`
  margin: 1rem 2rem;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;

  color: #1a1a1a;
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
  background: #fafafa;
  box-shadow: 0px -1px 0px #e8e8e8;
`;