import Container from "./container";
import * as styles from "../../../styles/home/home.module.css";

const { footer, footerFlex, footerNav } = styles;

const Footer = () => {
  return (
    <footer className={footer}>
      <Container maxWidth="1200px" className={footerFlex}>
        <Copy />
        <FooterNav />
        <BackToTop />
      </Container>
      <Container maxWidth="1200px" className={footerFlex}>
        <div>
          <FooterNav />
          <Copy />
        </div>
        <BackToTop />
      </Container>
    </footer>
  );
};
const Copy = () => <p>Copyright 2022, Muhammad Haris</p>;
const FooterNav = () => {
  return (
    <div className={footerNav}>
      <a href="https://github.com/userharis">Github</a>
      <a href="https://linkedin.com/in/userharis">LinkedIn</a>
      <a href="https://mharis.me/maniac">Blog</a>
    </div>
  );
};
const BackToTop = () => {
  return <a href="#top">Back To Top</a>;
};
export default Footer;
