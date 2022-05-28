import Container from "./container";
import MHLogo from "../logo/mh";
import BlogLogo from "../logo/codenerdy";
import { Link } from "gatsby";
import { MdSearch } from "react-icons/md";

const Header = ({ blogLayout }) => {
  return blogLayout ? <BlogHeader /> : <MainHeader />;
};

const MainHeader = () => {
  return (
    <header>
      <Container maxWidth={"1200px"}>
        <MHLogo />
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
      <ul>
        <NavItem href="/#featured">work</NavItem>
        <NavItem href="/codenerdy">blog</NavItem>
        <NavItem href="/#contact">contact</NavItem>
      </ul>
    </nav>
  );
};

const NavItem = ({ className, children, href }) => {
  return (
    <li className={className}>
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
