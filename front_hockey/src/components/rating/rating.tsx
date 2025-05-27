// components/RatingTable.tsx
import React, { useEffect, useState } from 'react';
import styles from './rating.module.css';
import { apiService } from '../../services/api';
import { useAuth } from '../../services/authContext';

export interface Athlete {
  id: number;
  name: string;
  surname: string;
  rating: number;
}

const RatingTable: React.FC = () => {
  const [athletes, setAthletes] = useState<Athlete[]>([]);
  const { userAuthData } = useAuth();

  
  useEffect(() => {
    const loadData = async () => {
    
    const mockData: Athlete[] = await apiService.getUsers();
    
    // Сортировка по убыванию рейтинга
    const sortedData = mockData.sort((a, b) => b.rating - a.rating);
    setAthletes(sortedData);
    };
    loadData();
    
   
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Рейтинг спортсменов</h2>
      
      <div className={styles.tableWrapper}>
        <table className={styles.ratingTable}>
          <thead>
            <tr>
              <th>Место</th>
              <th>Спортсмен</th>
              <th>Рейтинг</th>
            </tr>
          </thead>
          <tbody>
            {athletes.map((athlete, index) => (
              <tr 
                key={athlete.id}
                className={`${styles.tableRow} ${
                  athlete.id == userAuthData?.id ? styles.highlighted : ''
                }`}
              >
                <td>{index + 1}</td>
                <td>{`${athlete.name} ${athlete.surname}`}</td>
                <td>
                  <div className={styles.ratingBadge}>
                    {athlete.rating}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RatingTable;