import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout2"
import SEO from "../components/seo"

import "../utils/css/components/forms.css"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const thumbnail = post.frontmatter.thumbnail ? getImage(post.frontmatter.thumbnail) : null

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article
          className={`post-content ${post.frontmatter.thumbnail ? 'has-image' : 'no-image'}`}
        >
          <header className="post-content-header">
            <h1 className="post-content-title">{post.frontmatter.title}</h1>
          </header>

          {post.frontmatter.description && (
            <p className="post-content-excerpt">{post.frontmatter.description}</p>
          )}

          {thumbnail && (
            <div className="post-content-image">
              <GatsbyImage
                className="kg-image"
                image={thumbnail}
                alt={post.frontmatter.title}
              />
            </div>
          )}

          <div
            className="post-content-body"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
           <hr />

          <footer className="post-content-footer">
          </footer>
        </article>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        thumbnail {
          childImageSharp {
            gatsbyImageData(width: 1360, height: 1000, placeholder: BLURRED, formats: [AUTO, WEBP], transformOptions: {fit: COVER})
          }
          relativePath
        }
      }
    }
  }
`
