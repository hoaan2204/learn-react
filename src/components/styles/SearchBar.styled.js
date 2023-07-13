import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const StyledSearchBar = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 36px;
  align-items: center;
  width: 560px;
  input {
    width: 100%;
    height: 100%;
    padding: 12px;
    line-height: 32px;
    border-radius: 20px;
  }
`;

const StyledFaSearch = styled(FaSearch)`
  position: absolute;
  top: 0;
  right: 0;
`;

const StyledSearchHint = styled.ul`
  position: absolute;
  font-size: 14px;
  background-color: #fff;

  li {
    list-style: none;
    textdecoration: none;
  }
`;

export { StyledSearchBar, StyledSearchHint, StyledFaSearch };
