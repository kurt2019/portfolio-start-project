import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link";

// чтобы не записывать так, записываем в упрощенной форме сразу в компоненту(ниже)
//type MenuPropsType = {
//    menuItems: Array<string> }


export const TabMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledTabMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return (
                        <ListItem key={index}>
                            <Link href={""}> {item} </Link>
                        </ListItem>
                    )
                })}
            </ul>
        </StyledTabMenu>
    );
};

const StyledTabMenu = styled.nav`
  ul {
    display: flex;
    //gap: 20px;
    justify-content: space-between;
    max-width: 352px;
    width: 100%;
    border: 1px solid chartreuse;
    margin: 0 auto 45px;
  }
`
const ListItem = styled.li`

`






