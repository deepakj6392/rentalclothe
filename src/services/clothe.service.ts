import http from './http.service';

const API_BASE_URL = 'http://localhost:3000/api'; // Adjust based on your backend URL

class ClotheService {
  async getAllProducts(params?: { skip?: number; limit?: number; search?: string }): Promise<any> {
    const response = await http.get(`${API_BASE_URL}/product/getAllProducts`, { params });
    return response.data;
  }

  async getProductById(slug: string): Promise<any> {
    const response = await http.get(`${API_BASE_URL}/product/${slug}`);
    return response.data;
  }

  async addProduct(formData: FormData): Promise<any> {
    const response = await http.post(`${API_BASE_URL}/product`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  }

  async updateProduct(id: string, formData: FormData): Promise<any> {
    const response = await http.put(`${API_BASE_URL}/product/${id}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  }

  async deleteProduct(id: string): Promise<any> {
    const response = await http.delete(`${API_BASE_URL}/product/${id}`);
    return response.data;
  }
}

export default new ClotheService();
