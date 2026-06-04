import React from "react"
import { graphql, Link, StaticQuery } from "gatsby"
import Layout from "../components/layout2"
import SEO from "../components/seo"
import PostCard from "../components/postCard"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const programs = [
  {
    title: "Kids Jiu-Jitsu",
    detail: "Ages 5–15",
    copy: "Confidence, coordination, anti-bullying skills, and real grappling fundamentals in a structured Queens academy environment.",
    href: "/kids-jiujitsu-classes-in-queens/",
    image: "/img/kids-bjj-jackson-heights.jpg",
  },
  {
    title: "Toddler Jiu-Jitsu",
    detail: "Ages 3–5",
    copy: "A first martial arts experience built around movement, listening, balance, and safe play for young children.",
    href: "/toddler-jiujitsu/",
    image: "/img/kids-01.jpg",
  },
  {
    title: "Adult Brazilian Jiu-Jitsu",
    detail: "Beginner to advanced",
    copy: "Learn leverage-based self-defense, no-gi and gi fundamentals, pressure-tested technique, and competition-ready training.",
    href: "/adult-jiujitsu/",
    image: "/img/index-group.jpg",
  },
  {
    title: "Kickboxing & Muay Thai",
    detail: "Adults and kids",
    copy: "Striking classes for fitness, discipline, footwork, defense, and practical confidence without long-term contracts.",
    href: "/kick-boxing/",
    image: "/img/kick-boxing.jpg",
  },
]

const proofStats = [
  ["Jackson Heights", "Northern Blvd academy near E/F/7/R/M trains"],
  ["Kids + adults", "Programs for toddlers, teens, beginners, families, and competitors"],
  ["No contracts", "Straightforward pricing and easy first-class sign up"],
]

const faqs = [
  {
    question: "What martial arts classes are available at @JiuJitsuNYC?",
    answer:
      "@JiuJitsuNYC offers Brazilian Jiu-Jitsu, kids Jiu-Jitsu, toddler Jiu-Jitsu, kickboxing, Muay Thai, MMA, kettlebell, and movement-focused programs in Jackson Heights, Queens.",
  },
  {
    question: "Is @JiuJitsuNYC good for beginners?",
    answer:
      "Yes. Classes welcome complete beginners and experienced students. Coaches focus on safe fundamentals, clear progressions, and practical self-defense skills.",
  },
  {
    question: "Do you offer kids martial arts classes in Queens?",
    answer:
      "Yes. The academy offers kids Jiu-Jitsu, kids kickboxing, kids MMA, and toddler Jiu-Jitsu programs for families in Jackson Heights and nearby Queens neighborhoods.",
  },
  {
    question: "Where is @JiuJitsuNYC located?",
    answer:
      "The academy is located at 82-19 Northern Blvd, 2nd Floor, Jackson Heights, NY 11372, near the E, F, 7, R, and M trains.",
  },
  {
    question: "How do I try a class or see the schedule?",
    answer:
      "Use the Sign Up and Schedule buttons on the website to view available classes through Gymdesk and register for the right program.",
  },
]

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: "@JiuJitsuNYC Martial Arts Academy",
  url: "https://www.atjiujitsunyc.com/",
  image: "https://www.atjiujitsunyc.com/img/og-image.jpg",
  telephone: "+1" + "917" + "745" + "1772",
  email: "atjiujitsunyc@gmail.com",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "82-19 Northern Blvd, 2nd Floor",
    addressLocality: "Jackson Heights",
    addressRegion: "NY",
    postalCode: "11372",
    addressCountry: "US",
  },
  areaServed: ["Jackson Heights", "Queens", "Elmhurst", "Woodside", "Corona"],
  sameAs: [
    "https://www.facebook.com/ATjiujitsuNYC/",
    "https://instagram.com/jiujitsunyc",
    "https://www.youtube.com/channel/UCdi6CZkOmv_5dNZUhlVOkgw",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Martial arts programs",
    itemListElement: programs.map(program => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: program.title,
        description: program.copy,
        areaServed: "Queens, NY",
      },
    })),
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(item => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
}

const BlogIndex = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Brazilian Jiu-Jitsu & Kids Martial Arts in Jackson Heights, Queens"
        description="Train Brazilian Jiu-Jitsu, kids martial arts, kickboxing, Muay Thai, MMA, and toddler Jiu-Jitsu at @JiuJitsuNYC in Jackson Heights, Queens. Beginner-friendly, visual, community-driven training with no contracts."
        image="/img/og-image.jpg"
        pathname="/"
        keywords={[
          `Brazilian Jiu-Jitsu Jackson Heights`,
          `BJJ Queens`,
          `kids martial arts Queens`,
          `kids Jiu-Jitsu Jackson Heights`,
          `kickboxing Queens`,
          `Muay Thai Queens`,
          `MMA classes Queens`,
          `toddler Jiu-Jitsu`,
          `martial arts near me`,
        ]}
        schema={[localBusinessSchema, faqSchema]}
      />

      <section className="hero-shell" aria-labelledby="home-hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Jackson Heights • Queens • Brazilian Jiu-Jitsu</p>
          <h1 id="home-hero-title">
            Train harder. Move better. Build confidence for life.
          </h1>
          <p className="hero-lede">
            @JiuJitsuNYC is a visual, high-energy martial arts academy for kids,
            adults, beginners, families, and competitors — right on Northern Blvd.
          </p>
          <div className="hero-actions" aria-label="Primary actions">
            <a className="button button-primary" href="https://at-jiujitsu-nyc.gymdesk.com/signup">
              Start Training
            </a>
            <a className="button button-secondary" href="https://at-jiujitsu-nyc.gymdesk.com/schedule">
              View Schedule
            </a>
            <Link className="button button-ghost" to="/prices/">
              Prices — No Contracts
            </Link>
          </div>
          <div className="trust-strip" aria-label="Academy highlights">
            {proofStats.map(([label, text]) => (
              <div className="trust-item" key={label}>
                <strong>{label}</strong>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-visual" aria-label="@JiuJitsuNYC students training">
          <img src="/img/index-group4.jpg" alt="Kids and adults training martial arts at @JiuJitsuNYC in Queens" />
          <div className="hero-card hero-card-top">
            <span>Kids + Adults</span>
            <strong>BJJ • Kickboxing • MMA</strong>
          </div>
          <div className="hero-card hero-card-bottom">
            <span>Located at</span>
            <strong>82-19 Northern Blvd</strong>
          </div>
        </div>
      </section>

      <section className="section intro-grid" aria-labelledby="why-title">
        <div>
          <p className="eyebrow">Why families choose us</p>
          <h2 id="why-title">A Queens martial arts academy built for real progress.</h2>
        </div>
        <div className="intro-copy">
          <p>
            Step onto the mat for practical martial arts training that is clear,
            disciplined, and welcoming from day one. Kids learn focus and confidence;
            adults build real skill, conditioning, and self-defense instincts.
          </p>
          <p>
            Students build practical self-defense, strength, discipline, friendships,
            and resilience through structured coaching — not generic fitness copy.
          </p>
        </div>
      </section>

      <section className="section program-section" aria-labelledby="programs-title">
        <div className="section-heading">
          <p className="eyebrow">Programs</p>
          <h2 id="programs-title">Find the right class faster.</h2>
          <p>
            Clear paths for parents, adult beginners, returning athletes, and students
            ready to compete.
          </p>
        </div>
        <div className="program-grid">
          {programs.map(program => (
            <Link className="program-card" to={program.href} key={program.title}>
              <img src={program.image} alt={`${program.title} training at @JiuJitsuNYC`} />
              <span className="program-tag">{program.detail}</span>
              <h3>{program.title}</h3>
              <p>{program.copy}</p>
              <span className="card-link">Explore program →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section split-cta" aria-labelledby="first-class-title">
        <div className="split-media">
          <img src="/img/index-our-team.jpg" alt="@JiuJitsuNYC coaches and students inside the Jackson Heights academy" />
        </div>
        <div className="split-copy">
          <p className="eyebrow">First class clarity</p>
          <h2 id="first-class-title">Parents and new students should not have to hunt for the next step.</h2>
          <p>
            Whether you are signing up a child, returning to training, or trying
            martial arts for the first time, the next move is simple: choose a
            program, check the schedule, and start with a beginner-friendly class.
          </p>
          <ul className="check-list">
            <li>Fast schedule and sign-up access.</li>
            <li>Dedicated surfaces for kids, toddlers, adults, and striking programs.</li>
            <li>Clear location details for Jackson Heights, Queens, and nearby neighborhoods.</li>
            <li>Community-first coaching with practical progress you can feel.</li>
          </ul>
          <div className="hero-actions compact">
            <a className="button button-primary" href="tel:9177451772">Call (917) 745-1772</a>
            <Link className="button button-secondary" to="/about/">Meet the Academy</Link>
          </div>
        </div>
      </section>

      <section className="section feed-section" aria-labelledby="featured-title">
        <div className="section-heading">
          <p className="eyebrow">Featured updates</p>
          <h2 id="featured-title">Programs, events, and academy news.</h2>
          <p>
            Latest from the academy: class details, events, training notes, and student stories.
          </p>
        </div>
        <div className="post-feed modern-feed">
          {posts.slice(0, 6).map(({ node }, index) => (
            <PostCard key={node.fields.slug} count={index + 1} node={node} postClass="post" />
          ))}
        </div>
      </section>

      <section className="section faq-section" aria-labelledby="faq-title">
        <div className="section-heading">
          <p className="eyebrow">Questions</p>
          <h2 id="faq-title">FAQs about @JiuJitsuNYC</h2>
        </div>
        <div className="faq-list">
          {faqs.map(item => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>
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
    render={data => <BlogIndex location={props.location} data={data} {...props} />}
  />
)
