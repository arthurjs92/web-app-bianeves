import axios from "axios";

const httpClient = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-type": "application/json"
  }
})

export const getAll = () => {
  return httpClient.get("/admin/clientes");
};

export const get = id => {
  return httpClient.get(`/admin/clientes/${id}`);
};

export const create = data => {
  return httpClient.post("/client", data);
};

export const update = (id, data) => {
  return httpClient.put(`/admin/clientes/${id}`, data);
};

export const remove = id => {
  return httpClient.delete(`/admin/clientes/${id}`);
};

export const exportExcel = () =>{
    return httpClient.get(`/admin/clientes/export/excel`);
}