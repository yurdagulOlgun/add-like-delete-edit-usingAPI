// import { Nav } from "../../styledComponents"
import styled from "styled-components";

export default function NavBar()  {
    return(
        <>
            <Nav>
                <Menu>
                    <MenuText >bulamadım hala</MenuText>
                </Menu>
            </Nav>
        </>
    )
}

const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: violet;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  position: relative;
`;

const MenuText = styled.p`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  margin: auto;
  color: darkviolet;
  transition: all 0.3s ease-in;
  font-size: 1.5rem;
  &:hover {
    color: #240046;
  }
`;