import SocialIcons from "../SocialIcons";
import { Container } from "../styles/Container.styled";
import { Flex } from "../styles/Flex.styled";
import { StyledFooter } from "../styles/Footer.styled";

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <Flex>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>

          <SocialIcons />
        </Flex>

        <p>
          Copyright &copy; {new Date().getFullYear()} All rights reserved | This
          website is made with by Hoaan
        </p>
      </Container>
    </StyledFooter>
  );
}
