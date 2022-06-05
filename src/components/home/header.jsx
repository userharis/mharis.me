import Container from "./container";
import Logo from "./logo";
import * as styles from "../../styles/home/home.module.css";

const { header, email } = styles;

const Header = () => {
  return (
    <header className={header}>
      <Container maxWidth="1200px">
        <Logo />
        <div className={email}>
          <a href="mailto:mail@mharis.me">mail@mharis.me</a>
        </div>
      </Container>
    </header>
  );
};

export default Header;
