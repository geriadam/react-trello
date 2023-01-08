import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://todo-api-18-140-52-65.rakamin.com";

class TodosService {
  getTodoLists() {
    return axios.get(API_URL + "/todos", { headers: authHeader() });
  }

  postTodo(data) {
    return axios.post(API_URL + "/todos", data, { headers: authHeader() });
  }
}

export default new TodosService();