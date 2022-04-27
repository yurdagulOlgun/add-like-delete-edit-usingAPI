import styled from "styled-components";

export default function EditUser({ setIsOpen }) {
  const formSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <FormWrapper>
        <Form onSubmit={formSubmitHandler}>
          <Close onClick={() => setIsOpen(false)}>x</Close>
          <WrapperWrapper>
            <LabInWrapper>
              <Label>Name:</Label>
              <Input type="text" />
            </LabInWrapper>
            <LabInWrapper>
              <Label>Email:</Label>
              <Input type="text" />
            </LabInWrapper>
            <LabInWrapper>
              <Label>Phone:</Label>
              <Input type="text" />
            </LabInWrapper>
            <LabInWrapper>
              <Label>Website: </Label>
              <Input type="text" />
            </LabInWrapper>
          </WrapperWrapper>
          <ButtonWrapper>
            <Cancel type="submit" onClick={() => setIsOpen(false)}>
              Cancel
            </Cancel>
            <Save type="submit">Save</Save>
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
  /* top: 0; */
  /* left: 0; */
  z-index: 999999;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 5%;
  justify-content: space-around;
  position: relative;
  /* width: 50%; */
  width: 468px;
  height: 360px;
  left: 30px;
  top: 30px;
  margin: auto;
  /* height: 50%; */
  max-height: 70vh;
  margin-top: calc(100vh - 85vh - 20px);
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
`;

const WrapperWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: space-around;
`;

const Label = styled.label`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  align-self: flex-start;
  color: #1a1a1a;
  padding-right: 21px;
`;

const Input = styled.input``;

const Cancel = styled.button`
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  text-align: center;
  background: #ffffff;
  border: 1px solid #e8e8e8;
  box-sizing: border-box;
  border-radius: 4px;
`;

const Save = styled.button`
  border: none;
  text-decoration: none;
  /* display: inline-block; */
  background: #1890ff;
  text-align: center;
  /* box-sizing: border-box; */
  border-radius: 4px;
  cursor: pointer;
  /* margin-left: 21px; */
`;

const Close = styled.button`
  border: none;
  text-decoration: none;
  cursor: pointer;

  display: flex;
  align-self: flex-end;
  /* display: inline-block; */
  /* position: absolute; */
  /* right: calc(10% - 170px);
  top: calc(100vh - 75vh - 15px); */
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
  justify-content: flex-end;
`;
