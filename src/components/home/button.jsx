import { Link } from "gatsby";

const Button = ({ href, to, children, type = "button" }) => {
  if (href) {
    return <a href={href}>{children}</a>;
  }
  if (to) {
    return <Link to={to}>{children}</Link>;
  }
  return <button type={type}>{children}</button>;
};

export default Button;
