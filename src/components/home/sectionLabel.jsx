import * as s from "../../styles/home/sectionLabel.module.css";

const SectionLabel = ({ children }) => {
  return (
    <div className={s.label}>
      <h2>{children}</h2>
    </div>
  );
};

export default SectionLabel;
