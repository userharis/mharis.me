import * as styles from "../../styles/home.module.css";
import Button from "./button";

const { hero, heroTitle, heroPara, btnContainer } = styles;

const HeroSection = () => {
  return (
    <section className={"top " + hero}>
      <div>
        <h1 className={heroTitle}>Websites that Generate Business!</h1>
        <p className={heroPara}>
          I am a web developer. I build search engine friendly websites that
          load in milliseconds (instead of seconds), and perform best on
          different screen sizes and browsers.
        </p>
        <div className={btnContainer}>
          <Button href="#contact">Build me a website</Button>
          <Button href="#contact" variant="outlined">
            Have a chat
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
