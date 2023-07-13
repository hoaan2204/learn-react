import styled from "styled-components";

export const StyledForm = styled.div`
  width: 100%;
`;

export const Form = styled.form`
  width: 800px;
  height: 100%;
  margin: 0 auto;
  padding: 24px;
  background-color: white;
  border-radius: 16px;

  label {
    display: block;
    margin: 12px 0;
    font-size: 16px;
  }

  input {
    width: 100%;
    margin: 0 auto;
    height: 40px;
    padding: 10px;
  }
`;

export const Button = styled.button`
  display: block;
  margin: 12px auto;
  padding: 12px 24px;
  border-radius: 12px;
  background-color: aliceblue;
`;
