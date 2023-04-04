import React from "react";

const TableRow = (props) => {
  return (
    <tr
      onClick={() => props.tableRowOnClick}
      key={props.key}
      className="table__row"
    >
      {props.tr?.map((td) => (
        <td colSpan={1}>{td}</td>
      ))}
    </tr>
  );
};

export default TableRow;
