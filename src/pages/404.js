import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout2"
import SEO from "../components/seo"

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="404: Not Found" />
        <h1>This isn't good</h1>
        <p>
          You lost your way, but it's never to late to find the right path.
          Check out the rest of the site, come in and ROLL with us! OSS!
        </p>
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
