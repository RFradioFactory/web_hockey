// pages/HomePage.tsx
import React from 'react';
import styles from './home.module.css';

const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* Шапка с основным заголовком */}
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.mainTitle}>
            Академия хоккея
            <span className={styles.accentTitle}>«Спартаковец»</span>
          </h1>
          <p className={styles.subtitle}>
            Государственное автономное учреждение дополнительного образования<br/>
            Свердловской области «Спортивная школа олимпийского резерва»
          </p>
        </div>
      </header>

      {/* Основной контент */}
      <main className={styles.mainContent}>
        {/* Секция "О школе" */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>О школе</h2>
          
          <div className={styles.textBlock}>
            <p className={styles.paragraph}>
              Хоккейная школа «Спартаковец» — одна из старейших в Екатеринбурге. 
              Несколько тысяч ребят начинали свой путь в спорте в стенах нашей школы. 
              И с каждым годом растет число тех, кто делает здесь первые шаги в хоккее.
            </p>
            
            <p className={styles.paragraph}>
              Школа растет и развивается, делая все возможное для тех, 
              кто решил посвятить себя <strong>ХОККЕЮ</strong>!
            </p>

            <div className={styles.highlightCard}>
              <p className={styles.paragraph}>
                «Спартаковец» — место сосредоточения хоккейной науки, спортивной медицины, 
                а также точка притяжения для талантливых детей и молодежи не только 
                из Свердловской области, но и других регионов страны.
              </p>
            </div>
          </div>
        </section>

        {/* Секция об инфраструктуре */}
        <section className={styles.sectionDark}>
          <div className={styles.sectionInner}>
            <h3 className={styles.sectionSubtitle}>
              Спортивная школа олимпийского резерва
            </h3>
            <p className={styles.paragraph}>
              «Академия хоккея «Спартаковец» активно использует инфраструктуру, 
              переданную ей в оперативное управление Правительством Свердловской области. 
              На её базе осуществляется непрерывный процесс подготовки спортивного резерва, 
              направленный на усиление сборных команд как Свердловской области, 
              так и Российской Федерации.
            </p>
          </div>
        </section>

        {/* Секция о подготовке */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h3 className={styles.sectionSubtitle}>
              Подготовка спортсменов
            </h3>
            <div className={styles.textColumns}>
              <p className={styles.paragraph}>
                Особое внимание в академии уделяется развитию молодых хоккеистов 
                для хоккейного клуба «Автомобилист». Подготовка спортсменов организована 
                поэтапно, в соответствии с программами спортивной подготовки.
              </p>
              <p className={styles.paragraph}>
                Спортсмены последовательно переходят с одного уровня подготовки 
                на другой, что способствует их планомерному развитию и достижению 
                высоких спортивных результатов.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;