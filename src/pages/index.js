import "../styles/globals.css";
import Layout from "../components/layout/layout";
import Hero from "../components/home/hero";
import WorkSection from "../components/home/work";

const IndexPage = () => {
  return (
    <Layout blogLayout={false}>
      <Hero />
      <WorkSection />
    </Layout>
  );
};

export default IndexPage;
