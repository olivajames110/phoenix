import React from "react";
import { useTable } from "react-table";
import FlatironTable from "../FlatironTable";
// import "./ReactTable.css";

const ReactTable = ({ columns, data, ...props }) => {
  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  // Render the UI for your table
  return (
    <FlatironTable title={props.title}>
      <table id={props.id} className="table" {...getTableProps()}>
        {props.title && (
          <thead className="table-title">
            <th colSpan={columns.length}>{props.title}</th>
          </thead>
        )}
        <thead className="cell-titles">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.slice(0, 12).map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </FlatironTable>
  );
};
export default ReactTable;
