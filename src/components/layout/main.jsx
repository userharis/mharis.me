import Container from "./container";
import * as styles from "../../styles/layout.module.css";

const { main } = styles;

const Main = ({ children }) => {
  return (
    <main className={main}>
      <Container>{children}</Container>
    </main>
  );
};

export default Main;
