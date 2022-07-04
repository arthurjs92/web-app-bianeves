import React from "react";
import { FaEdit } from 'react-icons/fa';
import { FaRegTrashAlt } from 'react-icons/fa';
import {Link} from 'react-router-dom';

export default function ReadOnlyRow({data, key, handleEditClick, handleDeleteClick}) {
  return (
    <tr key={key}>
      <td>{data.id}</td>
      <td>{data.nome}</td>
      <td>{data.telefone}</td>
      <td>{data.email}</td>
      <td>{data.data}</td>
      <td>
        <Link to="" onClick={(event) => handleEditClick(event, data)}><FaEdit/></Link>
      </td>
      <td>
      <Link to="" onClick={() => handleDeleteClick(data.id)}><FaRegTrashAlt/></Link>
      </td>
    </tr>
  );
}
