import React from "react";
import TableHeader from "./components/TableHeader";
import TableRow from "./components/TableRow";
import { useTable } from "react-table";
import "./Table.css";

const Table = (props) => {
  // Use the state and functions returned from useTable to build your UI

  // Render the UI for your table
  return (
    <div
      id={props.id}
      className={`standard-table-outer-wrapper ${props.className}`}
    >
      {props.outerTableTitle && (
        <div className="standard-table-outer-title">
          <h3>{props.outerTableTitle}</h3>
        </div>
      )}
      <table className="standard-table">
        {props.tableTitles && (
          <thead>
            <tr>
              {props.tableTitles?.map((title) => (
                <th colSpan={1}>{title}</th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>{props.children}</tbody>
      </table>
    </div>
  );
};
export default Table;
