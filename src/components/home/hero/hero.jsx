import Button from "../button";
import * as styles from "../../../styles/home/home.module.css";

const { hero, heroTitle, heroPara, btnContainer } = styles;

const Hero = () => {
  return (
    <section className={hero}>
      <div>
        <h1 className={heroTitle}>
          Hey, <br />I build Websites
        </h1>
        <p className={heroPara}>
          I am Haris, a freelance web developer. I build search engine friendly
          websites that load in milliseconds (instead of seconds), and perform
          best on different screen sizes and browsers.{" "}
        </p>
        <div className={btnContainer}>
          <Button to="/#contact">Get a Quote</Button>
          <Button to="/#featured">See Recent Works</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
