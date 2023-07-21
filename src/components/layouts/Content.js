import { Container } from "../styles/Container.styled";
import { Flex } from "../styles/Flex.styled";
export default function Content({ children }) {
  return (
    <Container>
      <Flex>{children}</Flex>
    </Container>
  );
}
