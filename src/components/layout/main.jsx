import Container from "./container";

const Main = ({ children }) => {
  return (
    <main>
      <Container>{children}</Container>
    </main>
  );
};

export default Main;
