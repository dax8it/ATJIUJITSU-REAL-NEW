import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout2"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const gymdeskScheduleUrl = "https://at-jiujitsu-nyc.gymdesk.com/schedule"
const gymdeskSignupUrl = "https://at-jiujitsu-nyc.gymdesk.com/signup"

const SchedulePage = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Class Schedule"
        description="View the current @JiuJitsuNYC class schedule in GymDesk for kids martial arts, adult Brazilian Jiu-Jitsu, kickboxing, Muay Thai, MMA, and toddler programs."
        pathname="/calendar2/"
      />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h1>Class Schedule</h1>
          <p>
            The official @JiuJitsuNYC class schedule is maintained in GymDesk so
            the class list stays current for parents, members, and new students.
          </p>
          <p>
            <a href={gymdeskScheduleUrl} className="button primary large">
              View Current GymDesk Schedule
            </a>
          </p>
          <p>
            <a href={gymdeskSignupUrl} className="button primary large">
              Sign Up Through GymDesk
            </a>
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
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => <SchedulePage location={props.location} data={data} {...props} />}
  />
)
