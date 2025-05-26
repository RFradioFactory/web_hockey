// components/AuthForm.tsx
import React, { useState } from 'react';
import styles from './authForm.module.css';
import buttonLogo from './../../../public/button_logo.png';
import { authService, RegisterData } from '../../services/api';

const AuthFormRegistration: React.FC = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [lastName, setLastName ] = useState('');
  const [firstName, setFirstName] = useState(''); 
  const [patronymic, setPatronymic] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [birthday, setBirthday] = useState('');
  const [gender, setGender] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Пароли не совпадают');
      return;
    }
    const user: RegisterData =  {firstName, lastName, patronymic, email, password, phone, gender, birthday};
    console.log(user);
    const response = await authService.register(user);
    console.log(response);
    // Обработка авторизации
  };

  return (
    <div className={styles.authContainer}>
      <h2 className={styles.title}>Авторизация</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          
          <input
            type="email"
            id="email"
            placeholder='Адрес электронной почты'
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className={styles.formGroup}>
          
          <input
            type="tel"
            id="phone"
            placeholder='Номер телефона'
            className={styles.input}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div className={styles.formGroup}>
          
          <input
            type="text"
            id="lastName"
            placeholder='Фамилия'
            className={styles.input}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>

        <div className={styles.formGroup}>
          
          <input
            type="text"
            id="firstName"
            placeholder='Имя'
            className={styles.input}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>

        <div className={styles.formGroup}>
          
          <input
            type="text"
            id="patronymic"
            placeholder='Отчество'
            className={styles.input}
            value={patronymic}
            onChange={(e) => setPatronymic(e.target.value)}
          />
        </div>

        <div className={styles.formGroup}>
          
          <input
            type="date"
            id="birthday"
            placeholder='Дата рождения'
            className={styles.input}
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
            required
          />
        </div>

        <div className={styles.formGroup}>
          
          <select
            id="gender"
            className={styles.input}
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="">Выберите пол</option>
            <option value="MALE">Мужской</option>
            <option value="FEMALE">Женский</option>
          </select>
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

        <div className={styles.formGroup}>
          
          <input
            type="password"
            id="confirmPassword"
            placeholder='Подтвердите пароль'
            className={styles.input}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>


        <button type="submit" className={styles.button}>
          <img src = {buttonLogo} className={styles.buttonLogo} alt = "button_logo"></img>
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
};

export default AuthFormRegistration;