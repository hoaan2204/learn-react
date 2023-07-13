import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  z-index: 10;

  h1 {
    padding-left: 20px;
    color: #42ecf5;
  }
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

export { Nav, NavIcon, SidebarNav, SidebarWrap };
