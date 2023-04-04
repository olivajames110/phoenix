import React from "react";

const TableHeader = (props) => {
  return (
    <thead className="table__header">
      <tr>
        {props.tableHeader.map((d) => (
          <th colSpan={1}>{d}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
