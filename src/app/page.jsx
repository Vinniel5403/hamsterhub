import HomePage from "./home/page"; // Adjust the import path if necessary
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <HomePage />
    </main>
  );
}
