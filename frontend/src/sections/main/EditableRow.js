import React from "react";
import {FaRegSave} from 'react-icons/fa';
import {FcCancel} from 'react-icons/fc';
import {Link} from 'react-router-dom';

export default function EditableRow({editFormData, handleEditFormChange, handleEditFormSubmit, handleCancelClick}) {
  return (
    <tr>
      <td>
        <input type="text" required="required" placeholder="id" name="id" value={editFormData.id} disabled />
      </td>
      <td>
        <input type="text" required="required" placeholder="nome" name="nome" value={editFormData.nome} onChange={handleEditFormChange}/>
      </td>
      <td>
        <input type="text" required="required" placeholder="telefone" name="telefone" value={editFormData.telefone} onChange={handleEditFormChange}/>
      </td>
      <td>
        <input type="text" required="required" placeholder="email" name="email" value={editFormData.email} onChange={handleEditFormChange}/>
      </td>
      <td>
        <input type="text" required="required" placeholder="data" name="data" value={editFormData.data} disabled/>
      </td>
      <td>
        <Link to={{pathname: `/home/clientes/${editFormData.id}`}} onClick={(event) => handleEditFormSubmit(event)}><FaRegSave /></Link>
      </td>
      <td>
        <Link to="" onClick={handleCancelClick}><FcCancel /></Link>
      </td>
    </tr>
  );
}
