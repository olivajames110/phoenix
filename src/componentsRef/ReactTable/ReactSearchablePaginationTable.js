import React, { useState } from "react";

import {
  useExpanded,
  useFilters,
  useGlobalFilter,
  useGroupBy,
  usePagination,
  useRowSelect,
  useSortBy,
  useTable,
} from "react-table";

import {
  ArrowDropDown,
  ArrowDropUp,
  FilterAltOutlined,
} from "@mui/icons-material";
import { Card, IconButton, Skeleton, Stack } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "use-local-storage";
// import FlatironTable from "../FlatironTable";
// import FlatironTableOuterHeader from "../FlatironTable/FlatironTableOuterHeader";
// import FlatironTableTitle from "../FlatironTable/FlatironTableTitle";
// import GlobalSearch from "./components/GlobalSearch";
// import TableFilters from "./components/TableFilters";
// import TableFiltersDialog from "./components/TableFiltersDialog";
// import TablePagination from "./components/TablePagination";
import "./styles/ReactSearchableTable.css";
import FlatironTable from "../FlatironTable";
import FlatironTableOuterHeader from "../FlatironTable/FlatironTableOuterHeader";
import GlobalSearch from "./components/GlobalSearch";
import TablePagination from "./components/TablePagination";
import TableFiltersDialog from "./components/TableFiltersDialog";
import FlatironTableTitle from "../FlatironTable/FlatironTableTitle";
import TableFilters from "./components/TableFilters";
// Be sure to pass our updateMyData and the skipReset option
const _ = require("lodash");

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
    <FlatironTable id="searchable">
      <FlatironTableOuterHeader>
        {!props.hideSearch && (
          <GlobalSearch
            preGlobalFilteredRows={preGlobalFilteredRows}
            globalFilter={globalFilter}
            setGlobalFilter={setGlobalFilter}
            rows={rows}
          />
        )}
        {!props.hidePagination && (
          <TablePagination
            data={data}
            hideFilter
            onClick={gotoPage}
            onRowNumChange={setPageSize}
            page={pageIndex + 1}
            pageCount={pageCount}
            value={pageSize}
            toggleShowFilters={toggleShowFilters}
            showTableFilters={showTableFilters}
            tableFilters={props.tableFilters}
          />
        )}
      </FlatironTableOuterHeader>
      <div className="doc-group-table-card__body table-and-filter-outer-wrapper">
        <Card sx={{ overflow: "unset" }} id="table-card">
          <table className="table" {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr
                  className="cell-titless"
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
                        <td
                          onClick={() =>
                            props.handleRowClick(
                              cell.row.original.hasOwnProperty("ironId")
                                ? cell.row.original.ironId
                                : cell.row.original._id
                            )
                          }
                          {...cell.getCellProps()}
                        >
                          {props.isLoading ? (
                            <Skeleton width={"60%"} />
                          ) : cell.value === undefined || cell.value === "" ? (
                            "-"
                          ) : (
                            cell.render("Cell")
                          )}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Card>
      </div>
    </FlatironTable>
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

const ReactSearchablePaginationTable = (props) => {
  const [tableData, setTableData] = useState([]);

  const [showFilterDialog, setShowFilterDialog] = useState(false);
  const [tableFilters, setTableFilters] = useState([]);
  const [localFilters, setLocalFilters] = useLocalStorage(
    `${props.id}-filters`
  );

  let navigate = useNavigate();
  const dummyData = Array(20).fill("");

  //Functions
  const handleFilterTableData = (filtersArray) => {
    if (filtersArray === undefined || filtersArray?.length === 0) {
      setTableData(props.data);
      return;
    }

    let filteredData = props.data.filter((d) => {
      let obArr = Object.values(d);

      //Atleast one
      let found = filtersArray.some((r) => obArr.indexOf(r) >= 0);

      //Exact
      const containsAll = filtersArray.every((element) => {
        return obArr.includes(element);
      });
      // let found = obArr.some((de) => tableFilters.some(de))
      return found;
    });

    setTableData(filteredData);
  };

  const handleSetFilters = (filters) => {
    setLocalFilters(filters);
    setTableFilters(filters);
  };

  const handleRowClick = (id) => {
    if (!props.noClick) {
      navigate(`${props.navigateTo}${id}`);
    }
  };

  const onFilterSubmit = (fil) => {
    handleSetFilters(fil);
    handleFilterTableData(fil);
  };

  const handleRemoveFilter = (filterToRemove) => {
    const updated = tableFilters.filter((f) => f !== filterToRemove);
    onFilterSubmit(updated);
  };

  React.useEffect(() => {
    if (localFilters !== undefined && localFilters?.length > 0) {
      setTableFilters(localFilters);
      handleFilterTableData(localFilters);
      return;
    }
    setTableData(props.data);
  }, [props.data]);

  // React.useEffect(() => {
  //   if (localFilters !== undefined) {
  //     setTableFilters(localFilters);
  //     handleFilterTableData(localFilters);
  //   }
  // }, []);

  const title = props.isLoading
    ? `Fetching ${props.title}`
    : `${props.title} (${tableData?.length})`;

  return (
    <Box pb={"20px"}>
      <FlatironTableTitle title={props.title ? title : null}>
        {!props.hideFilter && (
          <Stack direction="row" alignItems={"center"} spacing={1}>
            <TableFilters
              tableFilters={tableFilters}
              handleTableFilter={props.handleTableFilter}
              onDelete={handleRemoveFilter}
              // toggleShowFilters={toggleShowFilters}
            />
            <IconButton
              onClick={() => setShowFilterDialog(true)}
              id="filter"
              aria-label="filter"
              size="large"
            >
              <FilterAltOutlined fontSize="inherit" />
            </IconButton>
          </Stack>
        )}
      </FlatironTableTitle>
      <TableFiltersDialog
        tableFilters={tableFilters}
        show={showFilterDialog}
        onClose={() => setShowFilterDialog(false)}
        onSubmit={onFilterSubmit}
      />
      <Table
        id={props.id}
        title={props.title}
        columns={props.columns}
        data={props.isLoading ? dummyData : tableData}
        // data={dummyData}

        hidePagination={props.hidePagination}
        handleRowClick={handleRowClick}
        tableFilters={tableFilters}
        isLoading={props.isLoading}
        // {...props}
      />
    </Box>
  );
};

export default React.memo(ReactSearchablePaginationTable);
