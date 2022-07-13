import "../styles/variables.css";
import "../styles/global.css";
import Layout from "../components/layout/layout";
import Container from "../components/layout/container";
import Hero from "../components/home/hero";
import * as styles from "../styles/pages/global.module.css";
import Work from "../components/home/work";
import Blog from "../components/home/blog";
import Contact from "../components/home/contact";

const IndexPage = () => {
  return (
    <Layout>
      <main>
        <Container maxWidth="1040px" className={styles.container}>
          <Hero />
          <Work />
          <Blog />
          <Contact />
        </Container>
      </main>
    </Layout>
  );
};

export default IndexPage;
