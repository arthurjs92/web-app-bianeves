import axios from "axios";

const httpClient = axios.create({
  baseURL: "https://bianeves.com",
  headers: {
    "Content-type": "application/json",
  },
});

export const getAll = () => {
  return httpClient.get("/home/clientes", {
    headers: { Authorization: "Bearer " + localStorage.getItem("jwtToken") },
  });
};

export const get = (nome) => {
  return httpClient.get(`/home/clientes/${nome}`, {
    headers: { Authorization: "Bearer " + localStorage.getItem("jwtToken") },
  });
};

export const create = (data) => {
  return httpClient.post("/client", data);
};

export const update = (id, data) => {
  return httpClient.put(`/home/clientes/${id}`, data, {headers: { Authorization: "Bearer " + localStorage.getItem("jwtToken") }});
};

export const remove = (id) => {
  return httpClient.delete(`/home/clientes/${id}`, {headers: { Authorization: "Bearer " + localStorage.getItem("jwtToken") }});
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
