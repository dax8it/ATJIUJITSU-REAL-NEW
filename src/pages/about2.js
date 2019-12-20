import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO
        title="About"
        keywords={[
          `dance-studio`,
          `dancers`,
          `dance`,
          `dance-school`,
          `dancestudio`,
        ]}
      />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
            We are a Community of Parents, Dancers and Educators.
          </h2>
          {/* 
       <figure className="kg-card kg-image-card kg-width-full" align="center">
        
            <Img
              fluid={data.aboutImageOne.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption align="center">We are dance educators helping your children achieve their goals.</figcaption>


            import Img from "gatsby-image" 



          </figure>
      */}

          <div class="video-responsive">
            <iframe
              src="https://player.cloudinary.com/embed/?cloud_name=dax8it&public_id=https%3A%2F%2Fres.cloudinary.com%2Fdax8it%2Fvideo%2Fupload%2Fv1575736041%2FGCDA%2FPROMO_02_ID.mp4&fluid=true&controls=true&colors%5Baccent%5D=%23b62fce&logo_image_url=https%3A%2F%2Fres.cloudinary.com%2Fdax8it%2Fimage%2Fupload%2Fv1575665220%2FGCDA%2FGCDA_LOGO_v2.png&poster_options%5Btransformation%5D%5Bstart_offset%5D=1&info%5Btitle%5D=Welcome%20to%20Gulf%20Coast%20Dance%20Alliance&source_types%5B0%5D=mp4"
              title="GCDA Dance"
              width="640"
              height="480"
              allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
              allowfullscreen
              frameborder="0"
            ></iframe>
          </div>

          <h3 id="dynamic-styles">Who We Are</h3>
          <p>
            Gulf Coast Dance Alliance (GCDA) is the only dance school in Spanish
            Fort, AL. GCDA offers the communities of Baldwin & surrounding
            counties the highest quality dance training and education in the
            many disciplines of dance. Our diverse and highly educated staff not
            only hold BFA degrees in Dance, but several have also danced
            professionally in NYC and other major cities across the country.
          </p>
          <p>
            GCDA prides itself in offering a range of classes from recreational
            dance classes to pre-professional dance classes. During our past 9
            years, GCDA has had the honor to place dancers in major universities
            to pursue their dance education. GCDA is also home to several Group
            and Individual National Title Awards Winners.
          </p>

          <p>
            Gulf Coast Dance Alliance was formed to offer each individual the
            opportunity to learn the art of dance in a positive, professional
            and inspiring environment. Each student will receive quality dance
            training and education in the many disciplines of dance by our
            diverse and highly educated staff.
          </p>
          <p>
            Our teachers are passionately committed to providing guidance
            through the proper techniques of dance while offering individual
            attention and respect towards each student. We focus on proper body
            alignment while developing confidence and self-expression.
          </p>
          <p>
            Whether a student is dancing for fun or planning a professional
            career, our goal is to allow each dancer to experience proper
            technique, creativity, musicality, coordination, rhythm and an
            appreciation for the art of dance while having fun!!!
          </p>

          <h3 id="dynamic-styles">Parent Portal</h3>
          <p>
            For current parents who have enrolled students, you can manage your
            account settings, add register your children for our classes, view
            pertinent updates from our staff, as well as view account balances
            and transactions to your account LOGIN to your GCDA{" "}
            <a href="https://app.jackrabbitclass.com/jr3.0/ParentPortal/Login?orgId=515790">
              PARENT PORTAL
            </a>{" "}
          </p>
          <h3 id="dynamic-styles">Class Registration</h3>
          <p>
            Don't forget to sign up online at the{" "}
            <a href="class-registration/">GCDA CLASS REGISTRATION</a> for more
            ways to integrate Ghost with your favourite services.
          </p>
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
    aboutImageOne: file(relativePath: { eq: "AboutOne.jpg" }) {
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
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
