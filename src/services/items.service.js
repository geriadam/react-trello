import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://todo-api-18-140-52-65.rakamin.com";

class ItemsService {
  getItemList(todoId) {
    return axios.get(`${API_URL}/todos/${todoId}/items`, { headers: authHeader() });
  }

  postItem(todoId, data) {
    return axios.post(`${API_URL}/todos/${todoId}/items`, data, { headers: authHeader() });
  }

  patchItem(todoId, itemId, data) {
    return axios.patch(`${API_URL}/todos/${todoId}/items/${itemId}`, data, { headers: authHeader() });
  }

  deleteItem(todoId, itemId) {
    return axios.delete(`${API_URL}/todos/${todoId}/items/${itemId}`, { headers: authHeader() });
  }
}

export default new ItemsService();