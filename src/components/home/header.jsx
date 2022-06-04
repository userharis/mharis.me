import Container from "./container";
import Logo from "./logo";

const Header = () => {
  return (
    <header>
      <Container maxWidth="1200px">
        <Logo />
        <div>
          <a href="mailto:mail@mharis.me">mail@mharis.me</a>
        </div>
      </Container>
    </header>
  );
};

export default Header;
