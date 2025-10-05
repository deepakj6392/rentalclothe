import http from './http.service';
import { IUser } from '../core/interfaces/user';

const API_BASE_URL = 'http://localhost:3000/api'; // Adjust based on your backend URL

class UserService {
  async getProfile(): Promise<IUser> {
    const response = await http.get(`${API_BASE_URL}/user/profile`);
    return response.data;
  }

  async updateProfile(userData: Partial<IUser>): Promise<IUser> {
    const response = await http.put(`${API_BASE_URL}/user/profile`, userData);
    return response.data;
  }

  async changePassword(data: { oldPassword: string; newPassword: string }): Promise<void> {
    await http.put(`${API_BASE_URL}/user/change-password`, data);
  }

  async getOrders(): Promise<unknown[]> {
    const response = await http.get(`${API_BASE_URL}/user/orders`);
    return response.data;
  }

  async getAllUsers(params?: { skip?: number; limit?: number; search?: string }): Promise<any> {
    const response = await http.get(`${API_BASE_URL}/user/getAllUsers`, { params });
    return response.data;
  }

  async getUserById(id: string): Promise<any> {
    const response = await http.get(`${API_BASE_URL}/user/${id}`);
    return response.data;
  }

  async updateUserById(id: string, userData: Partial<any>): Promise<any> {
    const response = await http.put(`${API_BASE_URL}/user/${id}`, userData);
    return response.data;
  }

  async deleteUser(id: string): Promise<any> {
    const response = await http.delete(`${API_BASE_URL}/user/${id}`);
    return response.data;
  }
}

export default new UserService();
