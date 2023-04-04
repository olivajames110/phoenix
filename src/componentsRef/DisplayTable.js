import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import { Box } from "@mui/material";
import _, { isNil } from "lodash";
import React from "react";
import { usePagination, useRowSelect, useSortBy, useTable } from "react-table";
import FlatironTable from "./FlatironTable";
import { Button, Card, IconButton, Skeleton, Stack } from "@mui/material";
export const DisplayTable = ({ columns, data, ...props }) => {
  // Use the state and functions returned from useTable to build your UI

  const { getTableProps, getTableBodyProps, headerGroups, prepareRow, rows } =
    useTable({
      columns,
      data,
    });

  // Render the UI for your table
  return (
    <>
      <FlatironTable noBorder={props.noBorder}>
        <table
          style={props.tableStyles}
          id={props.id}
          className={`file-document-table  `}
          // className={`file-document-table  `}
          {...getTableProps()}
        >
          {!props.hideHeader ? (
            <thead
              style={{
                backgroundColor: props.headeBackgroundColor
                  ? props.headeBackgroundColor
                  : "#fafafa",
              }}
              className="cell-titles"
            >
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps()}
                      style={{
                        color: props.headerTextColor
                          ? props.headerTextColor
                          : "inherit",
                        ...props.headerStyles,
                      }}
                      {...props.thProps}
                    >
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
          ) : null}
          {/* Table Body */}
          <tbody {...getTableBodyProps()}>
            {data?.length < 1 ? (
              <tr>
                <td>No files found</td>
              </tr>
            ) : (
              rows.map((row, i) => {
                prepareRow(row);

                return (
                  <>
                    <tr
                      className={row?.original?.isTotal ? "total" : ""}
                      key={row.original.id}
                      {...row.getRowProps()}
                    >
                      {row.cells.map((cell) => {
                        // console.log("cell", cell.getCellProps());
                        return (
                          <td
                            className={
                              !isNil(cell.value) && row?.original?.isTotal
                                ? "total"
                                : ""
                            }
                            {...props.tdProps}
                            key={Math.random()}
                            {...cell.getCellProps()}
                          >
                            {/* {cell.render("Cell")} */}
                            {props.isLoading ? (
                              <Skeleton width={"60%"} />
                            ) : cell.value === undefined ||
                              cell.value === "" ? (
                              row?.original?.isTotal ? undefined : (
                                "-"
                              )
                            ) : (
                              cell.render("Cell")
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  </>
                );
              })
            )}
            {props.total ? (
              <tr style={{ borderTop: "3px solid #b1b2b4ad", padding: "15px" }}>
                <td style={{ fontWeight: "600" }}>Total</td>
                <td
                  style={{
                    background: "#8080800f",
                    padding: "15px",
                    fontWeight: "600",
                  }}
                >
                  {props.total}
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </FlatironTable>
    </>
  );
};

export default DisplayTable;
