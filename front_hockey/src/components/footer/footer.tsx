// components/Footer.tsx
import React from 'react';
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faVk, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.section}>
          <h3 className={styles.title}>Контакты</h3>
          <ul className={styles.list}>
            <li><a href="tel:+7(343)223-22-02" className={styles.link}>+7(343)223-22-02</a></li>
            <li><a href="mailto:hk-spartakovez@mail.ru" className={styles.link}>hk-spartakovez@mail.ru</a></li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3 className={styles.title}>Соц.сети</h3>
          <ul className={styles.list } style = {{ display: 'flex', justifyContent:'center' }}>
            <li className={styles.sns}>
              <a href="https://vk.com/ah_spartakovez" target='_blank'  className={styles.link}><FontAwesomeIcon icon={faVk} size='2xl' /></a>
            </li>
            <li className={styles.sns}>
              <a href="https://t.me/ah_spartakovez" target='_blank' className={styles.link}><FontAwesomeIcon icon={faTelegram} size='2xl'/></a>
            </li>
            <li className={styles.sns}>
              <a href="https://www.youtube.com/channel/UC5ndGcPFtuVS0CALRgakyCA/featured" target='_blank' className={styles.link}><FontAwesomeIcon icon={faYoutube} size='2xl' /></a>
            </li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3 className={styles.title}>Адреса</h3>
          <ul className={styles.list}>
            <li>620075 Екатеринбург <br/> ул. Энгельса, 31А </li>
            <li>620016 Екатеринбург <br/> ул. Счастливая, 14 </li>
          </ul>
        </div>
      </div>

      <div className={styles.copyright}>
        © 2025 Все права защищены
      </div>
    </footer>
  );
};

export default Footer;