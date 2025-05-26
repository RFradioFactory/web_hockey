// components/Header.tsx
import React, { useEffect, useState } from 'react';
import styles from './header.module.css';
import logo from './../../../public/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { authService } from '../../services/api';
import { useAuth } from '../../services/authContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  
  const navigate = useNavigate();

  const {isAuth, userAuthData, logout} = useAuth();

  

  const handleLogout = () => {
    authService.logout();
    logout();
    
    navigate('/');
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

        <div className={styles.authBlock}>
          {isAuth ? (
            <>
              <span className={styles.userName}>{userAuthData?.name}</span>
              <button 
                className={styles.authButton}
                onClick={handleLogout}
              >
                Выйти
              </button>
            </>
          ) : (
            <button 
              className={styles.authButton}
              onClick={() => navigate('/login')}
            >
              Войти
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;