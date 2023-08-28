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
    {/* Our Members Section */}
    <section className="our-members-section">
        <h2>Our Members: The Heart of @JIUJITSUNYC</h2>
        <p>In the bustling streets of Jackson Heights, Queens, @JIUJITSUNYC stands as a sanctuary for martial arts enthusiasts of all walks of life. We take immense pride in our diverse and inclusive environment. Here, families find a common ground, training together, while amateur and professional fighters hone their skills side by side.</p>
        <p>On any given day, you might find a father and daughter practicing their kicks, a young professional prepping for an upcoming MMA bout, or even share a mat with a IBJJF champion. Our programs are designed to be scalable, ensuring everyone, from novices to experts, finds value and challenge in our sessions. We believe in guiding you, but the journey is yours. All we ask is for your dedication, hard work, and an inquisitive spirit.</p>
        <blockquote>My strength is in my team because my team strengthens me!</blockquote>
    </section>

    {/* Our Results Section */}
    <section className="our-results-section">
        <h2>Our Results Speak for Themselves</h2>
        <p>The world of martial arts is ever-evolving, with new techniques and philosophies emerging regularly. @JIUJITSUNYC stays ahead of the curve. We've distilled decades of martial arts evolution to offer you training that's both traditional and cutting-edge.</p>
        <p>Our commitment to the Jackson Heights community has birthed a new generation of martial artists. These individuals are not just physically adept but also mentally resilient, embodying the harmony of body, mind, and spirit. They stand as a testament to our quality training, community engagement, and the transformative power of martial arts.</p>
    </section>

    {/* SEO Info */}
    <section className="seo-info-section">
        <ul>
            <li><strong>SEO URL:</strong> <a href="www.jiujitsunyc.com/jackson-heights-queens-martial-arts">www.jiujitsunyc.com/jackson-heights-queens-martial-arts</a></li>
            <li><strong>SEO Meta Description:</strong> Dive into the world of martial arts with @JIUJITSUNYC in Jackson Heights, Queens. Experience top-tier training in a family-friendly environment.</li>
            <li><strong>NLP-friendly sentence for Google Snippet:</strong> @JIUJITSUNYC in Jackson Heights, Queens, offers a unique blend of traditional and modern martial arts training in a community-driven environment.</li>
        </ul>
    </section>

    {/* FAQ Section */}
    <section className="faq-section">
        <h2>Martial Arts FAQs:</h2>
        <dl>
            <dt>What martial arts are taught at @JIUJITSUNYC?</dt>
            <dd>We offer training in Brazilian Jiu-Jitsu, Kickboxing, Muay Thai, MMA, and Smarter Yoga.</dd>

            <dt>Is @JIUJITSUNYC suitable for beginners?</dt>
            <dd>Absolutely! We cater to all levels, from beginners to professionals.</dd>

            <dt>How is @JIUJITSUNYC different from other martial arts academies?</dt>
            <dd>Our focus on community, family-oriented training, and a blend of traditional and modern techniques sets us apart.</dd>

            <dt>Where is @JIUJITSUNYC located?</dt>
            <dd>We're located in the vibrant neighborhood of Jackson Heights, Queens, New York City.</dd>

            <dt>Why is community engagement important to @JIUJITSUNYC?</dt>
            <dd>We believe in the holistic development of our members, and community engagement fosters unity, respect, and a shared passion.</dd>
        </dl>
    </section>

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
