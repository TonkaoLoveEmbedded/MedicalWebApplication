import './HistoryPage.css'
import React from 'react'

function TableRow({ id, date, time, image, result, handleonClick}) {
  return (
    <tr>
      <td className="col-id">{id}</td>
      <td className="col-date">{date}</td>
      <td className="col-time">{time}</td>
      <td className="col-image">
        <div
          className="avatar"
          style={{ backgroundImage: `url("${image}")` }}
        />
      </td>
      <td className="col-result">{result}</td>
       <td className="col-action">
        <button className="info-button" onClick={() => handleonClick(id)} >
          Info
        </button>
      </td>
    </tr>
  );
}
export default TableRow