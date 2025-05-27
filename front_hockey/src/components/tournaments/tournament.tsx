// components/TournamentDetails.tsx
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './tournament.module.css';
import { apiService } from '../../services/api';

interface Athlete {
  id: number;
  name: string;
  surname: string;
  email: string;
  born: string;
  rating: number;
}

interface Match {
  id: number;
  startTime: string;
  firstTeam: Athlete[];
  secondTeam: Athlete[];
  teamAscore: number;
  teamBscore: number;
  status: string;
}

interface Tournament {
  id: number;
  tournamentName: string;
  location: string;
  tournamentStartDate: string;
  tournamentEndDate: string;
  participants: Athlete[];
  //matches?: Match[]; // Замените на конкретный интерфейс для матчей
}

const TournamentDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const idTourn = parseInt(id!);
  const [tournament, setTournament] = useState<Tournament | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [currentTab, setCurrentTab] = useState<'info' | 'participants' | 'matches'>('info');
  const [matches, setMatches] = useState<Match[] | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTournament = async () => {
      try {
        const response = await apiService.getInfoTournament(idTourn);
        setTournament(response);
      } catch (err) {
        setError('Ошибка загрузки данных турнира');
      } finally {
        setLoading(false);
      }
    };

    const fetchMatches = async () => {
      try {
        const response = await apiService.getMatches(idTourn);
        setMatches( response );
      } catch (err) {
        setError('Ошибка загрузки данных матчей');
      } finally {
        setLoading(false);
      }
    };
    fetchMatches();

    fetchTournament();
  }, [id]);

  const formatDateTime = (dateString: string) => {
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) throw new Error('Invalid date');
    
    return {
      date: date.toLocaleDateString('ru-RU', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      }),
      time: date.toLocaleTimeString('ru-RU', { 
        hour: '2-digit', 
        minute: '2-digit'
      })
    };
  } catch (error) {
    return {
      date: 'Дата не указана',
      time: 'Время не указано'
    };
  }
};

const renderMatch = (match: Match) => {
  const { date, time } = formatDateTime(match.startTime);
  
  return (
    <div key={match.id} className={styles.matchCard}>
      <div className={styles.matchHeader}>
        <span className={styles.matchTime}>{date} в {time}</span>
        <span className={`${styles.matchStatus} ${
          match.status === 'FINISHED' ? styles.finished : styles.upcoming
        }`}>
          {match.status === 'FINISHED' ? 'Завершен' : 'Предстоящий'}
        </span>
      </div>

      <div className={styles.teamsContainer}>
        <div className={styles.team}>
          <h4>Команда A</h4>
          <div className={styles.playersList}>
            {match.firstTeam.map(player => (
              <div key={player.id} className={styles.player}>
                {player.name} {player.surname}
                
              </div>
            ))}
          </div>
        </div>

        <div className={styles.scoreContainer}>
          <div className={styles.score}>
            {match.teamAscore} : {match.teamBscore}
          </div>
          {match.status === 'FINISHED' && (
            <div className={styles.result}>
              {match.teamAscore > match.teamBscore 
                ? 'Победа команды A' : match.teamAscore < match.teamBscore ? 
                 'Победа команды B': 'Ничья'}
            </div>
          )}
        </div>

        <div className={styles.team}>
          <h4>Команда B</h4>
          <div className={styles.playersList}>
            {match.secondTeam.map(player => (
              <div key={player.id} className={styles.player}>
                {player.name} {player.surname}
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

  const handleClickReg = async () =>{
    const response = await apiService.registOnTournament(idTourn);
    if (response.status == 200 ) navigate('/tournaments')
  }
  const renderTabContent = () => {
    if (!tournament) return null;

    switch (currentTab) {
      case 'info':
        return (
          <div className={styles.infoSection}>
            <div className={styles.infoItem}>
              <h3>Дата проведения</h3>
              <p>
                {formatDateTime(tournament.tournamentStartDate).date} - {formatDateTime(tournament.tournamentEndDate).date}
                
              </p>
              <p>
                Начало: {formatDateTime(tournament.tournamentStartDate).time}<br/>
                Окончание: {formatDateTime(tournament.tournamentEndDate).time}
              </p>
            </div>
            <div className={styles.infoItem}>
              <h3>Место проведения</h3>
              <p>{tournament.location}</p>
            </div>
          </div>
        );

      case 'participants':
        return (
          <div className={styles.participantsList}>
            {tournament.participants.length > 0 ? (
              tournament.participants.map((athlete) => (
                <div key={athlete.id} className={styles.participantCard}>
                  <span>{athlete.name} {athlete.surname}</span>
                  <Link to={`/athletes/${athlete.id}`} className={styles.detailsLink}>
                    Подробнее →
                  </Link>
                </div>
              ))
            ) : (
              <p>Нет зарегистрированных участников</p>
            )}
          </div>
        );

      case 'matches':
        return (
            <div className={styles.matchesSection}>
            {matches!.length > 0 ? (
                matches!.map(renderMatch)
            ) : (
                <p>Матчи еще не сгенерированы</p>
            )}
            </div>
        );
            }
        };

  if (loading) {
    return <div className={styles.loading}>Загрузка...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <div className={styles.container}>
      {tournament && (
        <>
          <div className={styles.header}>
            <h1 className={styles.title}>{tournament.tournamentName}</h1>
            <div className={styles.dateLocation}>
              <span>{formatDateTime(tournament.tournamentStartDate).date} - {formatDateTime(tournament.tournamentEndDate).date}</span>
              <span className={styles.location}>{tournament.location}</span>
            </div>
          </div>
        {!(new Date(tournament.tournamentEndDate) < new Date()) &&
        <button 
            onClick={handleClickReg}
            className={styles.button}>Зарегистрироваться на турнир</button>}
          <div className={styles.tabs}>
            <button
              className={`${styles.tab} ${currentTab === 'info' ? styles.active : ''}`}
              onClick={() => setCurrentTab('info')}
            >
              Информация
            </button>
            <button
              className={`${styles.tab} ${currentTab === 'participants' ? styles.active : ''}`}
              onClick={() => setCurrentTab('participants')}
            >
              Участники ({tournament.participants.length})
            </button>
            <button
              className={`${styles.tab} ${currentTab === 'matches' ? styles.active : ''}`}
              onClick={() => setCurrentTab('matches')}
            >
              Матчи
            </button>
          </div>

          <div className={styles.tabContent}>
            {renderTabContent()}
          </div>
        </>
      )}
    </div>
  );
};

export default TournamentDetails;