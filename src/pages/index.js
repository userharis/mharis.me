import "../styles/globals.css";
import Layout from "../components/layout/layout";
import Hero from "../components/home/hero";

const IndexPage = () => {
  return (
    <Layout blogLayout={false}>
      <Hero />
    </Layout>
  );
};

export default IndexPage;
