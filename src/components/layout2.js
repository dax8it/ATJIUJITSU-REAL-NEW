import React, { useState } from "react";
import { Link } from "gatsby";

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

  const handleToggleNav = () => {
    setToggleNav(!toggleNav);
  };

  const handleActiveDropdown = (index) => {
    setActiveDropdown(index);
  };

  return (
    <div className={`site-wrapper ${toggleNav ? "site-head-open" : ""}`}>
      <header className="site-head" style={{ position: "fixed", width: "100%" }}>
        <div className="site-head-container">
          <a
            className="nav-burger"
            href="#"
            onClick={handleToggleNav}
            aria-label="Menu"
          >
            🍔
          </a>
          <ul className="nav">
            {menuItems.map((item, index) => (
              <li key={index} role="none">
                {item.subItems ? (
                  <span
                    onClick={() => handleActiveDropdown(index)}
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
        </div>
      </header>
      <div className="site-body" style={{ marginTop: "60px" }}>
        {children}
      </div>
      <Footer2 />
    </div>
  );
};

