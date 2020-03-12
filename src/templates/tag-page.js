import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCard from "../components/postCard"

class TagPageTemplate extends React.Component {
  render() {
    const props = this.props
    const tag = this.props.pageContext.tag
    const posts = this.props.data.allMarkdownRemark.edges
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          // title={`#${tag}`}
          title={`#${tag.charAt(0).toUpperCase() + tag.slice(1)}`}
          keywords={[
            `${tag}`,
            `jiujitsu`,
            `bjj`,
            `mma`,
            `yoga`,
            `kickboking`,
            `judo`,
            `program`,
            `jackson heights`,
            `queens`,
            `martial arts`,
          ]}
        />
        <header className="tag-page-head">
          <h1 className="page-head-title">
            Latest News & Events{/*{tag}*/}
            {/*({props.data.allMarkdownRemark.totalCount})*/}
          </h1>
          <br />
          <p class="post-content-excerpt">
            All the latest news and events from our Jiutjistu and Martial Arts
            family here at AT-JIUJITSU in Jackson Heights, Queens NYC
          </p>
        </header>
        <div className="post-feed">
          {posts.map(({ node }) => {
            return (
              <PostCard key={node.fields.slug} node={node} postClass={`post`} />
            )
          })}
        </div>
      </Layout>
    )
  }
}

export default TagPageTemplate

export const pageQuery = graphql`
  query PostByTag($tag: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { tags: { in: [$tag] } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
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
