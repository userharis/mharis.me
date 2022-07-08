import { Link } from "gatsby";
import Container from "./container";
import Logo from "./logo";
import * as styles from "../../styles/layout/header.module.css";
import Button from "../button";
import { useState, useEffect, useRef } from "react";

const {
  header,
  logo,
  container,
  nav,
  navLink,
  cta,
  burger,
  cross,
  open,
  pinned,
  unpinned,
} = styles;

const Header = () => {
  const headerRef = useRef(null);
  const [menuToggle, setMenuToggle] = useState(false);
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    if (!headerRef.current || menuToggle) return;

    const s = window.scrollY;

    if (s > 200) {
      if (s < scroll) {
        headerRef.current.classList.remove(unpinned);
        headerRef.current.classList.add(pinned);
      } else if (s > scroll) {
        headerRef.current.classList.remove(pinned);
        headerRef.current.classList.add(unpinned);
      }
    } else {
      headerRef.current.classList.remove(pinned);
      headerRef.current.classList.remove(unpinned);
    }

    setScroll(s);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <header className={header} ref={headerRef}>
      <Container className={container}>
        <Logo className={logo} />
        <Navigation {...{ menuToggle, setMenuToggle }} />
        <Burger {...{ menuToggle, setMenuToggle }} />
      </Container>
    </header>
  );
};

const Navigation = ({ menuToggle, setMenuToggle }) => {
  const handleClick = (e) => {
    const tagName = e.target.tagName;
    if (tagName === "A" || tagName === "BUTTON") {
      setMenuToggle(false);
    }
  };

  return (
    <nav className={`${nav} ${menuToggle && open}`}>
      {/* eslint-disable-next-line */}
      <ul onClick={handleClick}>
        <NavLink to="/#work">Work</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/#contact">Contact</NavLink>
        <li>
          <Button href="/brochure.pdf" className={cta} download>
            Brochure
          </Button>
        </li>
      </ul>
    </nav>
  );
};

const NavLink = ({ to, children }) => {
  return (
    <li>
      <Link to={to} className={navLink}>
        {children}
      </Link>
    </li>
  );
};

const Burger = ({ menuToggle, setMenuToggle }) => {
  return (
    <div
      role="none"
      className={`${burger} ${menuToggle && cross}`}
      onClick={() => setMenuToggle(!menuToggle)}
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Header;
