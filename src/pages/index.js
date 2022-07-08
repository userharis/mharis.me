import "../styles/variables.css";
import "../styles/global.css";
import Layout from "../components/layout/layout";
import Container from "../components/layout/container";
import Hero from "../components/home/hero";
import * as styles from "../styles/pages/index.module.css";
import Work from "../components/home/work";

const IndexPage = () => {
  return (
    <Layout>
      <main>
        <Container maxWidth="1040px" className={styles.container}>
          <Hero />
          <Work />
        </Container>
      </main>
    </Layout>
  );
};

export default IndexPage;
