import * as styles from "../../styles/home.module.css";

const { button, filled, outlined } = styles;

const Button = ({ href, className, onClick, variant = "filled", children }) => {
  className = `${button} ${
    variant === "filled" ? filled : outlined
  } ${className}`;

  const props = { className, onClick };

  if (href) {
    props.href = href;
    return <a {...props}>{children}</a>;
  }
  return <button {...props}>{children}</button>;
};

export default Button;
