import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout2"
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

          <h1>Class Schedule</h1>
        <p>Plan your martial arts training with our detailed calendar schedule. 
          Find class timings, special events, and kids martial arts sessions.</p>

          <br />

          <div
            class="maonrails-schedule maonrails-frame-container"
            attr-gym="DL7vA"
          ></div>

          <br />

          <hr />


      
      

{/* ----- THIS IS THE CODE FOR HOME PAGE ----- */}




          <h2 id="grid-system">@Jiujitsu Martial Arts Training, Jackson Heights Queens, NY</h2>

      {/* 12 COLUMNS -  */}     

          <div className="row">
            <div className="col-12">
              <div>
                
                <h2>@Jiujitsu Martial Arts Training, Jackson Heights Queens, NY</h2>
                  <p>Discover the best BJJ and martial arts training with comprehensive 
                    programs offering superior Jiujitsu instruction, welcoming everyone 
                    from complete beginners to pro fighters.
                  </p>

                  <div className="row"> 
                    <div  
                    className="col-6" align="center" >
                    <a href="https://at-jiujitsu-nyc.gymdesk.com/signup" className="button primary large">
                        Ready for a Trail?
                    </a>
                    </div>
                    <div  className="col-6" align="center">
                    <a href="https://at-jiujitsu-nyc.gymdesk.com/signup" className="button primary large">
                        Sign up! No Contract!
                    </a>
                  </div>
                 </div>
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
    relativePath: { eq: "kids-jiujitsu-jackson-heights-queens.jpg" }
  ) {
    childImageSharp {
      fluid(maxWidth: 1360) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  medPic: file(relativePath: { eq: "adult-bjj-queens.jpg" }) {
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
