import React from "react"
import { Link } from "gatsby"
import Footer2 from "./footer2"

const navItems = [
  { label: "About", to: "/about/" },
  { label: "Prices", to: "/prices/" },
  { label: "Kids", to: "/tags/kids-programs/" },
  { label: "Adults", to: "/tags/adult-programs/" },
  { label: "Events", to: "/tags/events/" },
]

const Layout = ({ title, children }) => {
  const [toggleNav, setToggleNav] = React.useState(false)

  const closeNav = () => setToggleNav(false)

  return (
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
      <header className="site-head">
        <div className="site-head-container">
          <Link className="site-head-logo" to="/" onClick={closeNav} aria-label="@JiuJitsuNYC home">
            <span className="logo-mark">@</span>
            <span>{title}</span>
          </Link>

          <button
            className="nav-burger"
            type="button"
            aria-label="Toggle menu"
            aria-expanded={toggleNav}
            onClick={() => setToggleNav(!toggleNav)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className="site-nav" aria-label="Primary navigation">
            <ul className="nav">
              {navItems.map(item => (
                <li key={item.label}>
                  <Link to={item.to} onClick={closeNav}>{item.label}</Link>
                </li>
              ))}
              <li>
                <a href="https://at-jiujitsu-nyc.gymdesk.com/schedule" target="_blank" rel="noopener noreferrer">
                  Schedule
                </a>
              </li>
              <li>
                <a className="nav-cta" href="https://at-jiujitsu-nyc.gymdesk.com/signup">
                  Sign Up
                </a>
              </li>
              <li>
                <a href="https://at-jiujitsu-nyc.gymdesk.com/login" target="_blank" rel="noopener noreferrer">
                  Member Login
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="site-main" className="site-main">
        {children}
      </main>

      <Footer2 />
      <footer className="site-foot">
        &copy; {new Date().getFullYear()} <Link to="/">{title}</Link> — Brazilian Jiu-Jitsu, kids martial arts, kickboxing, Muay Thai, MMA, and toddler Jiu-Jitsu in Jackson Heights, Queens.
      </footer>
    </div>
  )
}

export default Layout
