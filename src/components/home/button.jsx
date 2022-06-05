import { Link } from "gatsby";
import * as styles from "../../styles/home/home.module.css";

const { button } = styles;

const Button = ({ href, to, children, type = "button", className }) => {
  className = `${button}`;

  if (href) {
    return (
      <a className={className} href={href}>
        {children}
      </a>
    );
  }
  if (to) {
    return (
      <Link className={className} to={to}>
        {children}
      </Link>
    );
  }
  return (
    <button className={className} type={type}>
      {children}
    </button>
  );
};

export default Button;
