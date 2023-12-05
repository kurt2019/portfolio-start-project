import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link";

// чтобы не записывать так, записываем в упрощенной форме сразу в компоненту(ниже)
//type MenuPropsType = {
//    menuItems: Array<string> }


export const TabMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMenu>
            <ul>

                {props.menuItems.map((item, index) => {
                    return (
                        <ListItem key={index}>
                            <Link href={""}> {item} </Link>
                        </ListItem>
                    )
                })}


            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
  margin-bottom: 20px;
  ul {
    display: flex;
    gap: 20px;
    justify-content: center;
  }
`
const ListItem = styled.li`
  position: relative;
  z-index: 0;
`

