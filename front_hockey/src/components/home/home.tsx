
// import React from 'react';
// import styles from './home.module.css';

// const HomePage: React.FC = () => {
//   return (
//     <div className={styles.container}>
//       {/* Шапка с основным заголовком */}
//       <header className={styles.hero}>
//         <div className={styles.heroContent}>
//           <h1 className={styles.mainTitle}>
//             Академия хоккея
//             <span className={styles.accentTitle}>«Спартаковец»</span>
//           </h1>
//           <p className={styles.subtitle}>
//             Государственное автономное учреждение дополнительного образования<br/>
//             Свердловской области «Спортивная школа олимпийского резерва»
//           </p>
//         </div>
//       </header>

//       {/* Основной контент */}
//       <main className={styles.mainContent}>
//         {/* Секция "О школе" */}
//         <section className={styles.section}>
//           <h2 className={styles.sectionTitle}>О школе</h2>
          
//           <div className={styles.textBlock}>
//             <p className={styles.paragraph}>
//               Хоккейная школа «Спартаковец» — одна из старейших в Екатеринбурге. 
//               Несколько тысяч ребят начинали свой путь в спорте в стенах нашей школы. 
//               И с каждым годом растет число тех, кто делает здесь первые шаги в хоккее.
//             </p>
            
//             <p className={styles.paragraph}>
//               Школа растет и развивается, делая все возможное для тех, 
//               кто решил посвятить себя <strong>ХОККЕЮ</strong>!
//             </p>

//             <div className={styles.highlightCard}>
//               <p className={styles.paragraph}>
//                 «Спартаковец» — место сосредоточения хоккейной науки, спортивной медицины, 
//                 а также точка притяжения для талантливых детей и молодежи не только 
//                 из Свердловской области, но и других регионов страны.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Секция об инфраструктуре */}
//         <section className={styles.sectionDark}>
//           <div className={styles.sectionInner}>
//             <h3 className={styles.sectionSubtitle}>
//               Спортивная школа олимпийского резерва
//             </h3>
//             <p className={styles.paragraph}>
//               «Академия хоккея «Спартаковец» активно использует инфраструктуру, 
//               переданную ей в оперативное управление Правительством Свердловской области. 
//               На её базе осуществляется непрерывный процесс подготовки спортивного резерва, 
//               направленный на усиление сборных команд как Свердловской области, 
//               так и Российской Федерации.
//             </p>
//           </div>
//         </section>

//         {/* Секция о подготовке */}
//         <section className={styles.section}>
//           <div className={styles.sectionInner}>
//             <h3 className={styles.sectionSubtitle}>
//               Подготовка спортсменов
//             </h3>
//             <div className={styles.textColumns}>
//               <p className={styles.paragraph}>
//                 Особое внимание в академии уделяется развитию молодых хоккеистов 
//                 для хоккейного клуба «Автомобилист». Подготовка спортсменов организована 
//                 поэтапно, в соответствии с программами спортивной подготовки.
//               </p>
//               <p className={styles.paragraph}>
//                 Спортсмены последовательно переходят с одного уровня подготовки 
//                 на другой, что способствует их планомерному развитию и достижению 
//                 высоких спортивных результатов.
//               </p>
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default HomePage;
// pages/HomePage.tsx
import React from 'react';
import styles from './home.module.css';
import logo from './../../../public/logo.png';
import cart1 from './../../../public/homecart1.png';
import cart2 from './../../../public/homecart2.png';
import cart3 from './../../../public/homecart3.jpg';
import cart4 from './../../../public/homecart4.png';

const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* Герой-секция */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.mainTitle}>Академия хоккея «Спартаковец»</h1>
          <p className={styles.subtitle}>
            Государственное автономное учреждение дополнительного образования<br/>
            Свердловской области «Спортивная школа олимпийского резерва»
          </p>
        </div>
      </section>

      {/* Секция "О школе" */}
      <section className={styles.aboutSection}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>О школе</h2>
          
          <div className={styles.content}>
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

            <p className={styles.paragraph}>
              Спортивная школа олимпийского резерва «Академия хоккея «Спартаковец» 
              активно использует инфраструктуру, переданную ей в оперативное управление 
              Правительством Свердловской области. На её базе осуществляется 
              непрерывный процесс подготовки спортивного резерва, направленный 
              на усиление сборных команд как Свердловской области, так и Российской Федерации.
            </p>

            <div className={styles.highlightCard}>
              <h3 className={styles.blockTitle}>
                Особое внимание в академии
              </h3>
              <p className={styles.paragraph}>
                уделяется развитию молодых хоккеистов для хоккейного клуба «Автомобилист». 
                Подготовка спортсменов организована поэтапно, в соответствии с программами 
                спортивной подготовки. Спортсмены последовательно переходят с одного уровня 
                подготовки на другой, что способствует их планомерному развитию.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Секция с фото галереей */}
      <section className={styles.gallerySection}>
        <div className={styles.gallery}>
          <img src={cart1}  className={styles.galleryItem} />
          <img src={cart2}  className={styles.galleryItem} />
          <img src={cart3}  className={styles.galleryItem} />
          <img src={cart4}  className={styles.galleryItem} />
          
        </div>
      </section>

      {/* Секция преимуществ */}
      <section className={styles.benefitsSection}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>Наши преимущества</h2>
          
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>🏒</div>
              <h3>Профессиональные тренеры</h3>
              <p>Опытные специалисты с лицензиями РФХ</p>
            </div>
            
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>⛸️</div>
              <h3>Современная инфраструктура</h3>
              <p>Ледовые арены и тренажерные залы</p>
            </div>
            
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>⭐</div>
              <h3>Система подготовки</h3>
              <p>Поэтапное развитие спортсменов</p>
            </div>
            
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>🏆</div>
              <h3>Путь в профессиональный хоккей</h3>
              <p>Подготовка для клуба «Автомобилист»</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;