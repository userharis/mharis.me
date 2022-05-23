import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Logo from "../logo";
import styles from "../../styles/layout.module.css";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { MdMenu } from "react-icons/md";

const {
  primaryHeader,
  siteNavWrapper,
  siteNav,
  socialLinks,
  headerContainer,
  hamburger,
  open,
} = styles;

export default function Header() {
  const [menuToggle, setMenuToggle] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (menuToggle) {
      ref.current && ref.current.classList.add(open);
    } else {
      ref.current && ref.current.classList.remove(open);
    }
  }, [menuToggle]);

  return (
    <header className={primaryHeader}>
      <div className={headerContainer}>
        <Logo />
        <nav className={siteNavWrapper} ref={ref}>
          <SiteNav />
          <SocialLinks />
        </nav>
        <div className={hamburger} onClick={() => setMenuToggle(!menuToggle)}>
          <MdMenu />
        </div>
      </div>
    </header>
  );
}

function SiteNav() {
  return (
    <ul className={siteNav}>
      <NavItem href="/#work">work</NavItem>
      <NavItem href="/blog">blog</NavItem>
      <NavItem href="/#contact">contact</NavItem>
    </ul>
  );
}

function SocialLinks() {
  return (
    <ul className={socialLinks}>
      <NavItem href="https://www.linkedin.com/in/userharis/">
        <a>
          <SiLinkedin />
        </a>
      </NavItem>
      <NavItem href="https://www.github.com/userharis">
        <a>
          <SiGithub />
        </a>
      </NavItem>
    </ul>
  );
}

function NavItem({ children, href }) {
  return (
    <li>
      <Link href={href}>{children}</Link>
    </li>
  );
}
