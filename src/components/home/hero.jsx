import Button from "../button";
import * as styles from "../../styles/home/hero.module.css";

const { hero, title, text } = styles;

const Hero = () => {
  return (
    <section className={hero}>
      <div>
        <h1 className={title}>
          <span>Hey,</span>
          <br />I Build Websites.
        </h1>
        <p className={text}>
          I am Haris, a freelance web developer. I build search engine friendly
          websites that load in milliseconds (instead of seconds), and perform
          best on different screen sizes and browsers.{" "}
        </p>
        <Button href="/#contact" variant="filled">
          Contact Now
        </Button>
      </div>
    </section>
  );
};

export default Hero;
