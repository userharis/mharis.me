import styles from "../../styles/layout.module.css";

const { main, mainContainer } = styles;

export default function Main({ children }) {
  return (
    <main className={main}>
      <div className={mainContainer}>{children}</div>
    </main>
  );
}
