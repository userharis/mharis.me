import "../styles/globals.css";
import Layout from "../components/home/layout/layout";
import Hero from "../components/home/hero/hero";
import Featured from "../components/home/featured/featured";
import Blog from "../components/home/blog/blog";

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Featured />
      <Blog />
    </Layout>
  );
};

export default IndexPage;
