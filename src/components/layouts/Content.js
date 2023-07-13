import { useEffect, useState } from "react";

import Watch from "../Watch";
import Gallery from "../Gallery";
import Create from "../crud/Create";
import { Container } from "../styles/Container.styled";
import { Flex } from "../styles/Flex.styled";

export default function Content({ page }) {
  return (
    <Container>
      <Flex>
        {page === "home" ? (
          <Watch />
        ) : page === "gallery" ? (
          <Gallery />
        ) : (
          <Create />
        )}
      </Flex>
    </Container>
  );
}
