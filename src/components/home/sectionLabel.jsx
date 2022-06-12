import * as styles from "../../styles/home/home.module.css";

const SectionLabel = ({ children }) => {
  return <h2 className={styles.sectionLabel}>{children}</h2>;
};

export default SectionLabel;
