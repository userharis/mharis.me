import * as styles from "../../styles/blog/hero.module.css";

const { hero, title, text } = styles;

const Hero = () => {
  return (
    <section className={hero}>
      <h1 className={title}>
        <span>A Blog for</span>
        <br />
        Web Engineers
      </h1>
      <p className={text}>
        I am Haris, a freelance web developer. When I am not building websites,
        I write about web development, JavaScript and Go programming.
      </p>
    </section>
  );
};

export default Hero;
