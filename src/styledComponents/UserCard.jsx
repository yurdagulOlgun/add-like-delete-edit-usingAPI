import styled from "styled-components";

export default function UserCard({ item }) {
  return (
    <>
      {/* <Wrapper> */}
      <Container>
        <Avatar
          src={`https://avatars.dicebear.com/v2/avataaars/${item.firstName}.svg`}
        />
        <Name>
          {item.firstName} {item.lastName}
        </Name>
        <Text>{item.email}</Text>
      </Container>
      {/* </Wrapper> */}
    </>
  );
}

// const Wrapper = styled.div`
//     display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
// `;

const Container = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  margin-top: 1rem;
  /* position: relative; */
  width: 280px;
  margin-bottom: 1rem;
  margin-left: 1rem;
  border: 1.5px solid #f2f2f2;
  filter: drop-shadow(0px 4px 4px #f2f2f2);
`;

const Avatar = styled.img`
  /* position: absolute; */
  padding: 0.9rem;
  height: 10rem;

  width: 100%;
  &:hover {
    background-color: #f2f2f2;
  }
`;

const Name = styled.h1`
  font-weight: bold;
  font-size: 1.5rem;
`;

const Text = styled.p`
  margin: 1rem 2rem;
  font-size: 0.9rem;
`;
