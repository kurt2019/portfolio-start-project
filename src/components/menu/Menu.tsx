import React from 'react';
import styled from "styled-components";

// чтобы не записывать так, записываем в упрощенной форме сразу в компоненту(ниже)
//type MenuPropsType = {
//    menuItems: Array<string> }


export const Menu = (props: {menuItems: Array<string> }) => {
    return (
        <StyledMenu>
            <ul>

                {props.menuItems.map((item , index) => {
                    return (
                        <li key={index}>
                            <a href={""}> {item} </a>
                        </li>
                    )
                })}


            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
  }
`