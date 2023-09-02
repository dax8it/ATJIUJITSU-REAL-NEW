import React from "react"
import { Link } from "gatsby"
import Footer2 from "./footer2"

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
    <nav id="swup" className="site-head-left">
    <ul className="nav" role="menu">
    <li className="nav-about" role="menuitem">
        <Link to={`/about`}>About</Link>
      </li>
      
      <li className="nav-tags" role="menuitem">
        <Link to={`/calendar`}>Schedule</Link>
      </li>
      <li className="nav-tags" role="menuitem">
        <Link to={`/prices`}>Prices</Link>
      </li>

        <li className="nav-tags nav-dropdown" role="menuitem">
            <Link to={`/tags/kids-programs`}>Kids Programs</Link>
            <ul className="submenu">
            <li role="menuitem">
                    <a href="https://www.atjiujitsunyc.com/kids-jiujitsu-classes-in-queens/" target="_self" rel="noopener noreferrer">
                      Kids JiuJitsu
                    </a>
                  </li>
                <li role="menuitem">
                    <a href="https://www.atjiujitsunyc.com/kids-kickboxing-classes-in-queens/" target="_self" rel="noopener noreferrer">
                      Kids Kickboxing
                    </a>
                  </li>
                  <li role="menuitem">
                    <a href="https://www.atjiujitsunyc.com/kids-mma/" target="_self" rel="noopener noreferrer">
                      Kids MMA
                    </a>
                  </li>
                  <li role="menuitem">
                    <a href="https://www.atjiujitsunyc.com/toddler-jiujitsu/" target="_self" rel="noopener noreferrer">
                      Jiujitsu for Toddlers
                    </a>
                  </li>
            </ul>
        </li>

        <li className="nav-tags nav-dropdown" role="menuitem">
            <Link to={`/tags/programs`}>Adult Programs</Link>
            <ul className="submenu">
                <li role="menuitem">
                    <a href="https://www.atjiujitsunyc.com/adult-jiujitsu/" target="_self" rel="noopener noreferrer">
                      Jiujitsu
                    </a>
                  </li>
                  <li role="menuitem">
                    <a href="https://www.atjiujitsunyc.com/kick-boxing/" target="_self" rel="noopener noreferrer">
                      Kickboxing
                    </a>
                  </li>
                  <li role="menuitem">
                    <a href="https://www.atjiujitsunyc.com/muay-thai/" target="_self" rel="noopener noreferrer">
                      Muay Thai
                    </a>
                  </li>
                  <li role="menuitem">
                    <a href="https://www.atjiujitsunyc.com/mma/" target="_self" rel="noopener noreferrer">
                      MMA
                    </a>
                  </li>
                  <li role="menuitem">
                    <a href="https://www.atjiujitsunyc.com/smarter-yoga/" target="_self" rel="noopener noreferrer">
                      Smarter Yoga
                    </a>
                  </li>
                  <li role="menuitem">
                    <a href="https://www.atjiujitsunyc.com/kettlebell/" target="_self" rel="noopener noreferrer">
                      Kettlebell
                    </a>
                  </li>
            </ul>
        </li>
   {/*     <li className="nav-tags" role="menuitem">
        <Link to={`/tags/blog`}>BLOG</Link>
        </li>
  */}
    </ul>
</nav>
    
    <div className="site-head-logo-container">
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
        <Link to={`/tags/blog`}>BLOG</Link>
        <Link to={`/contact`}>Contact Us</Link>
      </div>
    </div>
    <div className="site-head-center"></div>
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
        MARTIAL ARTS • JIUJITSU • KIDS BJJ • KID KICKBOXING • KIDS MMA • MUAY THAI • KETTLEBELL • SMARTER YOGA •
        KICKBOXING • MMA • TODDLER JIU-JITSU • JACKSON HEIGHTS • QUEENS{" "}

      </footer>
    </div>
  )
}

export default Layout
