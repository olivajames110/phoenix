import React, { useState } from "react";
import { usePagination, useRowSelect, useSortBy, useTable } from "react-table";

// import "./ReactTable.css";

import { EditableFileTableRow } from "./EditableFileTableRow";
import SortableTableHeader from "./SortableTableHeader";
import "./FileDocGroupTable.css";

export const FileDocumentTable = ({ columns, data, ...props }) => {
  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, getTableBodyProps, headerGroups, prepareRow, rows } =
    useTable(
      {
        columns,
        data,
        initialState: { pageSize: 100 },
      },
      useSortBy,
      usePagination,
      useRowSelect
    );

  // Render the UI for your table
  return (
    <>
      <div
        id="files"
        className={`react-table-wrapper selectable ${props.className}`}
      >
        <table
          id={props.id}
          className={`file-document-table ${
            props.isCategorized ? "categorized" : ""
          }`}
          {...getTableProps()}
        >
          <SortableTableHeader headerGroups={headerGroups} />
          {/* Table Body */}
          <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row);
              // console.log(row);
              return (
                <EditableFileTableRow
                  key={i}
                  row={row}
                  isCategorized={props.isCategorized}
                  original={row.original}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default FileDocumentTable;
