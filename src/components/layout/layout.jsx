import Header from "./header";
import Footer from "./footer";

const Layout = ({ children, socials }) => {
  return (
    <>
      <Header />
      {children}
      <Footer socials={socials} />
    </>
  );
};

export default Layout;
