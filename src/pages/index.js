import "../styles/globals.css";
import Layout from "../components/home/layout/layout";
import Hero from "../components/home/hero/hero";
import Featured from "../components/home/featured/featured";

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Featured />
    </Layout>
  );
};

export default IndexPage;
