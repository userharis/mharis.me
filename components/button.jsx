import Link from "next/link";
import styles from "../styles/button.module.css";

const { filled, outlined, btn } = styles;

export default function Button({ children, href, variant = "filled" }) {
  let className = `${btn} ${variant === "filled" ? filled : outlined}`;

  if (href) {
    return (
      <Link href={href}>
        <a className={className}>{children}</a>
      </Link>
    );
  }

  return <button className={className}>{children}</button>;
}
