// components/Header.tsx
import React, { useState } from 'react';
import styles from './header.module.css';
import logo from './../../../public/logo.png';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {/* Логотип можно заменить на нужный */}
        <a href='/'>
          <img src={logo} className="logo" alt="logo" />
        </a>
        

        <button 
          className={styles.menuButton} 
          onClick={toggleMenu}
          aria-label="Открыть меню"
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>

        <ul className={`${styles.menu} ${isMenuOpen ? styles.active : ''}`}>
          <li className={styles.menuItem}>
            <a href="/" className={styles.link}>Главная</a>
          </li>
          <li className={styles.menuItem}>
            <a href="/about" className={styles.link}>О нас</a>
          </li>
          <li className={styles.menuItem}>
            <a href="/ratings" className={styles.link}>Рейтинги</a>
          </li>
          <li className={styles.menuItem}>
            <a href="/schedule" className={styles.link}>Расписание</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;