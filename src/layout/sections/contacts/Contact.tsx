import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {S} from "./Contacts_Styled";

export const Contact:React.FC = () => {
    return (
        <S.Contacts>
            <Container>
            <SectionTitle>Contact</SectionTitle>
            <S.Form>
                <S.Field placeholder={"name"}/>
                <S.Field placeholder={"subject"}/>
                {/*отрисовиваем как textarea c помощю ключевого слова as */}
                <S.Field placeholder={"message"} as={"textarea"}/>
                <Button type={"submit"}>Send message</Button>
            </S.Form>
            </Container>
        </S.Contacts>
    );
};



