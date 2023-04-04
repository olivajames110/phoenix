import React, { useEffect, useState } from "react";
import TableHeader from "./components/TableHeader";
import TableRow from "./components/TableRow";
import {
  usePagination,
  useRowSelect,
  useTable,
  toggleAllRowsSelected,
  useSortBy,
} from "react-table";

// import "./ReactTable.css";

import { ArrowDropUp, ArrowDropDown } from "@mui/icons-material";

import { TableCheckbox } from "./components/TableCheckbox";
import FixedEditActionsToolbar from "./components/FixedEditActionsToolbar";
import TablePagination from "./components/TablePagination";
import { Box } from "@mui/system";

const ReactPaginationTable = ({ columns, data, ...props }) => {
  const [isEditing, setIsEditing] = useState(true);

  const handleBulkDownload = () => {
    selectedFlatRows.map((r) => {
      console.log(r.original);

      props.handleDocumentFileDownload(r.original);
    });
  };

  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    selectedFlatRows,
    state,
    state: { pageIndex, pageSize, selectedRowIds },
    toggleAllRowsSelected,
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy,
    usePagination,
    useRowSelect
  );

  const handleOnClose = () => {
    // setSelectedRows([])
    toggleAllRowsSelected(false);
    console.log("state", state);

    // props.setIsEditing(false);
  };

  useEffect(() => {
    // console.log("selectedFlatRows", selectedFlatRows);
    // console.log("selectedRowIds", selectedRowIds);

    if (props.setSelectedRows) {
      props.setSelectedRows(selectedFlatRows);
    }
  }, [selectedRowIds, selectedFlatRows]);

  // Render the UI for your table
  return (
    <>
      <div id="selectable" className={`react-table-wrapper`}>
        <table id={props.id} className="table" {...getTableProps()}>
          <thead className="table-title">
            <tr>
              <th colSpan={4}>
                {props.title} ({data.length})
              </th>

              <th colSpan={6}>
                <TablePagination
                  data={data}
                  onClick={gotoPage}
                  onRowNumChange={setPageSize}
                  page={pageIndex + 1}
                  pageCount={pageCount}
                  value={pageSize}
                />
              </th>
            </tr>
          </thead>
          <thead className="cell-titles">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}

                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <Box
                          sx={{
                            width: "14px",
                            height: "14px",
                            display: "inline-flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <ArrowDropUp />
                        </Box>
                      ) : (
                        <Box
                          sx={{
                            width: "14px",
                            height: "14px",
                            display: "inline-flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <ArrowDropDown />
                        </Box>
                      )
                    ) : (
                      ""
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
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
        {/* <NumTableRowsSelector
          items={[1, 2, 3, 4, 5, 10, 15]}
          onChange={setPageSize}
          data={data}
          value={pageSize}
        /> */}

        {selectedFlatRows.length >= 1 && (
          <FixedEditActionsToolbar
            onClick={() => handleBulkDownload()}
            selectedRows={selectedFlatRows}
            onClose={handleOnClose}
          >
            {props.renderToolbarActions}
          </FixedEditActionsToolbar>
        )}
      </div>
    </>
  );
};
export default ReactPaginationTable;
