// import { Nav } from "../../styledComponents"
import styled from "styled-components";

export default function NavBar()  {
    return(
        <>
            <Nav>
                <Menu>
                    <MenuText >Users</MenuText>
                </Menu>
            </Nav>
        </>
    )
}

const Nav = styled.div`
  z-index: 9999999999999999;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: violet;
  position: sticky;
  top: -100%;
  left: 100%;
  right: 100%;
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
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  &:hover {
    color: #240046;
  }
`;