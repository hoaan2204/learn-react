import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  align-self: center;
  flex-wrap: wrap;

  /* & > div */
  & > ul {
    flex: 1;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`;
