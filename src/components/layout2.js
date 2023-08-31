
import React, { useState } from "react";
import { Link } from "gatsby";

// Dummy Footer2 for the sake of example
const Footer2 = () => <div>Footer2</div>;

const Layout = (props) => {
  const { title, children } = props;
  const [toggleNav, setToggleNav] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Define menu and submenu structure
  const menuItems = [
    { label: "Home", link: "/home" },
    {
      label: "Features",
      subItems: [
        { label: "Feature 1", link: "/features/1" },
        { label: "Feature 2", link: "/features/2" },
      ],
    },
    { label: "About", link: "/about" },
  ];

  return (
    <div className={`site-wrapper ${toggleNav ? "site-head-open" : ""}`}>
      <header className="site-head" style={{ position: "fixed", width: "100%" }}>
        <div className="site-head-container">
          <a
            className="nav-burger"
            href="#"
            onClick={() => setToggleNav(!toggleNav)}
            aria-label="Menu"
          >
            🍔
          </a>
          <nav className="site-head-left">
            <ul className="nav" role="menu">
              {menuItems.map((item, index) => (
                <li key={index} role="none">
                  {item.subItems ? (
                    <span
                      onClick={() => setActiveDropdown(index)}
                      role="menuitem"
                    >
                      {item.label} ▼
                    </span>
                  ) : (
                    <Link to={item.link} role="menuitem">
                      {item.label}
                    </Link>
                  )}
                  {activeDropdown === index && (
                    <ul className="dropdown" role="menu">
                      {item.subItems.map((subItem, subIndex) => (
                        <li key={subIndex} role="none">
                          <Link to={subItem.link} role="menuitem">
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <div className="site-body" style={{ marginTop: "60px" }}>
        {children}
      </div>
      <Footer2 />
    </div>
  );
};

export default Layout;
