import axios from "axios";
import { baseUrl } from "./components/Constants/Constants";
const instance = axios.create({
  baseURL: baseUrl,
});

export default instance;
