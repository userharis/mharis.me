import Header from "./header";
import Footer from "./footer";
import Main from "./main";

const Layout = ({ children, blogLayout }) => {
  return (
    <>
      <Header blogLayout={blogLayout} />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;
