import { useEffect, useState } from "react";

import { StyledVideoBar, StyledCardWrapper } from "./styles/VideoBar.styled";

export default function VideoBar({ children }) {
  const [transform, setTransform] = useState("");
  const browserWidth = window.innerWidth;

  const handleMouseMove = (mouseEvent) => {
    if (mouseEvent.clientX >= 0 && mouseEvent.clientX <= browserWidth) {
      const translateValue = (mouseEvent.clientX * 100) / browserWidth;
      setTransform(`translate(-${translateValue}%, -50%)`);
    }
  };

  return (
    <StyledVideoBar onMouseMove={(mouseEvent) => handleMouseMove(mouseEvent)}>
      <StyledCardWrapper transform={transform}>{children}</StyledCardWrapper>
    </StyledVideoBar>
  );
}
