import http from './http.service';

const API_BASE_URL = 'http://localhost:3000/api'; // Adjust based on your backend URL

class OrderService {
  async getAllOrders(params?: { skip?: number; limit?: number; search?: string }): Promise<any> {
    const response = await http.get(`${API_BASE_URL}/order/getAllOrdersAdmin`, { params });
    return response.data;
  }

  async getOrderById(id: string): Promise<any> {
    const response = await http.get(`${API_BASE_URL}/order/${id}`);
    return response.data;
  }
}

export default new OrderService();
