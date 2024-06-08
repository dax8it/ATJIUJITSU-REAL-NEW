import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Helmet } from "react-helmet"

import Layout from "../components/layout2"
import SEO from "../components/seo"

import "../utils/css/components/forms.css"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />


        <Helmet>
          {post.frontmatter.title === "2024 Jiu-Jitsu Summer Camp Kids Activities" && (
            <>
              <script
                async
                src="https://www.googletagmanager.com/gtag/js?id=AW-10826074700"
              ></script>
              <script>
                {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'AW-10826074700');
                `}
              </script>
            </>
          )}
        </Helmet>


          
        <article
          className={`post-content ${post.frontmatter.thumbnail || `no-image`}`}
        >
          <header className="post-content-header">
            <h1 className="post-content-title">{post.frontmatter.title}</h1>
          </header>

          {post.frontmatter.description && (
            <p class="post-content-excerpt">{post.frontmatter.description}</p>
          )}

          {post.frontmatter.thumbnail && (
            <div className="post-content-image">
              <Img
                className="kg-image"
                fluid={post.frontmatter.thumbnail.childImageSharp.fluid}
                alt={post.frontmatter.title}
              />
            </div>
          )}

          <div
            className="post-content-body"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />

          <footer className="post-content-footer">
            <h2>
              Make sure to check out all the{" "}
              <Link to={`/tags/blog`}>
                <b>LATEST NEWS</b>
              </Link>{" "}
              on our{" "}
              <Link to={`/tags/blog`}>
                <b>BLOG</b>
              </Link>
              .
            </h2>
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
            fluid(maxWidth: 1360) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
