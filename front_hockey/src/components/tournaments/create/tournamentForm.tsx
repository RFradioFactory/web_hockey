// components/CreateTournamentForm.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './tournamentForm.module.css';
import { apiService } from '../../../services/api';

const CreateTournamentForm: React.FC = () => {
  const navigate = useNavigate();
  const [tournament, setTournament] = useState({
    name: '',
    location: '',
    startDate: '',
    endDate: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    const now = new Date();

    if (!tournament.name.trim()) newErrors.name = 'Название обязательно';
    if (!tournament.location.trim()) newErrors.location = 'Место проведения обязательно';
    
    const startDate = new Date(tournament.startDate);
    const endDate = new Date(tournament.endDate);
    
    if (!tournament.startDate) newErrors.startDate = 'Дата начала обязательна';
    if (!tournament.endDate) newErrors.endDate = 'Дата окончания обязательна';
    if (startDate >= endDate) newErrors.endDate = 'Дата окончания должна быть позже начала';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    console.log(tournament);
    const response = await apiService.addNewTournament({
        tournamentName: tournament.name,
        tournamentStartDate: tournament.startDate,
        tournamentEndDate: tournament.endDate,
        location: tournament.location
    });
    if (response.status === 200) {
      navigate('/tournaments');
    }
    setIsSubmitting(false);
    
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTournament({
      ...tournament,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Создать новый турнир</h1>
      
      {errors.form && <div className={styles.error}>{errors.form}</div>}

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>
            Название турнира
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={tournament.name}
            onChange={handleChange}
            className={`${styles.input} ${errors.name ? styles.errorInput : ''}`}
          />
          {errors.name && <span className={styles.errorText}>{errors.name}</span>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="location" className={styles.label}>
            Место проведения
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={tournament.location}
            onChange={handleChange}
            className={`${styles.input} ${errors.location ? styles.errorInput : ''}`}
          />
          {errors.location && <span className={styles.errorText}>{errors.location}</span>}
        </div>

        <div className={styles.dateRow}>
          <div className={styles.formGroup}>
            <label htmlFor="startDate" className={styles.label}>
              Дата и время начала
            </label>
            <input
              type="datetime-local"
              id="startDate"
              name="startDate"
              value={tournament.startDate}
              onChange={handleChange}
              className={`${styles.input} ${errors.startDate ? styles.errorInput : ''}`}
            />
            {errors.startDate && <span className={styles.errorText}>{errors.startDate}</span>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="endDate" className={styles.label}>
              Дата и время окончания
            </label>
            <input
              type="datetime-local"
              id="endDate"
              name="endDate"
              value={tournament.endDate}
              onChange={handleChange}
              className={`${styles.input} ${errors.endDate ? styles.errorInput : ''}`}
            />
            {errors.endDate && <span className={styles.errorText}>{errors.endDate}</span>}
          </div>
        </div>

        <button 
          type="submit" 
          className={styles.submitButton}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Создание...' : 'Создать турнир'}
        </button>
      </form>
    </div>
  );
};

export default CreateTournamentForm;