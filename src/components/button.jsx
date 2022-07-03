import { Link } from "gatsby";
import * as s from "../styles/button.module.css";

const Button = ({
  download,
  href,
  to,
  variant = "outlined",
  children,
  className,
}) => {
  className = `${s.button} ${className} ${variant === "filled" && s.filled}`;
  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={className} download={download}>
        {children}
      </a>
    );
  }
  return <button className={className}>{children}</button>;
};

export default Button;
