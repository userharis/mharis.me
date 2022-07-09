import Layout from "../../components/layout/layout";
import Container from "../../components/layout/container";
import Hero from "../../components/blog/hero";

const Blog = () => {
  return (
    <Layout>
      <main>
        <Container maxWidth="1040px">
          <Hero />
        </Container>
      </main>
    </Layout>
  );
};

export default Blog;
