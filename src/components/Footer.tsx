import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p>© {new Date().getFullYear()} Магазин ракеток. Все права защищены.</p>
      </div>
    </footer>
  );
}

