import styles from './style.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a href=''>Entenda como funciona a técnica Pomodoro</a>
      <a href=''>
        TimeTwo &copy; {new Date().getFullYear()} - Tiago Fleischauer
      </a>
    </footer>
  );
}
