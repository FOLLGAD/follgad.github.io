import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"

const GithubImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "GitHub-Mark.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default GithubImage
