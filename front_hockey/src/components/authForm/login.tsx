// components/AuthForm.tsx
import React, { useState } from 'react';
import styles from './authForm.module.css';
import buttonLogo from './../../../public/button_logo.png';

const AuthFormLogin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Обработка авторизации
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
          <a href="/register" className={styles.link}>
            Впервые у нас?
          </a>
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