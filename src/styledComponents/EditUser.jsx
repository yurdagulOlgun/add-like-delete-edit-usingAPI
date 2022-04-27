import styled from "styled-components";

export default function EditUser({
  setIsOpen,
  name,
  setName,
  email,
  setEmail,
  phone,
  setPhone,
  website,
  setWebsite,
  editClickHandler,
}) {
  const formSubmitHandler = (e) => {
    e.preventDefault();
  };

  const inputChangeHandler = (e) => {
    setTimeout(() => {
      setName(e.target.value);
      setEmail(e.target.value);
      setPhone(e.target.value);
      setWebsite(e.target.value);
    }, 300);
  };
  // console.log(name,email,phone,website);
  return (
    <>
      <FormWrapper>
        <Form onSubmit={formSubmitHandler}>
          <Header>
            <HeaderText>Edit User</HeaderText>
            <Close onClick={() => setIsOpen(false)}>x</Close>
          </Header>

          <WrapperWrapper>
            <LabInWrapper>
              <Label>Name:</Label>
              <Input
                type="text"
                onChange={inputChangeHandler}
                defaultValue={name}
              />
            </LabInWrapper>
            <LabInWrapper>
              <Label>Email:</Label>
              <Input type="text" onChange={inputChangeHandler} />
            </LabInWrapper>
            <LabInWrapper>
              <Label>Phone:</Label>
              <Input type="text" onChange={inputChangeHandler} />
            </LabInWrapper>
            <LabInWrapper>
              <Label>Website: </Label>
              <Input type="text" onChange={inputChangeHandler} />
            </LabInWrapper>
          </WrapperWrapper>
          <ButtonWrapper>
            <Cancel type="submit" onClick={() => setIsOpen(false)}>
              Cancel
            </Cancel>
            <Save type="submit" onClick={() => editClickHandler}  >Save</Save>
          </ButtonWrapper>
        </Form>
      </FormWrapper>
    </>
  );
}

const FormWrapper = styled.div`
  border-radius: 4px;
  position: fixed;
  background: #00000050;
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
  background: #ffffff;
  border-radius: 4px;

  border: 1px solid #999;
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
  color: #1a1a1a;
  padding-right: 8px;
`;

const Input = styled.input`
  background: #ffffff;
  border: 1px solid #e8e8e8;
  border-radius: 4px;

  &:focus {
    border: 1px solid #1890ff;
    outline: none;
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
  margin-top: -40px;
  margin-bottom: 40px;
  box-shadow: 0px 2px #e8e8e8;
  gap: 200px;
`;

const HeaderText = styled.h1`
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  color: #1a1a1a;
`;
