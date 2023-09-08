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
            <ul className="nav" role="menu">
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
              <a 
                  href="https://at-jiujitsu-nyc.gymdesk.com/schedule"
                  title="Schedule"
                  target="_blank"
                  rel="noopener noreferrer"> 
                  Schedule</a>
              </li>
              <li className="nav-tags" role="menuitem">
                <Link to={`/prices`}>Prices</Link>
              </li>
              <li className="nav-tags" role="menuitem">
                <Link to={`/tags/blog`}>Latest News</Link>
              </li>
            </ul>
          </nav>
          <div className="site-head-center">
            <Link className="site-head-logo" to={`/`}>
              {title}
            </Link>
          </div>
          <div className="site-head-right">
            <div className="social-links">
              <a
                href="https://at-jiujitsu-nyc.maonrails.com/login"
                title="Member Login"
                target="_blank"
                rel="noopener noreferrer"
              >
                Member Login
              </a>
              <Link to={`/contact`}>Contact Us</Link>
            </div>
          </div>
        </div>
      </header>
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
      </footer>
    </div>
  )
}

export default Layout
