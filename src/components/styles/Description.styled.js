import styled from "styled-components";

export const StyledDescription = styled.div`
  margin-left: 12px;
  width: 29%;
  padding: 12px;
  background-color: #272727;
  border-radius: 12px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 12px 0 0 0 ;
    flex-direction: column;
    width: 100%;
  }
  h2 {
    font-size: 32px;
    margin: 6px 0;
    color: #fff;
  }
  h5 {
    margin: 20px 0 20px 0;
    color: #fff;
    font-size: 22px;
  }
  p {
    color: #fff;
    margin: 1px 0;
  }
`;
