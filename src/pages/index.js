import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout2"
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
          `Martial Arts Beginners Class`,
          `Martial Arts Jackson Heights`,
        ]}
      />

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
          Where can you find top-notch BJJ & Martial Arts training in Jackson Heights, Queens?
          <h3>@JIUJITSUNYC: Martial Arts Academy</h3>
          {/* Traditional and contemporary techniques for kids and adults, emphasizing a community-centric approach. */}
          </p>
         <br></ br>
          <p></p>
          <p className="padding-above">              
          
            <ul className="actions fit">
              <li>
                <a href="https://at-jiujitsu-nyc.gymdesk.com/signup" className="button primary fit" align="center">
                  Sign Up
                </a>
              </li>
              <li>
                <a href="https://at-jiujitsu-nyc.gymdesk.com/schedule" className="button primary fit" align="center">
                  Schedule
                </a>
              </li>
            </ul>
          </p>

        </header>
      )}


       {/* Our Members Section */}


       <h2 id="grid-system" align="center">@Jiujitsu Martial Arts Training, Jackson Heights Queens, NY</h2>

      {/* 2 COLUMNS - Picture RIGHT */}     

          <div className="row">
            <div className="col-12">
              <div align="center">
                  <p>Discover the best BJJ and martial arts training with comprehensive 
                    programs offering the best in self-defense programs for kids and adults, welcoming everyone 
                    from complete beginners to advanced competitors.
                  </p>

                  <p className="padding-above">              
          
          <ul className="actions fit">
            <li>
              <a href="https://www.atjiujitsunyc.com/prices/" className="button primary fit" align="center">
              Prices. No Contracts!
              </a>
            </li>
            <li>
              <a href="https://www.atjiujitsunyc.com/about/" className="button primary fit" align="center">
              Learn More
              </a>
            </li>
          </ul>
        </p>
              </div>
            </div>
          </div>

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

      <hr />

    <section className="home-content-section">
        <h3>Our Members: The Heart of @JIUJITSUNYC</h3>
        <p>Discover the best BJJ and martial arts training for everyone from complete beginners to advanced competitors. </p>
       
 {/*     <h2 id="blockquote">

          <blockquote>"My strength is in my team because my team strengthens me!"</blockquote>
          </h2>
        */}  

          <article className="post-content page-template no-image">
        <div className="post-content-body">
         
          <hr />

{/* ----- THIS IS THE CODE FOR HOME PAGE ----- */}


          <div className="row">        
            <div className="col-12">
              <div className="content-section">
                <div className="programs-container">
                  <div className="program-section kids-section">
                    <h2>Kids Martial Arts</h2>
                    <p>Martial arts is a structured system of training designed to 
                      improve physical fitness, mental discipline, and self-defense
                      skills.</p>
                    <div className="program-links">
                      <a href="https://www.atjiujitsunyc.com/kids-jiujitsu-classes-in-queens/" className="program-link">
                        Kids Jiu-Jitsu: (5-9)
                      </a>
                      <a href="https://www.atjiujitsunyc.com/kids-jiujitsu-classes-in-queens/" className="program-link">
                        Kids Jiu-Jitsu: (10-15)
                      </a>
                      <a href="https://www.atjiujitsunyc.com/kids-kickboxing-classes-in-queens/" className="program-link">
                        Kids Kickboxing: (Ages 7-15)
                      </a>
                      <a href="https://www.atjiujitsunyc.com/kids-mma/" className="program-link">
                        Kids MMA: (Ages 8-15)
                      </a>
                      <a href="https://www.atjiujitsunyc.com/toddler-jiujitsu/" className="program-link">
                        Toddlers Jiujitsu: (Ages 3-5)
                      </a>
                    </div>
                    <a href="https://www.atjiujitsunyc.com/tags/kids-programs/" className="button primary large">
                      LEARN MORE...
                    </a>
                    <figure className="kg-card kg-image-card">
                      <GatsbyImage
                        image={getImage(data.smallPic)}
                        className="kg-image"
                        alt="Kids Martial Arts"
                      />
                    </figure>
                  </div>
                  <hr />
                  <div className="program-section adults-section">
                    <h2>Adults Martial Arts</h2>
                    <p>Whether you're looking to improve your mobility, learn self-defense 
                      or increase your physical and mental health, we have programs to meet 
                      your every need.</p>
                    <div className="program-links">
                      <a href="https://www.atjiujitsunyc.com/adult-jiujitsu/" className="program-link">
                        Jiu-Jitsu
                      </a>
                      <a href="https://www.atjiujitsunyc.com/muay-thai/" className="program-link">
                        Muay-Thai
                      </a>
                      <a href="https://www.atjiujitsunyc.com/mma/" className="program-link">
                        MMA
                      </a>
                      <a href="https://www.atjiujitsunyc.com/kickboxing/" className="program-link">
                        Kickboxing
                      </a>
                      <a href="https://www.atjiujitsunyc.com/smarter-yoga/" className="program-link">
                        Smarter Yoga
                      </a>
                      <a href="https://www.atjiujitsunyc.com/kettlebell/" className="program-link">
                        Kettle Bell
                      </a>
                    </div>
                    <a href="https://www.atjiujitsunyc.com/tags/adult-programs/" className="button primary large">
                      LEARN MORE...
                    </a>
                    <figure className="kg-card kg-image-card">
                      <GatsbyImage
                        image={getImage(data.medPic)}
                        className="kg-image"
                        alt="Adult Martial Arts"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>  
        </div>
      </article>
      <hr />
 {/*         <h3>Why should kids practice martial arts?</h3>
          <p>Kids should practice martial arts to enhance their physical health, boost mental resilience, develop discipline, and acquire valuable life skills like respect and self-defense.</p>
*/}
      
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
<hr />
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
        <hr />
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


  {/*   <div className="post-feed">
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

      */}
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
    benchAccounting: file(relativePath: { eq: "bench-accounting-49909-unsplash.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 1360, placeholder: BLURRED, formats: [AUTO, WEBP])
      }
    }
    smallPic: file(relativePath: { eq: "kids-adults.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 1360, placeholder: BLURRED, formats: [AUTO, WEBP])
      }
    }
    medPic: file(relativePath: { eq: "kids-adults-2.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 1360, placeholder: BLURRED, formats: [AUTO, WEBP])
      }
    }
    allMarkdownRemark(
      sort: { frontmatter: { order: ASC } }
      filter: { frontmatter: { order: { in: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30] } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
            order
            thumbnail {
              childImageSharp {
                gatsbyImageData(width: 1360, height: 1000, placeholder: BLURRED, formats: [AUTO, WEBP])
              }
              relativePath
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
