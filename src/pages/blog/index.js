import Layout from "../../components/layout/layout";
import Container from "../../components/layout/container";
import Hero from "../../components/blog/hero";
import Posts from "../../components/blog/posts";
import * as styles from "../../styles/pages/global.module.css";
import { Helmet } from "react-helmet";

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>MH's Blog | Web Development and Programming Content</title>
      </Helmet>
      <Layout>
        <main>
          <Container maxWidth="1040px" className={styles.container}>
            <Hero />
            <Posts />
          </Container>
        </main>
      </Layout>
    </>
  );
};

export default Blog;
