import Container from "./container";
import MHLogo from "../logo/mh";
import BlogLogo from "../logo/codenerdy";
import { Link } from "gatsby";
import { MdSearch } from "react-icons/md";
import * as styles from "../../styles/layout.module.css";

const { mainHeader, container, siteNavigation, mhLogo, navItem, linkAsButton } =
  styles;

const Header = ({ blogLayout }) => {
  return blogLayout ? <BlogHeader /> : <MainHeader />;
};

const MainHeader = () => {
  return (
    <header className={mainHeader}>
      <Container maxWidth={"1200px"} className={container}>
        <MHLogo className={mhLogo} />
        <SiteNavigation />
      </Container>
    </header>
  );
};

const BlogHeader = () => {
  return (
    <header>
      <Container>
        <BlogLogo />
        <SearchBar />
      </Container>
    </header>
  );
};

const SiteNavigation = () => {
  return (
    <nav>
      <ul className={siteNavigation}>
        <NavItem href="/#featured">work</NavItem>
        <NavItem href="/codenerdy">blog</NavItem>
        <NavItem href="/#contact" className={linkAsButton}>
          contact
        </NavItem>
      </ul>
    </nav>
  );
};

const NavItem = ({ className, children, href }) => {
  return (
    <li className={navItem + " " + className}>
      <Link to={href}>{children}</Link>
    </li>
  );
};

/**
 * @TODO Add Search Functionality
 */
const SearchBar = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input type="search" />
      <button type="submit">
        <MdSearch />
      </button>
    </form>
  );
};

export default Header;
