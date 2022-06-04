import * as styles from "../../styles/home/home.module.css";

const Container = ({ children, maxWidth = "1040px", className }) => {
  return (
    <div style={{ maxWidth }} className={`${styles.container} ${className}`}>
      {children}
    </div>
  );
};

export default Container;
