import React from "react"

import Content from "../Common/Content"
import Wrapper from "../Common/Wrapper"

import ContactImage from "../../images/contact/contact.png"

import { ContactWrapper, ImageWrapper, InfosWrapper} from "./styled"

const Contact= () => (
    <>
        <Wrapper>
            <Content>
                <ContactWrapper>
                    <InfosWrapper>
                        <h1>Contacto</h1>
                        <p>Para Desarrollo de projectos web y de escritorio.</p>
                        <p>Puedes contactarte conmigo via <a href="https://www.instagram.com/mnoc018/?hl=es-la">Instagram.</a> </p>
                        
                    </InfosWrapper>
                    <ImageWrapper>
                        <img src={ContactImage} alt="" />
                    </ImageWrapper>
                </ContactWrapper>
            </Content>
        </Wrapper>
    </> 
)

export default Contact
