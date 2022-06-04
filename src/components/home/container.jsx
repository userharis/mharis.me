import * as styles from "../../styles/home/home.module.css";

const Container = ({ children, maxWidth = "1040px" }) => {
  return (
    <div style={{ maxWidth }} className={styles.container}>
      {children}
    </div>
  );
};

export default Container;
