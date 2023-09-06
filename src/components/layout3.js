import React from "react"
import { Link } from "gatsby"
import Footer2 from "../components/footer2"

const Layout = props => {
  const { title, children } = props
  const [toggleNav, setToggleNav] = React.useState(false)
  return (
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
      <header className="site-head">
        <div className="site-head-container">
          <a
            className="nav-burger"
            href={`#`}
            aria-label="Menu"
            onClick={() => setToggleNav(!toggleNav)}
          >
            <div className="hamburger hamburger--collapse">
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </a>
          <nav id="swup" class="site-head-left">
          
          <div className="site-head-right"></div>
          </div>
        </div>
      </header>

              {/* <li className="nav-home nav-current" role="menuitem">
                <Link to={`/`}>Home</Link>
              </li> */}
              <li className="nav-about" role="menuitem">
                <Link to={`/about`}>About</Link>
              </li>
              <li className="nav-tags" role="menuitem">
                <Link to={`/tags/programs`}>Programs</Link>
              </li>
              <li className="nav-tags" role="menuitem">
                <Link to={`/calendar`}>Schedule</Link>
              </li>
              <li className="nav-tags" role="menuitem">
                <Link to={`/prices`}>Prices</Link>
              </li>
              <li className="nav-tags" role="menuitem">
                <Link to={`/tags/blog`}>Latest News</Link>
              </li>
            </ul>
      <main id="site-main" className="site-main">
        <div id="swep" className="transition-fade">
          {children}
        </div>
      </main>
      <Footer2 />
      <footer className="site-foot">
        &copy; {new Date().getFullYear()} <Link to={`/`}>{title}</Link> &mdash;
        JACKSON HEIGHTS • QUEENS • JIUJITSU • KETTLEBELL • JUDO • MUAY THAI • SMARTER YOGA •
        KICKBOXING • KIDS MMA • TODDLER JIU-JITSU{" "}
        {/* <a
          href="https://alexcovo.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Alex Covo Studio NYC
        </a> */}
      </footer>
    </div>
  )
}

export default Layout
