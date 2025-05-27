// components/TournamentsPage.tsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './tournaments.module.css';
import { apiService } from '../../services/api';
import { useAuth } from '../../services/authContext';

export interface Tournament {
  id: number;
  name: string;
  location: string;
  startDate: string;
  endDate: string;
}

const TournamentsPage: React.FC = () => {
  const [tournaments, setTournaments] = useState<Tournament[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [isShowPastTournaments, setIsShowPastTournaments] = useState(false);
  const navigate = useNavigate();
  const { userAuthData } = useAuth();

  if (!userAuthData) {
    navigate('/login');
    return null;
  }

  useEffect(() => {
    const fetchTournaments = async () => {
      try {
        const response = await apiService.getTournaments();
        setTournaments(response);
      } catch (err) {
        setError('Ошибка загрузки турниров');
        
      } finally {
        setIsLoading(false);
      }
    };

    fetchTournaments();
  }, []);

  const filterTournaments = (tournaments: Tournament[]) => {
    const currentDate = new Date();
    return tournaments.filter(tournament => 
      isShowPastTournaments 
        ? new Date(tournament.endDate) < currentDate
        : new Date(tournament.endDate) >= currentDate
    );
  };

  const formatDateTime = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).replace(',', '');
};

  if (isLoading) {
    return <div className={styles.loading}>Загрузка...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  const filteredTournaments = filterTournaments(tournaments);

  return (
    <div className={styles.container}> 
    {(userAuthData.role === 'COACH' || userAuthData.role ==='ADMIN') && (<button 
        className={styles.button}
        onClick={()=>navigate('/tournaments/create')}
        >Создать турнир</button>)
        }

      <div className={styles.header}>
        
        <h1>Список турниров</h1>
        
        <label className={styles.switch}>
          <input
            type="checkbox"
            checked={isShowPastTournaments}
            onChange={(e) => setIsShowPastTournaments(e.target.checked)}
          />
          <span>Показать прошедшие турниры</span>
        </label>
      </div>

      <div className={styles.grid}>
        {filteredTournaments.map((tournament) => (
          <Link
            to={`/tournaments/${tournament.id}`}
            key={tournament.id}
            className={styles.card}
          >
            <h3>{tournament.name}</h3>
            <div className={styles.dates}>
              <span>{formatDateTime(tournament.startDate)}</span>
              <span> — </span>
              <span>{formatDateTime(tournament.endDate)}</span>
            </div>
            <div className={styles.location}>
              <svg className={styles.locationIcon} viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5z"/>
              </svg>
              {tournament.location}
            </div>
            <div className={styles.status}>
              {new Date(tournament.endDate) < new Date() ? (
                <span className={styles.ended}>Завершен</span>
              ) : (
                <span className={styles.active}>Активен</span>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TournamentsPage;