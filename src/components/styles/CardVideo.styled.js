import styled from "styled-components";

export const StyledCardVideo = styled.div`
  position: relative;
  width: 333px;
  height: 100%;
  margin: -12px 12px;
  padding: 0 12px;
  border-radius: 12px;
  box-shadow: 0px 0px 12px 1px rgb(255, 255, 255);

  h5 {
    margin: 0;
    padding: 6px 6px;
    font-size: 18px;
    color: #fff;
  }

  &:hover {
    transform: scale(1.02);
  }

  button {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }
`;
