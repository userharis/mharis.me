import { FiGithub, FiFacebook, FiLinkedin, FiTwitter } from "react-icons/fi";
import Container from "./container";

import * as styles from "../../styles/layout/footer.module.css";

const { social, email, fixed, copy } = styles;

const Footer = () => {
  return (
    <footer>
      <p className={copy}>&copy; Muhammad Haris, 2022</p>
      <div className={fixed}>
        <Container>
          <div className={social}>
            <SocialLink href="https://fb.me/fb.userharis">
              <FiTwitter />
            </SocialLink>
            <SocialLink href="https://fb.me/fb.userharis">
              <FiFacebook />
            </SocialLink>
            <SocialLink href="https://linkedin.com/in/mharis01">
              <FiLinkedin />
            </SocialLink>

            <SocialLink href="https://github.com/userharis">
              <FiGithub />
            </SocialLink>
          </div>
          <div className={email}>
            <a href="mailto:mail@mharis.me">mail@mharis.me</a>
          </div>
        </Container>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, className, children }) => {
  return (
    <a href={href} className={`${className}`}>
      {children}
    </a>
  );
};

export default Footer;
