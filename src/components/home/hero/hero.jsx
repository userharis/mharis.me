import Button from "../button";

const Hero = () => {
  return (
    <section>
      <div>
        <h1>
          Hey, <br />I build Websites
        </h1>
        <p>
          I am Haris, a freelance web developer. I build search engine friendly
          websites that load in milliseconds (instead of seconds), and perform
          best on different screen sizes and browsers.{" "}
        </p>
        <div>
          <Button to="/#contact">Get a Quote</Button>
          <Button to="/#featured">See Recent Works</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
