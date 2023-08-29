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
          `kids MMA`,
          `kids MMA training`,
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
          `Kids Jiu-Jitsu`,
          `Adult Kickboxing`,
          `Adult Jiu-Jitsu Classes`,
          `Kids Jiu-Jitsu Classes`,
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
          `Martial Arts Instructors Queens`,
          `Martial Arts Beginners Class`,
          `Martial Arts Jackson Heights`,
        ]}
      />

      { <Bio /> }

      {data.site.siteMetadata.description && (
        <header className="page-head">
          <h2 className="page-head-title">
            {data.site.siteMetadata.description}
          </h2>
          <p />
          <br />
          <p class="post-content-excerpt">
            {" "}
          Where can you find top-notch BJJ & Martial Arts training in Jackson Heights, Queens?
          <h3>@JIUJITSUNYC: Martial Arts Academy</h3>
          offers Martial arts training in Jackson Heights, Queens, combining traditional and contemporary techniques for kids and adults, emphasizing a community-centric approach.
          </p>
         <br></ br>
          <p></p>
          <p className="padding-above">              
              <div id="button-container-1">
                  <a 
                  href="https://at-jiujitsu-nyc.gymdesk.com/signup"
                  className="subscribe-button"
                  title="Sign Up"
                  target="_blank"
                  rel="noopener noreferrer"> 
                  Sign Up</a>
              </div>
              <div id="button-container-2">
                  <a 
                  href="https://at-jiujitsu-nyc.gymdesk.com/schedule"
                  className="subscribe-button"
                  title="Schedule"
                  target="_blank"
                  rel="noopener noreferrer"> 
                  Schedule</a>
              </div>
              </p>

        </header>
      )}

       {/* Our Members Section */}
    <section className="home-content-section">
        <h3>Our Members: The Heart of @JIUJITSUNYC</h3>
        <p>Discover the best BJJ and martial arts training with comprehensive programs offering superior Jiujitsu instruction, welcoming everyone from complete beginners to pro fighters. </p>
        <p>In the bustling streets of Jackson Heights, Queens, @JIUJITSUNYC stands as a sanctuary for martial arts enthusiasts of all walks of life. We take immense pride in our diverse and inclusive environment. Here, families find a common ground, training together, while amateur and professional fighters hone their skills side by side.</p>
        <p>On any given day, you might find a father and daughter practicing their kicks, a young professional prepping for an upcoming MMA bout, or even share a mat with a IBJJF champion. Our programs are designed to be scalable, ensuring everyone, from novices to experts, finds value and challenge in our sessions. We believe in guiding you, but the journey is yours. All we ask is for your dedication, hard work, and an inquisitive spirit.</p>
       

        <h2 id="blockquote">

          <blockquote>"My strength is in my team because my team strengthens me!"</blockquote>
          </h2>
          <hr />

          <h3>Why should kids practice martial arts?</h3>
          <p>Kids should practice martial arts to enhance their physical health, boost mental resilience, develop discipline, and acquire valuable life skills like respect and self-defense.</p>

       


        <h3>Our Results Speak for Themselves</h3>
        <p>The world of martial arts is ever-evolving, with new techniques and philosophies emerging regularly. @JIUJITSUNYC stays ahead of the curve. We've distilled decades of martial arts evolution to offer you training that's both traditional and cutting-edge.</p>
        <p>Our commitment to the Jackson Heights community has birthed a new generation of martial artists. These individuals are not just physically adept but also mentally resilient, embodying the harmony of body, mind, and spirit. They stand as a testament to our quality training, community engagement, and the transformative power of martial arts.</p>
    </section>

    {/* SEO Info 
    <section className="seo-info-section">
        <ul>
            <li><strong>SEO URL:</strong> <a href="www.jiujitsunyc.com/jackson-heights-queens-martial-arts">www.jiujitsunyc.com/jackson-heights-queens-martial-arts</a></li>
            <li><strong>SEO Meta Description:</strong> Dive into the world of martial arts with @JIUJITSUNYC in Jackson Heights, Queens. Experience top-tier training in a family-friendly environment.</li>
            <li><strong>NLP-friendly sentence for Google Snippet:</strong> @JIUJITSUNYC in Jackson Heights, Queens, offers a unique blend of traditional and modern martial arts training in a community-driven environment.</li>
        </ul>
    </section> */}

    {/* FAQ Section */}
    <section className="faq-section">

  <h3>FAQs about the @JIUJITSUNYC Martial Arts Academy</h3>
        <dl>
            <dt>Which martial arts are taught at the @JIUJITSUNYC academy?</dt>
            <dd>The academy provides training in Brazilian Jiu-Jitsu, Kickboxing, Muay Thai, MMA, and Smarter Yoga.</dd>
            
            <dt>Is the academy suitable for beginners?</dt>
            <dd>Yes, individuals of all levels are welcome, from novices to seasoned professionals.</dd>
            
            <dt>What differentiates this academy from other martial arts institutions?</dt>
            <dd>The emphasis on community, family-oriented training, and a harmonious blend of traditional and contemporary techniques sets the academy apart.</dd>
            
            <dt>Where is the Martial Arts Academy located?</dt>
            <dd>The academy is situated in the lively neighborhood of Jackson Heights, Queens, New York City.</dd>
            
            <dt>Why is community engagement a priority for the academy?</dt>
            <dd>Community engagement plays a pivotal role in the holistic development of members.</dd>
            
            <dt> Is Jiu-Jitsu safe for kids?</dt>
            <dd>Yes, Jiu-Jitsu is designed to emphasize technique over brute strength, making it safe for kids. Proper instruction and supervision ensure that kids learn in a controlled environment.</dd>
       
            <dt>What are the physical benefits of martial arts for kids?</dt>
            <dd>Martial arts offer kids a full-body workout, enhancing cardiovascular health, muscle strength, flexibility, and coordination, making it an all-encompassing fitness regimen.</dd>

            <dt>How does martial arts training improve mental well-being in children?</dt>
            <dd>Martial arts training sharpens focus, improves concentration, and reduces stress in children. It teaches them to remain calm under pressure, fostering resilience and mental strength.</dd>

            <dt>Can martial arts boost confidence and self-esteem in kids?</dt>
            <dd>Yes, martial arts can significantly boost confidence in kids. As they master new techniques and progress through ranks, they experience a sense of achievement, enhancing their self-esteem.</dd>

            <dt>How do martial arts disciplines like MMA and Jiu-Jitsu teach self-defense to kids?</dt>
            <dd>Martial arts disciplines like MMA and Jiu-Jitsu equip kids with practical techniques and strategies, ensuring they can defend themselves effectively in challenging situations.</dd>

            <dt>Why is discipline a crucial aspect of martial arts training for children?</dt>
            <dd>Discipline in martial arts teaches children punctuality, dedication, and respect. Regular practice and adherence to dojo rules instill a strong sense of commitment and responsibility.</dd>
        </dl>

   {/*                 <h3 id="definition">
    <strong>FAQs about the Martial Arts Academy</strong>
        </h3>
          <dl>
              <dt>Which martial arts are taught at the academy?</dt>
              <dd>
                  <p>
                    The academy provides training in Brazilian Jiu-Jitsu, Kickboxing, Muay Thai, MMA, and Smarter Yoga.
                  </p>
              </dd>
              <dt>Is the academy suitable for beginners?</dt>
              <dd>
                  <p>
                    Yes, the academy welcomes individuals of all levels, from novices to seasoned professionals.
                  </p>
              </dd>
              <dt>What differentiates this academy from other martial arts institutions?</dt>
              <dd>
                  <p>
                    The emphasis on community, family-oriented training, and a harmonious blend of traditional and contemporary techniques sets the academy apart.
                  </p>
              </dd>
              <dt>Where is the academy located?</dt>
              <dd>
                  <p>
                    The academy is situated in the lively neighborhood of Jackson Heights, Queens, New York City.
                  </p>
              </dd>
              <dt>Why is community engagement a priority for the academy?</dt>
              <dd>
                  <p>
                    Community engagement plays a pivotal role in the holistic development of members, fostering unity, respect, and a shared passion for martial arts.
                  </p>
              </dd>
              <dt> Is Jiu-Jitsu safe for kids?</dt>
              <dd>
                  <p>
                    Yes, Jiu-Jitsu is designed to emphasize technique over brute strength, making it safe for kids. Proper instruction and supervision ensure that kids learn in a controlled environment.
                  </p>
              </dd>

          </dl>
          FAQ Section */} 
    </section>


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
