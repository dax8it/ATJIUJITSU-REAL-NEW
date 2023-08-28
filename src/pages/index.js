import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import Bio from "../components/bio"
import PostCard from "../components/postCard"

// import "../utils/global.scss"
import "../utils/normalize.css"
import "../utils/css/screen.css"
//TODO: switch to staticQuery, get rid of comments, remove unnecessary components, export as draft template
const BlogIndex = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  let postCounter = 0

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Best BJJ & Martial Arts Training in Jackson Heights, Queens"
        keywords={[
          `bjj`,
          `Brazilian Jiu Jitsu`,
          `kickboxing`,
          `muay thai`,
          `MMA`,
          `mixed martial arts`,
          `yoga`,
          `Kids martial arts`,
          `Kids fitness`,
          `judo`,
          `martial arts`,
          `Jackson Heights`,
          `Queens`,
          `Queens Jiujitsu`,
          `Martial Arts Queens`,
          `Jackson Heights Martial Arts`,
          `Kickboxing Queens`,
          `Jiu Jitsu Jackson Heights`,
          `Kids Martial Arts`,
          `Adult Kickboxing`,
          `Adult Jiu Jitsu Classes`,
          `Kids Jiu Jitsu Classes`,
          `Anti-Bullying Martial Arts`,
          `Martial Arts Fitness`,
          `Self-defense techniques`,
          `Martial Arts Community`,
          `Jiujitsu Martial Arts`,
          `fitness`,
          `Karate Classes Queens`,
          `Fitness Workout Queens`,
          `Close-range defense`,
          `Yoga Flexibility`,
          `Martial Arts Cardio`,
          `Martial Arts Instructors Queens`,
          `Martial Arts Class Schedule`,
          `Martial Arts Class Cost`,
          `Martial Arts Beginners Class`,
          `Martial Arts Jackson Heights`,
        ]}
      />
      {/* <Bio /> */}
      {data.site.siteMetadata.description && (
        <header className="page-head">
          <h2 className="page-head-title">
            {data.site.siteMetadata.description}
          </h2>
          <p />
          <br />
          <p class="post-content-excerpt">
            {" "}
          Where can you find top-notch BJJ & Martial Arts training in Jackson Heights, Queens?<br /><br />
          Discover the best BJJ and martial arts training with comprehensive programs offering superior Jiujitsu instruction, welcoming everyone from complete beginners to pro fighters. 
          Whether you're into fitness or aiming to compete, 
          this place has got you covered.
          </p>

        </header>
      )}
      <div className="post-feed">
        {posts.map(({ node }) => {
          postCounter++
          return (
            <PostCard
              key={node.fields.slug}
              count={postCounter}
              node={node}
              postClass={`post`}
            />
          )
        })}
      </div>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___order], order: ASC }
      filter: { frontmatter: { home: { eq: true } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
            description
            home
            order
            tags
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 1360) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <BlogIndex location={props.location} props data={data} {...props} />
    )}
  />
)
