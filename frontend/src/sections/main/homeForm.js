import React, { useState, useEffect, Fragment } from "react";
import * as api from "../../services/Endpoints";
import FileDownload from "js-file-download";
import Logo from "../../img/imagens-header/logo-principal.png";
import FooterHome from "../footer/FooterHome";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";

export default function HomeForm() {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const [editFormData, setEditFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
  });

  const [editDatatId, setEditDatatId] = useState(null);

  const handleEditFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;
    setEditFormData(newFormData);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();
    
    const editedDataId = {
      id: editDatatId,
      nome: editFormData.nome,
      telefone: editFormData.telefone,
      email: editFormData.email,
      data: editFormData.data,
    };

    api.update(editedDataId.id, editedDataId);

    const newData = [...data];
    const index = data.findIndex((data) => data.id === editDatatId);
    newData[index] = editedDataId;
    setData(newData);

    setEditDatatId(null);
  };

  const handleEditClick = (event, data) => {
    event.preventDefault();
    setEditDatatId(data.id);

    const formValues = {
      id: data.id,
      nome: data.nome,
      telefone: data.telefone,
      email: data.email,
      data: data.data,
    };

    setEditFormData(formValues);
  };

  useEffect(() => {
    receivedData();
  }, []);

  const exportExcel = () => {
    api.exportExcel().then((response) => {
      FileDownload(response.data, "clientes.xlsx");
    });
  };

  const receivedData = () => {
    api
      .getAll()
      .then((response) => {
        setData(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleCancelClick = () => {
    setEditDatatId(null);
  };

  /*METODO DELETE - CRIO O OBJETO, PEGO O INDEX ONDE O ID DA ROW É IGUAL AO ID RECEBIDO NO MÉTODO, APLICANDO O METODO SPLICE PARA REMOVER O OBJETO NO INDEX, SALVANDO
  A NOVA LISTA DE OBJETOS SEM O OBJETO QUE SERÁ DELETADO E EM SEGUIDO FAZENDO A REMOÇAO DO OBJETO DO BANCO DE DADOS*/

  const handleDeleteClick = (dataId) => {
    const newData = [...data];

    const index = data.findIndex((data) => data.id === dataId);

    newData.splice(index, 1);

    setData(newData);

    api.remove(dataId);
  };

  return (
    <div>
      {data.length === 0 ? (
        <div className="col-xs-4 col-sm-8 col-md-8 col-lg-4">
          <div className="text-center">
            <img
              src={Logo}
              className="img-responsive img-fluid d-block w-50"
              alt=""
            />
          </div>
          <div className="input-group p-3 search-bar">
            <input
              type="search"
              className="form-control rounded col-xs-12 col-sm-12 col-md-12 col-lg-12"
              placeholder="Digite um nome"
              aria-label="Buscar"
              aria-describedby="search-addon"
              onChange={(texto) => setSearchValue(texto.target.value)}
              name="nome"
              disabled
            />
          </div>
          <form className="table-responsive">
            <table className="table col-xs-4 col-sm-4 col-md-8 col-lg-12 mt-5">
              <thead className="thead-dark">
                <tr className="text-center">
                  <th scope="col">Cliente</th>
                  <th scope="col">Nome</th>
                  <th scope="col">Telefone</th>
                  <th scope="col">E-mail</th>
                  <th scope="col">Cadastro</th>
                  <th scope="col">Ação</th>
                </tr>
              </thead>
            </table>
          </form>
          <div className="container text-center">
            <h5>Sem clientes cadastrados no momento.</h5>
          </div>
        </div>
      ) : (
        <div className="container">   
          <div className="text-center col-sm-8 col-md-8 col-lg-4 col-xl-4">
            <img
              src={Logo}
              className="img-responsive img-fluid d-block w-50"
              alt="logo-bia-neves"
            />
          </div>
          <div className="input-group p-3">
            <input
              type="search"
              className="form-control rounded"
              placeholder="Digite um nome"
              aria-label="Buscar"
              aria-describedby="search-addon"
              onChange={(texto) => setSearchValue(texto.target.value)}
              name="nome"
            />
          </div>
          <form  className="table-responsive" onSubmit={handleEditFormSubmit}>
            <table className="table col-xs-4 col-sm-4 col-md-8 col-lg-12 mt-5">
              <thead className="thead-dark">
                <tr className="text-center">
                  <th scope="col">Cliente</th>
                  <th scope="col">Nome</th>
                  <th scope="col">Telefone</th>
                  <th scope="col">E-mail</th>
                  <th scope="col">Cadastro</th>
                  <th scope="col">Ação</th>
                </tr>
              </thead>
              <tbody className="text-center justify-content-center">
                {data.map((data, key) => {
                  if (data.nome.includes(searchValue)) {
                    return (
                      <Fragment>
                        {editDatatId === data.id ? (
                          <EditableRow
                            editFormData={editFormData}
                            handleEditFormChange={handleEditFormChange}
                            handleEditFormSubmit={handleEditFormSubmit}
                            handleCancelClick={handleCancelClick}
                          />
                        ) : (
                          <ReadOnlyRow
                            data={data}
                            handleEditClick={handleEditClick}
                            handleDeleteClick={handleDeleteClick}
                          />
                        )}
                      </Fragment>
                    );
                  }
                })}
              </tbody>
            </table>
          </form>
          <div className="text-center">
            <button className="btn mt-4" onClick={() => exportExcel()}>
              Exportar dados CSV
            </button>
          </div>
        </div> 
        )}
      <FooterHome />
    </div>
  );
}