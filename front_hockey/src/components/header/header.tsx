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
    
    logout();
    navigate('/');
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {/* Логотип можно заменить на нужный */}
        <Link to ='/'><a >
          <img src={logo} className="logo" alt="logo" />
        </a></Link>
      

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
            <Link to =''><a href="/" className={styles.link}>Главная</a></Link>
          </li>
          <li className={styles.menuItem}>
            <Link to ='/'><a href="/about" className={styles.link}>О нас</a></Link>
          </li>
          <li className={styles.menuItem}>
            <Link to ='/rating'><a href="/rating" className={styles.link}>Рейтинги</a></Link>
          </li>
          <li className={styles.menuItem}>
            <Link to ='/tournaments'><a  className={styles.link}>Турниры</a></Link>
          </li>
          <li className={styles.menuItem}>
            <Link to ='/'><a href="/schedule" className={styles.link}>Расписание</a></Link>
          </li>
          <li className={styles.menuItem}>
            <span className={styles.userName}>{userAuthData?.name} {userAuthData?.surname}</span>
          </li>
          <li className={styles.menuItem}>
            <div className={styles.authBlock}>
          {isAuth ? (
            <>
              
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
          </li>
        </ul>

        
      </nav>
    </header>
  );
};

export default Header;