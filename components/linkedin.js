import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"

const LinkedInImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "linkedin.png" }) {
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

export default LinkedInImage
