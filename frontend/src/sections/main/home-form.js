import React, { useState, useEffect } from "react";
import * as api from "../../services/Endpoints";
import Logo from "../../img/imagens-header/logo-principal.png";

function HomeForm() {
  const [data, setDados] = useState([]);

  useEffect(() => {
    receivedData();
  }, []);

  const receivedData = () => {
    if(data == ""){
      api
      .getAll()
      .then((response) => {
        setDados(response.data);
        console.log("---------------------", response.data);
      })
      .catch((e) => {
        console.log(e);
      });
    } else{
      api
      .get(data.nome)
      .then((response) => {
        setDados(response.data);
        console.log("---------------------", response.data);
      })
      .catch((e) => {
        console.log(e);
      });
    }

  };

  const trataCampo = (event) => {
    const { name, value } = event.target;
    setDados({ ...data, [name]: value });
  };

  return (
    <div>
      <div className="col-xs-4 col-sm-8 col-md-8 col-lg-4">
        <div className="text-center">
          <img src={Logo} className="img-responsive img-fluid d-block w-50" />
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
            <tr>
              <th scope="col">Cliente</th>
              <th scope="col">Nome</th>
              <th scope="col">Telefone</th>
              <th scope="col">E-mail</th>
              <th scope="col">Cidade</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data, key) => (
              <tr scope="row" key={key}>
                <td>{data.nome}</td>
                <td>{data.telefone}</td>
                <td>{data.email}</td>
                <td>{data.cidade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HomeForm;
