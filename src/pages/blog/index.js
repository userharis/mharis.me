import Layout from "../../components/layout/layout";
import Container from "../../components/layout/container";
import Hero from "../../components/blog/hero";
import Posts from "../../components/blog/posts";
import * as styles from "../../styles/pages/global.module.css";

const Blog = () => {
  return (
    <Layout>
      <main>
        <Container maxWidth="1040px" className={styles.container}>
          <Hero />
          <Posts />
        </Container>
      </main>
    </Layout>
  );
};

export default Blog;
