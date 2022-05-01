import styled from "styled-components";
import { useSelector } from "react-redux";

export default function EditUser({
  setIsOpen,
  firstName,
  setName,
  email,
  setEmail,
  phone,
  setPhone,
  domain,
  setDomain,
  editClickHandler,
}) {
  const { theme } = useSelector((state) => state);
  const themeName = theme.themeName;

  const formSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <FormWrapper theme={themeName}>
        <Form onSubmit={formSubmitHandler} theme={themeName}>
          <Header theme={themeName}>
            <HeaderText theme={themeName}>Edit User</HeaderText>
            <Close onClick={() => setIsOpen(false)}>x</Close>
          </Header>

          <WrapperWrapper>
            <LabInWrapper>
              <Label theme={themeName}>Name:</Label>
              <Input
                required
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={firstName}
                theme={themeName}
              />
            </LabInWrapper>
            <LabInWrapper>
              <Label theme={themeName}>Email:</Label>
              <Input
                required
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                theme={themeName}
              />
            </LabInWrapper>
            <LabInWrapper>
              <Label theme={themeName}>Phone:</Label>
              <Input
                required
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                theme={themeName}
              />
            </LabInWrapper>
            <LabInWrapper>
              <Label theme={themeName}>Website: </Label>
              <Input
                required
                type="text"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                theme={themeName}
              />
            </LabInWrapper>
          </WrapperWrapper>
          <ButtonWrapper>
            <Cancel type="submit" onClick={() => setIsOpen(false)}>
              Cancel
            </Cancel>
            <Save
              type="submit"
              onClick={(e) => {
                if (firstName && email && phone && domain) {
                  editClickHandler(e);
                }
              }}
            >
              Save
            </Save>
          </ButtonWrapper>
        </Form>
      </FormWrapper>
    </>
  );
}

const FormWrapper = styled.div`
  border-radius: 4px;
  position: fixed;
  background: ${({ theme }) =>
    theme === "light" ? "rgba(56, 56, 56, 0.2)" : "rgba(228, 228, 228, 0.5)"};
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 999999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 5%;
  position: relative;
  background: ${({ theme }) => (theme === "light" ? "#ffffff" : "#232323")};
  border-radius: 4px;
  overflow: auto;
`;

const LabInWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: flex-end;
  margin-bottom: 20px;
`;

const WrapperWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
`;

const Label = styled.label`
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  text-align: right;
  color: ${({ theme }) => (theme === "light" ? "#1a1a1a" : "#ffffff")};
  padding-right: 8px;
`;

const Input = styled.input`
  background: ${({ theme }) => (theme === "light" ? "#ffffff" : "#232323")};
  border: 1px solid
    ${({ theme }) => (theme === "light" ? "#e8e8e8" : "#4f4f4f")};
  border-radius: 4px;
  &:focus {
    border: 1px solid #1890ff;
    outline: none;
    color: ${({ theme }) => (theme === "light" ? "#1a1a1a" : "#ffffff")};
  }
`;

const Cancel = styled.button`
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  text-align: center;
  background: #ffffff;
  border: 1px solid #e8e8e8;
  box-sizing: border-box;
  border-radius: 4px;
  width: 70px;
  height: 32px;
  left: 0px;
  top: 0px;
  margin-right: 20px;
`;

const Save = styled.button`
  border: none;
  text-decoration: none;
  background: #1890ff;
  text-align: center;
  width: 70px;
  height: 32px;
  left: 0px;
  top: 0px;
  border-radius: 4px;
  cursor: pointer;
`;

const Close = styled.button`
  border: none;
  text-decoration: none;
  cursor: pointer;
  color: #969696;
  display: flex;
  align-self: flex-end;
  background: none;
  width: 25px;
  height: 25px;
  text-align: center;
  font-size: 20px;
  &:hover {
    color: #1890ff;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-start;
  /* margin-top: -40px; */
  margin-bottom: 40px;
  box-shadow: 0px 2px
    ${({ theme }) => (theme === "light" ? "#e8e8e8" : "#4f4f4f")};
  gap: 200px;
`;

const HeaderText = styled.h1`
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => (theme === "light" ? "#1a1a1a" : "#ffffff")};
`;
