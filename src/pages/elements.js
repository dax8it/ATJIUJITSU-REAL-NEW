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

{/* ----- THIS IS THE CODE FOR HOME PAGE ----- */}




          <h2 id="grid-system" align="center">@Jiujitsu Martial Arts Training, Jackson Heights Queens, NY</h2>

      {/* 2 COLUMNS - Picture RIGHT */}     

          <div className="row">
            <div className="col-12">
              <div align="center">
                
                <h2>@Jiujitsu Martial Arts Training, Jackson Heights Queens, NY</h2>
                  <p>Discover the best BJJ and martial arts training with comprehensive 
                    programs offering superior Jiujitsu instruction, welcoming everyone 
                    from complete beginners to pro fighters.
                  </p>

                  <a href="https://www.atjiujitsunyc.com/prices" className="button primary large">
                      Prices. No Contracts!
                  </a>
                  <a href="https://www.atjiujitsunyc.com/about" className="button primary large">
                      Learn More
                  </a>
              </div>
            </div>
          </div>

 {/* 2 COLUMNS - Picture Right */}    

          <div className="row">        
            <div className="col-6">
              <div>
                   <h2>Kids Martial Arts</h2>
                  <p>Martial arts is a structured system of training designed to 
                    improve physical fitness, mental discipline, and self-defense
                     skills. 
                     <br />                 
                <ul>
                    <li><a href="https://www.atjiujitsunyc.com/kids-jiujitsu-classes-in-queens/">
                          **Kids Jiu-Jitsu**: (5-9)</a></li>
                    <li><a href="https://www.atjiujitsunyc.com/kids-jiujitsu-classes-in-queens/">
                          **Kids Jiu-Jitsu**: (10-15)</a></li>
                    <li><a href="https://www.atjiujitsunyc.com/kids-kickboxing-classes-in-queens/">
                          **Kids Kickboxing**: (Ages 7-15)</a></li>
                    <li><a href="https://www.atjiujitsunyc.com/kids-mma/">
                          **Kids MMA**: (Ages 8-15)</a></li>
                    <li><a href="https://www.atjiujitsunyc.com/toddler-jiujitsu/">
                          **Toddlers Jiujitsu**: (Ages 3-5)</a></li>
          
                </ul>
                
                  </p>
                  <a href="https://www.atjiujitsunyc.com/tags/kids-programs/" className="button primary large">
                      Learn More
                  </a>
              </div>
            </div>
            <div className="col-6">
              <div>
                 <figure className="kg-card kg-image-card">
                      <Img
                      fluid={data.smallPic.childImageSharp.fluid}
                      className="kg-image"
                      />
                  </figure>
              </div>
            </div>
          </div>

     {/* 2 COLUMNS - Picture Left */} 


     <div className="row">        
            
            <div className="col-6">
              <div>
                 <figure className="kg-card kg-image-card">
                      <Img
                      fluid={data.medPic.childImageSharp.fluid}
                      className="kg-image"
                      />
                  </figure>
              </div>
            </div>

            <div className="col-6">
              <div>
                   <h2>Adults Martial Arts</h2>
                  <p>Maybe this will work we shall see.
                  </p>
                  <p>                  
                <ul>
                    <li>**Full-Body Workout**</li>
                    <li>**Cardio King**</li>
                    <li>**Shed Those Pounds**</li>
                    <li>**Flexibility & Mobility**</li>
                </ul>
                  </p>

                  <a href="#" className="button primary large">
                      Learn More
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
