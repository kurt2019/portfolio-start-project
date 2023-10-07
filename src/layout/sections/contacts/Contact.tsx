import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";

export const Contact = () => {
    return (
        <StyledContacts>
            <SectionTitle>Contact</SectionTitle>
            <StyledForm>
                <Field placeholder={"name"}/>
                <Field placeholder={"subject"}/>
                {/*отрисовиваем как textarea c помощю ключевого слова as */}
                <Field placeholder={"message"} as={"textarea"}/>
                <Button type={"submit"}>Send message</Button>
            </StyledForm>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    min-height: 50vh;
  background-color: #fffae1;
`

const StyledForm = styled.form`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0 auto;
`

const Field = styled.input`
    
`

