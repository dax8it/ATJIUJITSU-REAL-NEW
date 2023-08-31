import React from "react"
import { Link } from "gatsby"
import Footer2 from "../components/footer2"

const Layout = props => {
  const { title, children } = props
  const [toggleNav, setToggleNav] = React.useState(false)
  
    // JavaScript logic for submenu click behavior
    React.useEffect(() => {
        const submenuItems = document.querySelectorAll('.submenu-item');
        submenuItems.forEach(item => {
            item.addEventListener('click', function() {
                // Close other open submenu-inners
                document.querySelectorAll('.submenu-item.active').forEach(activeItem => {
                    if (activeItem !== item) {
                        activeItem.classList.remove('active');
                    }
                });
                
                // Toggle current submenu-inner
                item.classList.toggle('active');
            });
        });
    }, []);

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
      
<ul className="nav">
    <li className="nav-item nav-dropdown">
        <a href="#">Main Item 1</a>
        <ul className="submenu">
            <li className="submenu-item">
                <a href="#">Submenu Item 1</a>
                <div className="submenu-inner">Content for Submenu Item 1</div>
            </li>
            <li className="submenu-item">
                <a href="#">Submenu Item 2</a>
                <div className="submenu-inner">Content for Submenu Item 2</div>
            </li>
        </ul>
    </li>
    <li className="nav-item nav-dropdown">
        <a href="#">Main Item 2</a>
        <ul className="submenu">
            <li className="submenu-item">
                <a href="#">Submenu Item 3</a>
                <div className="submenu-inner">Content for Submenu Item 3</div>
            </li>
            <li className="submenu-item">
                <a href="#">Submenu Item 4</a>
                <div className="submenu-inner">Content for Submenu Item 4</div>
            </li>
        </ul>
    </li>
</ul>
<ul className="nav" role="menu">
        {/* <li className="nav-home nav-current" role="menuitem">
          <Link to={`/`}>Home</Link>
        </li> */}
        <li className="nav-about" role="menuitem">
          <Link to={`/about`}>About</Link>
        </li>

 {/*   -----SUBMENU DROP DOWN------   */}

        <li className="nav-tags nav-dropdown" role="menuitem">
          <Link to={`/tags/programs`}>Programs</Link>
            <ul className="submenu">
                <li role="menuitem">
                  <a href="https://www.atjiujitsunyc.com/martial-arts-for-kids-jiujitsu-kickboxing-mma/" target="_self" rel="noopener noreferrer">
                    Kids Martial Arts
                  </a>
                  <ul className="submenu-inner">
                      <li role="menuitem">
                      <a href="https://www.atjiujitsunyc.com/martial-arts-for-kids-jiujitsu-kickboxing-mma/" target="_self" rel="noopener noreferrer">
                        Kids Jiujitsu
                      </a>
                    </li>
                    <li role="menuitem">
                      <a href="https://www.atjiujitsunyc.com/martial-arts-for-kids-jiujitsu-kickboxing-mma/" target="_self" rel="noopener noreferrer">
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
               
                <li role="menuitem">
                <a href="https://www.atjiujitsunyc.com/martial-arts-for-kids-jiujitsu-kickboxing-mma/" target="_self" rel="noopener noreferrer">
                    Adult Martial Arts
                  </a>
                    <ul className="submenu-inner">
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
                          <a href="https://www.atjiujitsunyc.com/martial-arts-for-kids-jiujitsu-kickboxing-mma/" target="_self" rel="noopener noreferrer">
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
               
              </ul>
        </li>

 {/*   -------SUBMENU DROP DOWN END-------   */}

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
