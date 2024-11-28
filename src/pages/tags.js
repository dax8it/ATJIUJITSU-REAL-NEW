import React from "react"
import _ from "lodash"
import { Link } from "gatsby"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout2"
import SEO from "../components/seo"

// import "../utils/global.scss"
import "../utils/normalize.css"
import "../utils/css/screen.css"

const TagIndex = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const tags = data.allMarkdownRemark.distinct

  return (
    <Layout title={siteTitle}>
      <SEO title="The Best Martial Arts and Jiujitsu School in Jackson Heights Queens NYC" />
      <header className="tag-page-head">
        <h1 className="page-head-title">Tags({tags.length})</h1>
      </header>
      <div className="tag-container">
        {tags.map(tag => {
          return (
            <Link
              key={tag}
              style={{ textDecoration: "none" }}
              to={`/tags/${_.kebabCase(tag)}`}
            >
              <div className="tag-item">#{tag}</div>
            </Link>
          )
        })}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
      distinct(field: {frontmatter: {tags: SELECT}})
    }
  }
`

export default props => (
  <StaticQuery
    query={pageQuery}
    render={data => <TagIndex props data={data} />}
  />
)
