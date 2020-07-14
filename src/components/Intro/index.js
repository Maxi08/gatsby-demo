import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Wrapper, ImageContainer, IntroContainer} from "./styled"

const Intro = () => (
    <>
    <Wrapper>
      <ImageContainer>
          <Image/>
      </ImageContainer>
      <IntroContainer>
        <header>
          <h1>Hola Soy  <b> <br/>Máxima Ozuna </b></h1>
          <h3>Ingeniera de Software- Republica Dominicana</h3>
        </header>
        <p>Me encanta aprender cosas nuevas, conocer de todo un poco, llevar la vida siempre con una sonrisa y agradecer por todo cada dia de mi vida. </p>
        <p>Un dia sin sonreir es un dia perdido. </p>
      </IntroContainer>
    </Wrapper>
    </> 
)

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "intro/photo2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 386) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}


export default Intro
