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
                <Link to={`/tags/Class`}>Programs</Link>
              </li>
              <li className="nav-tags" role="menuitem">
                <Link to={`/class-schedule`}>Schedule</Link>
              </li>
              <li className="nav-tags" role="menuitem">
                <Link to={`/prices`}>Prices</Link>
              </li>
              <li className="nav-tags" role="menuitem">
                <Link to={`/tags/blog`}>Latest News</Link>
              </li>
              <li className="nav-tags" role="menuitem">
                <Link to={`/media`}>Media</Link>
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
                href="https://www.facebook.com"
                title="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                href="https://instagram.com/gcdadance"
                title="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
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
        All photos and videos by{" "}
        <a
          href="https://alexcovo.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Alex Covo Studio NYC
        </a>
      </footer>
    </div>
  )
}

export default Layout
