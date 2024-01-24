import React from 'react';
import photo from '../../../assets/images/photo.jpg'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {S} from "./Main_Styles";
import Typewriter from "typewriter-effect";

export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"} wrap={"wrap"}>
                    <div>
                        <S.SmallText>Hi There</S.SmallText>
                        <S.Name>I am <span>Svetlana Dyablo</span></S.Name>
                        {/*<S.MainTitle>A Web Developer.</S.MainTitle>*/}
                        <S.MainTitle>
                            <p>A Web Developer.</p>
                            <Typewriter
                                options={{
                                    strings: ['A Web Developer.', 'A Frontend Developer', 'A Web Designer'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 150,
                                }}
                            />
                        </S.MainTitle>
                    </div>

                    <S.PhotoWrapper>
                        <S.Photo src={photo} alt=""/>
                    </S.PhotoWrapper>

                </FlexWrapper>
            </Container>
        </S.Main>
    );
};



