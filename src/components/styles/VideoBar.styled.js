import styled from "styled-components";

export const StyledVideoBar = styled.div`
  position: relative;
  margin-top: 22px;
  width: 100%;
  max-width: 100%;
  height: 40vh;
  background-color: #272727;
  border-radius: 12px;
  overflow-x: hidden;
`;

export const StyledCardWrapper = styled.div`
  position: absolute;
  margin-top: 12px;
  margin-left: 220px;
  top: 50%;
  left: 0;
  transform: ${({transform}) => transform || "translateY(-50%)"};
  height: 36vh;
  transition: ease-out 0.6s;
  display: flex;
`;
