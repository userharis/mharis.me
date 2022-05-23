import Layout from "../components/layout/layout";
import Button from "../components/button";
import styles from "../styles/pages/index.module.css";

const { hero, heroTitle, heroPara, btnContainer } = styles;

export default function Home() {
  return (
    <Layout>
      <Hero />
    </Layout>
  );
}

function Hero() {
  return (
    <section className={hero}>
      <div>
        <h1 className={heroTitle}>Websites that Generate Business</h1>
        <p className={heroPara}>
          I am a web developer. I build search engine friendly websites that
          load in milliseconds (instead of seconds), and perform best on
          different screen sizes and browsers.
        </p>
        <div className={btnContainer}>
          <Button href="/#contact">Build me a website</Button>
          <Button variant="outlined" href="/#contact">
            Have a chat
          </Button>
        </div>
      </div>
    </section>
  );
}
