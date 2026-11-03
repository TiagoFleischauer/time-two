import { useEffect, useState } from 'react';
import {
  HistoryIcon,
  HomeIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from 'lucide-react';
import styles from './styles.module.css';

type Themes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<Themes>('dark');

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className={styles.menu}>
      <a
        href='#'
        className={styles.menuLink}
        title='Home'
        aria-label='Ir para a home'
      >
        <HomeIcon />
      </a>
      <a
        href='#'
        className={styles.menuLink}
        title='Histórico'
        aria-label='Ir para o histórico'
      >
        <HistoryIcon />
      </a>
      <a
        href='#'
        className={styles.menuLink}
        title='Configurações'
        aria-label='Ir para as configurações'
      >
        <SettingsIcon />
      </a>
      <a
        href='#'
        className={styles.menuLink}
        title='Mudar tema'
        aria-label='Mudar o tema'
        onClick={handleThemeChange}
      >
        {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
      </a>
    </div>
  );
}
