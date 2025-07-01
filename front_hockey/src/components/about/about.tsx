// components/AboutPage.tsx
import React from 'react';
import styles from './about.module.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const AboutPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>НАШИ КОНТАКТЫ</h1>
        <div className={styles.divider}></div>
      </div>

      <div className={styles.content}>
        {/* Карточка первой арены */}
        <div className={styles.arenaCard}>
          <div className={styles.arenaHeader}>
            <h2>Ледовая арена «Спартаковец»</h2>
          </div>
          
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <FaMapMarkerAlt className={styles.icon} />
              <span>г. Екатеринбург, ул. Энгельса, 31А</span>
            </div>
            
            <div className={styles.contactItem}>
              <FaPhone className={styles.icon} />
              <span>+7(343)-223-22-02</span>
            </div>
            
            <div className={styles.contactItem}>
              <FaEnvelope className={styles.icon} />
              <span>hk-spartakovez@mail.ru</span>
            </div>
          </div>
        </div>

        {/* Карточка второй арены */}
        <div className={styles.arenaCard}>
          <div className={styles.arenaHeader}>
            <h2>Ледовая арена «АВТО»</h2>
          </div>
          
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <FaMapMarkerAlt className={styles.icon} />
              <span>г. Екатеринбург, ул. Счастливая, 14</span>
            </div>
            
            <div className={styles.contactItem}>
              <FaPhone className={styles.icon} />
              <span>+7(343)-227-22-02</span>
            </div>
            
            <div className={styles.contactItem}>
              <FaEnvelope className={styles.icon} />
              <span>hk-spartakovez@mail.ru</span>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
    </div>
  );
};

export default AboutPage;