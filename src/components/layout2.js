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

{/* --- NAV START --- */}

<div className="site-head-logo-container">
      <Link className="site-head-logo" to={`/`}>
          {title}
      </Link>
    </div>  

          <nav id="swup" className="site-head-left">
              <ul className="nav" role="menu">
                <li className="nav-about" role="menuitem">
                    <Link to={`/about`}>About</Link>
                  </li>
                  
                  <li className="nav-tags" role="menuitem">
                    <Link to={`/calendar`}>Schedule</Link>
                  </li>

                {/* use for direct link if you can get .js to load
                  <li className="nav-tags" role="menuitem">
                    <a href="https://www.atjiujitsunyc.com/calendar.js/" 
                    target="_blank"
                    title="Calendar"
                    rel="noopener noreferrer">
                    Schedule
                            </a>
                  </li>
                */}

                  <li className="nav-tags" role="menuitem">
                    <Link to={`/prices`}>Prices</Link>
                  </li>

                    <li className="nav-tags nav-dropdown" role="menuitem">
                        <Link to={`/tags/kids-programs`}>Kids Programs</Link>
                 
                   {/*   <ul className="submenu">
                          <li role="menuitem">
                            <a href="https://www.atjiujitsunyc.com/kids-jiujitsu-classes-in-queens/" target="_self" rel="noopener noreferrer">
                              Kids BJJ
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
                              Toddlers BJJ
                            </a>
                          </li>
    
                        </ul>
                    */}
                    </li>
                    <li className="nav-tags nav-dropdown" role="menuitem">
                        <Link to={`/tags/programs`}>Adult Programs</Link>
                  </li>
                  <li className="nav-tags nav-dropdown" role="menuitem">
                  <a href="https://at-jiujitsu-nyc.maonrails.com/login" 
                    title="Member Login"
                    target="_blank"
                    rel="noopener noreferrer">
                      Member Login
                  </a>
                  </li>                   
              </ul>
          </nav>

{/* --- NAV END --- */}

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
