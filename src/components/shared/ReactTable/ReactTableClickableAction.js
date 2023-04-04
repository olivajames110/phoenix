import React, { useEffect, useState } from "react";

import {
  useTable,
  usePagination,
  useSortBy,
  useFilters,
  useGroupBy,
  useExpanded,
  useRowSelect,
  useGlobalFilter,
} from "react-table";

import TablePagination from "./components/TablePagination";
import { Box } from "@mui/system";
import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import GlobalSearch from "./components/GlobalSearch";
import { Card, Skeleton } from "@mui/material";
import TableFilters from "./components/TableFilters";

import { useNavigate } from "react-router-dom";
import "./styles/ReactSearchableTable.css";
// import "./styles/ReactSearchableTable.css";
// Be sure to pass our updateMyData and the skipReset option

function Table({ columns, data, ...props }) {
  const [showTableFilters, setShowTableFilters] = useState(false);

  const toggleShowFilters = () => {
    setShowTableFilters((s) => !s);
  };
  const filterTypes = React.useMemo(
    () => ({
      // Add a new fuzzyTextFilterFn filter type.

      // Or, override the default text filter to use
      // "startWith"
      text: (rows, id, filterValue) => {
        return rows.filter((row) => {
          const rowValue = row.values[id];
          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase())
            : true;
        });
      },
    }),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    pageCount,
    gotoPage,
    rows,
    preGlobalFilteredRows,
    setPageSize,
    visibleColumns,
    state: {
      pageIndex,
      pageSize,

      globalFilter,
    },

    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageSize: 50 },
      filterTypes,

      disableMultiSort: true,
    },
    useGlobalFilter,
    useFilters,
    useGroupBy,
    useSortBy,
    useExpanded,
    usePagination,
    useRowSelect
    // Here we will use a plugin to add our selection column
  );

  // Render the UI for your table
  return (
    <>
      <div className="table-and-filter-outer-wrapper">
        <Card sx={{ overflow: "unset" }} id="table-card">
          <table id="clickable-action" className="table" {...getTableProps()}>
            <thead>
              <tr className="table-title">
                {/* <th colSpan={Math.ceil(visibleColumns.length / 2)}> */}
                <th
                  style={{ paddingTop: "20px", paddingBottom: "15px" }}
                  colSpan={1}
                >
                  {props.title} {props.isLoading ? null : `(${rows.length})`}
                </th>
                {/* <th colSpan={8}>
                  <TablePagination
                    data={data}
                    onClick={gotoPage}
                    onRowNumChange={setPageSize}
                    page={pageIndex + 1}
                    pageCount={pageCount}
                    value={pageSize}
                    toggleShowFilters={toggleShowFilters}
                    showTableFilters={showTableFilters}
                    tableFilters={props.tableFilters}
                  />
                </th> */}
              </tr>
              {headerGroups.map((headerGroup) => (
                <tr
                  className="cell-titles"
                  {...headerGroup.getHeaderGroupProps()}
                >
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      {column.render("Header")}
                      <span>
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
                      </span>
                    </th>
                  ))}
                  <th> </th>
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row, i) => {
                prepareRow(row);

                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      // if (cell.value === "230 5th Avenue New York, NY") {
                      //   console.log(cell);
                      // }
                      return (
                        <>
                          <td>
                            {props.isLoading ? (
                              <Skeleton width={"60%"} />
                            ) : cell.value === undefined ||
                              cell.value === "" ? (
                              "-"
                            ) : (
                              cell.render("Cell")
                            )}
                          </td>
                        </>
                      );
                    })}
                    <td>
                      <button
                        className="action-button"
                        onClick={() => props.rowOnClick(row.original)}
                      >
                        {props.rowOnClickText}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Card>
      </div>
    </>
  );
}

// Define a custom filter filter function!
function filterGreaterThan(rows, id, filterValue) {
  return rows.filter((row) => {
    const rowValue = row.values[id];
    return rowValue >= filterValue;
  });
}

// This is an autoRemove method on the filter function that
// when given the new filter value and returns true, the filter
// will be automatically removed. Normally this is just an undefined
// check, but here, we want to remove the filter if it's not a number
filterGreaterThan.autoRemove = (val) => typeof val !== "number";

const ReactTableClickableAction = (props) => {
  const defaultTableData = props.data;
  const [tableData, setTableData] = useState([]);
  const [tableFilters, setTableFilters] = useState([]);
  const dummyData = Array(20).fill("");
  let navigate = useNavigate();
  // let skeletonTableData =  tableColumnsSkeletonData
  const handleRowClick = (id) => {
    navigate(`${props.navigateTo}${id}`);
  };
  //Functions
  const handleTableFilter = (data) => {
    // console.log("----------handleTableFilter----------", data);

    if (data.value === "clear") {
      // console.log("clear");
      setTableFilters([]);
      setTableData(defaultTableData);
      return;
    }

    let spreadFilters = [...tableFilters];

    const updatedFilters = spreadFilters.filter((f) => f.name !== data.name);

    if (data.value === "all") {
      // console.log("show all");
      setTableFilters(updatedFilters);
      return;
    }

    let filters = [...updatedFilters, data];
    // console.log("filters", filters);
    setTableFilters(filters);
  };

  const onFilterChange = (data) => {
    // console.log("----------onFilterChange----------", data);

    // if (tableFilters.length === 0) {
    //   clearTableFilters();
    //   return;
    // }

    // console.log("tableData", tableData);

    let filteredData = defaultTableData.filter((d) => {
      return tableFilters.every((filter) => {
        if (d[filter.name] === filter.value) {
          return true;
        }
        return false;
      });
    });

    // console.log("filteredData", filteredData);
    setTableData(filteredData);
  };

  const clearTableFilters = () => {
    setTableData(defaultTableData);
  };

  //Use Effects
  useEffect(() => {
    // console.log("tableData", tableData);
    onFilterChange();
  }, [tableFilters]);

  React.useEffect(() => {
    // console.log(
    //   "%c ----------- SETTING TABLE DATA  -----------",
    //   "background: #dbdf9c;"
    // );

    // props.columns.forEach((c) => console.log(c.accessor));
    setTableData(props.data);
  }, [props.data]);

  return (
    <Table
      id={props.id}
      title={props.title}
      columns={props.columns}
      data={props.isLoading ? dummyData : tableData}
      // data={dummyData}
      handleRowClick={handleRowClick}
      handleTableFilter={handleTableFilter}
      tableFilters={tableFilters}
      clearTableFilters={clearTableFilters}
      isLoading={props.isLoading}
      rowOnClick={props.rowOnClick}
      rowOnClickText={props.rowOnClickText}
      // {...props}
    />
  );
};

export default ReactTableClickableAction;
