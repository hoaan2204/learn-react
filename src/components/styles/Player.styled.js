import styled from "styled-components";
import ReactPlayer from "react-player";

export const StyledPlayer = styled.div`
  position: relative;
  height: 600px;
  width: 70%;
  max-width: 100%;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    width: 100%;
  }
`;

export const StyledReactPlayer = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
`;
