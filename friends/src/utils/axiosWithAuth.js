import axios from 'axios';

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    baseURL: "http://localhost:5500/api",
    headers: {
      Authorization: token
    }
  });
}

export default axiosWithAuth;