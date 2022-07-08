import * as styles from "../../styles/layout/container.module.css";

const Container = ({ children, maxWidth = "1280px", className }) => {
  return (
    <div style={{ maxWidth }} className={`${styles.container} ${className}`}>
      {children}
    </div>
  );
};

export default Container;
