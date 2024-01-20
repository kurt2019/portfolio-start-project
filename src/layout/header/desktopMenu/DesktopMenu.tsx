import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {Menu} from "../menu/Menu";


export const DesktopMenu: React.FC<{menuItems: Array<string> }> = (props: {menuItems: Array<string> }) => {
    return (
        <StyledHDesktopMenu>
            <Menu menuItems={props.menuItems}/>
        </StyledHDesktopMenu>
    );
};

const StyledHDesktopMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
  }
  
  @media ${theme.media.tablet} {
    display: none;
  }
`
