import axios from "axios";
const client = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

client.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = localStorage.getItem("token")
      ? `Bearer ${localStorage.getItem("token")}`
      : "";
    return config;
  },
  (error) => new Promise.reject(error)
);

export const clientAuth = {
  login: async (data) => {
    const response = await client.post("auth/signin", data);
    return response;
  },
  signup: async (data) => {
    const response = await client.post("auth/signup", data);
    return response;
  },
};

export const clientPost = {
  create: async (data) => {
    const response = await client.post("todos", data);
    return response;
  },
  read: async (data) => {
    const response = await client.get("todos");
    return response;
  },
  delete: async (id) => {
    const response = await client.delete(`todos/${id}`);
    return response;
  },
  update: async (id, data) => {
    const response = await client.put(`todos/${id}`, data);
    return response;
  },
};

// export const clientAuth = {
//   login: async (data) => {
//     const response = await api.post("auth/signin", data);
//     return response.data;
//   },
//   signup: async (data) => {
//     const response = await api.post("auth/signup", data);
//     return response.data;
//   },
// };

// export const clientPost = {
//   read: async () => {
//     const response = await api.get("todos");
//     return response.data;
//   },
//   create: async (todo) => {
//     const response = await api.post("todos", todo);
//     return response.data;
//   },
//   delete: async (id) => {
//     const response = await api.delete(`todos/${id}`, id);
//     return response;
//   },
//   update: async (id, data) => {
//     const response = await api.put(`todos/${id}`, data);
//     return response.data;
//   },
// };
