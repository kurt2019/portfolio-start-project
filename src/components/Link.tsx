import styled from "styled-components";
import {theme} from "../styles/Theme";
export const Link = styled.a`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 10px;
  
  &:hover {
    &::before {
      height: 10px;
    }
  }
  
  &::before{
    content: "";
    display: inline-block;
    background-color: ${theme.colors.accent};

    position: absolute;
    bottom: -6px; // -5px does not fit as in the video
    left: 0;
    right: 0;
    z-index: 1;
  }
`