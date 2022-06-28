import axios from "axios";

const httpClient = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-type": "application/json"
  }
})

export const getAll = () => {
  return httpClient.get("/home/clientes", { headers: { Authorization: "Bearer " + localStorage.getItem("jwtToken") } });
};

export const get = nome => {
  return httpClient.get(`/home/clientes/${nome}`,{});
};

export const create = data => {
  return httpClient.post("/client", data);
};

export const update = (id, data) => {
  return httpClient.put(`/home/clientes/${id}`, data);
};

export const remove = id => {
  return httpClient.delete(`/home/clientes/${id}`);
};

export const exportExcel = () => {
  return httpClient.get("/home/clientes/export/excel", {
    responseType: "blob",
    headers: { Authorization: "Bearer " + localStorage.getItem("jwtToken") },
  });
};

export const login = (data) => {
  return httpClient.post(
    "/login",
    {},
    {
      auth: {
        username: data.nome,
        password: data.senha,
      },
    }
  );
};