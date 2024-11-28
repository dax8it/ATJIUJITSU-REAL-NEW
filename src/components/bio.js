/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <section>
            <GatsbyImage
              image={getImage(data.avatar)}
              alt={author}
              className="bio-avatar"
              style={{
                marginBottom: 0,
              }}
            />
            <p>
              Written by <strong>{author}</strong> who lives and works in Queens
              building useful things.
              {` `}
              <a href={`https://twitter.com/${social.twitter}`}>
                You should follow him on Twitter
              </a>
            </p>
          </section>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        gatsbyImageData(width: 50, height: 50, layout: FIXED)
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
