// services/api.ts
import axios from 'axios';
import { useNavigate } from 'react-router';
import { Athlete } from '../components/rating/rating';
import { useAuth } from './authContext';
import { Tournament } from '../components/tournaments/tournaments';

const API_BASE_URL = 'http://localhost:8080';


const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Интерфейсы для типизации
export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  firstName: string;
  lastName: string;
  patronymic: string;
  email: string;
  password: string;
  phone: string;
  gender: string;
  birthday: string;
}

export interface AuthResponse extends AuthData 
{
  accessToken: string;
  refreshToken: string;
}

export interface AuthData{
  id: number | null;
  role: string | null;
  name: string | null;
  surname: string | null;
}

// Сервис для работы с аутентификацией
export const authService = {
  

  async login(credentials: LoginData): Promise<AuthResponse> {
    try {
      const response = await api.post<AuthResponse>('/login', {
        email: credentials.email,
        password: credentials.password
      });
      console.log(response.data);
      
      if (response.status == 200){

        localStorage.setItem('access_token', response.data.accessToken);
        localStorage.setItem('refresh_token', response.data.refreshToken);
        
        
      }
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'Login failed');
      }
      throw new Error('An unexpected error occurred');
    }
  },

  

  async register(userData: RegisterData): Promise<AuthResponse> {
    try {
      const response = await api.post<AuthResponse>('/registration', {
        firstName: userData.firstName,
        surname: userData.lastName,
        patronymic: userData.patronymic,
        email: userData.email,
        password: userData.password,
        phoneNumber: userData.phone,
        gender: userData.gender,
        born: userData.birthday,
        
      });
      console.log(response.status, response.data);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data?.message, error.response?.status, error.response?.statusText, error.response?.data);
        throw new Error(error.response?.data?.message || 'Registration failed');
      }
      throw new Error('An unexpected error occurred');
    }
  },
};

export const apiService = {
  async getUsers(): Promise<Athlete[]> {
    try {
      const response = await api.get<Athlete[]>('/users');
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'Get users failed');
      }
      throw new Error('An unexpected error occurred');
    }
  },

  async getTournaments(): Promise<Tournament[]> {
    try {
      const response = await api.get<Tournament[]>('/tournaments');
      
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'Get tournaments failed');
      }
      throw new Error('An unexpected error occurred');
    }
  },

  async addNewTournament(tournament: {tournamentName:string, tournamentStartDate: string, tournamentEndDate: string, location: string}): Promise<any> {
    try {
      const response = await api.post<Tournament>('/tournaments', tournament);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'Add new tournament failed');
      }
      throw new Error('An unexpected error occurred');
    }
  },
};

// services/api.ts
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});