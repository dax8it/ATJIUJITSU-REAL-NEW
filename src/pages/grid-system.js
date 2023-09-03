import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const ElementsPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="Elements" />

      <article className="post-content page-template no-image">
        <div className="post-content-body">

          <hr />

          <a
            href="javascript:void(
        window.open(
          'https://form.jotform.com/atjiujitsudev/studio-membership',
          'blank',
          'scrollbars=yes,
          toolbar=no,
          width=700,
          height=500'
        )
      )
    "
          >
            ATJIUJITSUNYC MEMBERSHIP FORM
          </a>

          <br />

          <div
            class="maonrails-schedule maonrails-frame-container"
            attr-gym="DL7vA"
          ></div>

          <br />

          <hr />
          <h2 id="images">Images</h2>
          <figure className="kg-card kg-image-card">
            <Img
              fluid={data.smallPic.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>Regular image</figcaption>
          </figure>
          <figure className="kg-card kg-image-card kg-width-wide">
            <Img
              fluid={data.medPic.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>Large image</figcaption>
          </figure>
          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.largePic.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>Full bleed image</figcaption>
          </figure>

          <hr />
   
          <h2 id="grid-system">Grid system</h2>
          
          <div className="row">
                  <div className="col-6">
                      <div
                          style={{
                          padding: "1rem 0",
                          textAlign: "center",
                          background: "#1d1d1f",
                          }}
                      >
                         <figure className="kg-card kg-image-card">
            <Img
              fluid={data.smallPic.childImageSharp.fluid}
              className="kg-image"
            />
          </figure>
                      </div>
                  </div>
                  <div className="col-6">
                      <div
                          style={{
                          padding: "1rem",
                          textAlign: "left",
                          background: "#1d1d1f",
                          }}
                      >
                         <h2>Martial Arts are the Way</h2>
                         <p>Write som text here and see how out goes.
                            Maybe this will work we shall see.
                         </p>
                         <p>Write som text here and see how out goes.
                            Maybe this will work we shall see.
                         </p>
                         <p>Write som text here and see how out goes.
                            Maybe this will work we shall see.
                         </p>
                         <a href="#" className="button fit">
                            Your move lolipop boi o
                        </a>
                      </div>
                  </div>
          </div>

        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    smallPic: file(
      relativePath: { eq: "fabio-comparelli-696506-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    medPic: file(relativePath: { eq: "sophia-valkova-30139-unsplash.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    largePic: file(
      relativePath: { eq: "vladimir-malyutin-98174-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <ElementsPage location={props.location} data={data} {...props} />
    )}
  />
)
