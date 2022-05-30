import Container from "./container";
import * as styles from "../../styles/layout.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container maxWidth={"1200px"} className={styles.footerFlex}>
        <p>Copyright 2022, Muhammad Haris</p>
        <a href="#top">Back To Top</a>
      </Container>
    </footer>
  );
};

export default Footer;
