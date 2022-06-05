import Container from "./container";
import * as styles from "../../styles/home/home.module.css";

const Main = ({ children }) => {
  return (
    <main className={styles.main}>
      <Container>{children}</Container>
    </main>
  );
};

export default Main;
