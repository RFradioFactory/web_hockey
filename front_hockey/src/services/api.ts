// services/api.ts
import axios from 'axios';
import { useNavigate } from 'react-router';

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

export interface RegisterData extends LoginData {
  firstName: string;
  lastName: string;
  patronymic: string;
  birthday: string;
  gender: string;
  phone: string;
}

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  //id
  //роль
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
      
      if(response.status == 200){
        localStorage.setItem('access_token', response.data.accessToken);
        localStorage.setItem('refresh_token', response.data.refreshToken);
        //localStorage.setItem('id', response.data.id);
        //localStorage.setItem('refresh_token', response.data.refreshToken);
        
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
        lastName: userData.lastName,
        patronymic: userData.patronymic,
        email: userData.email,
        password: userData.password,
        phoneNumber: userData.phone,
        gender: userData.gender,
        born: userData.birthday,
        
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'Registration failed');
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