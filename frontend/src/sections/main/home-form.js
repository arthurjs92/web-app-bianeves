import React, { useState, useEffect } from "react";
import * as api from "../../services/Endpoints";
import FileDownload from "js-file-download";
import Logo from "../../img/imagens-header/logo-principal.png";

export default function HomeForm() {
  const [data, setDados] = useState([]);

  useEffect(() => {
    receivedData();
  }, []);

  const exportExcel = () => {
    api.exportExcel().then((response) => {
      console.log(response);
      FileDownload(response.data, "clientes.xlsx");
    });
  };

  const receivedData = () => {
    api
      .getAll()
      .then((response) => {
        setDados(response.data);
        console.log("---------------------", response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const trataCampo = (event) => {
    const { name, value } = event.target;
    setDados({ ...data, [name]: value });
  };

  return (
    <div>
      {data.length === 0 ? (
        <p>carregando dados ...</p>
      ) : (
        <div className="col-xs-4 col-sm-8 col-md-8 col-lg-4">
          <div className="text-center">
            <img
              src={Logo}
              className="img-responsive img-fluid d-block w-50"
              alt=""
            />
          </div>
          <div className="input-group p-3">
            <input
              type="search"
              className="form-control rounded"
              placeholder="Buscar"
              aria-label="Buscar"
              aria-describedby="search-addon"
              onChange={trataCampo}
              value={data.nome}
              name="nome"
            />
            <button
              type="button"
              className="btn-home btn btn-outline-primary"
              onClick={receivedData}
            >
              Buscar
            </button>
          </div>
          <table className="table col-lg-12 mt-5">
            <thead className="thead-dark">
              <tr className="text-center">
                <th scope="col">Cliente</th>
                <th scope="col">Nome</th>
                <th scope="col">Telefone</th>
                <th scope="col">E-mail</th>
                <th scope="col">Cadastro</th>
              </tr>
            </thead>
            <tbody>
              {data.map((data, key) => (
                <tr scope="row" key={key}>
                  <td>{data.id}</td>
                  <td>{data.nome}</td>
                  <td>{data.telefone}</td>
                  <td>{data.email}</td>
                  <td>{data.data}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-center">
            <button className="btn mt-4" onClick={() => exportExcel()}>
              Exportar dados CSV
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
