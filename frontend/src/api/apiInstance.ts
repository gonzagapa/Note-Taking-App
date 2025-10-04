import axios from "axios";

export const apiNote = axios.create({
  baseURL: 'http://localhost:5001/api/',
});