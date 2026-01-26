import axios from "axios";

const api = axios.create({
  baseURL: "https://unity-hub-26yx.vercel.app/api",
});

export default api;