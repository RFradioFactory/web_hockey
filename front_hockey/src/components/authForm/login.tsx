// components/AuthForm.tsx
import React, { useState } from 'react';
import styles from './authForm.module.css';
import buttonLogo from './../../../public/button_logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { authService } from '../../services/api';

const AuthFormLogin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Обработка авторизации
    const response = await authService.login({email, password});
    if(response.accessToken) navigate('/');

  };

  return (
    <div className={styles.authContainer}>
      <h2 className={styles.title}>Авторизация</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          
          <input
            type="text"
            id="email"
            placeholder='Логин/адрес электронной почты'
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className={styles.formGroup}>
          
          <input
            type="password"
            id="password"
            placeholder='Пароль'
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className={styles.links}>
          <Link to='/registration'><a className={styles.link}>
            Впервые у нас?
          </a></Link>
          <a href="/forgot-password" className={styles.link}>
            Забыли пароль?
          </a>
        </div>

        <button type="submit" className={styles.button}>
          <img src = {buttonLogo} className={styles.buttonLogo} alt = "button_logo"></img>
          Войти
        </button>
      </form>
    </div>
  );
};

export default AuthFormLogin;