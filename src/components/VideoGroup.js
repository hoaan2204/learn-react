import { useEffect, useState } from "react";

import { StyledVideoGroup, StyledCardWrapper } from "./styles/VideoGroup.styled";

export default function VideoGroup({ children }) {
  return (
    <StyledVideoGroup>
      <StyledCardWrapper>{children}</StyledCardWrapper>
    </StyledVideoGroup>
  );
}
