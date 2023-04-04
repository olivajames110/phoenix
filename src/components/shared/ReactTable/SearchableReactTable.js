import { Card, Skeleton } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { useGlobalFilter, usePagination, useTable } from "react-table";
import { arrayProtector } from "../../../helpers/arrayProtector";
import { makeEmptyArray } from "../../../helpers/makeEmptyArray";
import FlatironTable from "../FlatironTable";
import FlatironTableOuterHeader from "../FlatironTable/FlatironTableOuterHeader";
import FlatironTableTitle from "../FlatironTable/FlatironTableTitle";
import { StackRowBetween } from "../MuiStack";
import TableSearchInput from "../Table/TableSearchInput";
import MuiTablePagination from "./components/MuiTablePagination";
import NumTableRowsSelector from "./components/NumTableRowsSelector";

function Table({
  columns,
  data,
  title,
  hideTitleCount,
  hidePagination,
  onRowClick,
  isLoading,
  outerHeaderStyles,
  headerContent,
}) {
  const props = useTable(
    {
      columns,
      data,
      initialState: { pageSize: 50 },
    },
    useGlobalFilter, // useGlobalFilter!
    usePagination
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    preGlobalFilteredRows,
    prepareRow,
    setGlobalFilter,
    page,
    pageCount,
    gotoPage,
    setPageSize,
    state: { pageIndex, pageSize, globalFilter },
  } = props;

  React.useEffect(() => {
    console.log(globalFilter);
  }, [globalFilter]);

  const tableTitle = hideTitleCount
    ? title
    : `${title} (${arrayProtector(rows).length})`;

  // UI ELEMENTS
  const rowNumSelect_and_pager__row = hidePagination ? null : (
    <Stack sx={{ flexShrink: 0 }} direction={"row"} alignItems="center">
      <NumTableRowsSelector
        items={[50, 75, 100, 200]}
        onChange={setPageSize}
        data={data}
        value={pageSize}
      />
      <MuiTablePagination
        sx={{ marginLeft: "10px" }}
        data={data}
        hideFilter
        onClick={gotoPage}
        onRowNumChange={setPageSize}
        page={pageIndex + 1}
        pageCount={pageCount}
        value={pageSize}
        tableFilters={props.tableFilters}
      />
    </Stack>
  );
  return (
    <>
      {/* Outer table header  */}
      <StackRowBetween sx={{ padding: "8px 6px", ...outerHeaderStyles }}>
        {title ? <FlatironTableTitle title={tableTitle} /> : null}
        {headerContent ? headerContent : rowNumSelect_and_pager__row}
      </StackRowBetween>
      <FlatironTable>
        {/* Gray Header  */}
        <FlatironTableOuterHeader>
          <Stack direction={"row"} spacing={2} sx={{ width: "100%" }}>
            <TableSearchInput
              value={globalFilter || ""}
              onChange={(e) => setGlobalFilter(e.target.value)}
              preGlobalFilteredRows={preGlobalFilteredRows}
              rows={rows}
            />
            {headerContent ? rowNumSelect_and_pager__row : null}
          </Stack>
        </FlatironTableOuterHeader>
        <div className="doc-group-table-card__body table-and-filter-outer-wrapper">
          <Card sx={{ overflow: "unset" }} id="table-card">
            <table {...getTableProps()}>
              <thead>
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th {...column.getHeaderProps()}>
                        {column.render("Header")}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {page.map((row, i) => {
                  prepareRow(row);
                  return (
                    <tr
                      style={{ cursor: onRowClick ? "pointer" : "unset" }}
                      onClick={
                        onRowClick ? () => onRowClick(row.original) : null
                      }
                      // onClick={() => console.log(row.original)}
                      {...row.getRowProps()}
                    >
                      {row.cells.map((cell) => {
                        return (
                          <td {...cell.getCellProps()}>
                            {isLoading ? (
                              <Skeleton width={"60%"} />
                            ) : cell.value === undefined ||
                              cell.value === "" ? (
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
    </>
  );
}

const SearchableReactTable = ({
  columns,
  data,
  title,
  hideTitleCount,
  hidePagination,
  isLoading,
  headerContent,
  outerHeaderStyles,
  onRowClick,
}) => {
  return (
    <Table
      columns={columns}
      data={isLoading ? makeEmptyArray(50) : data}
      title={title}
      isLoading={isLoading}
      hideTitleCount={hideTitleCount}
      hidePagination={hidePagination}
      onRowClick={onRowClick}
      headerContent={headerContent}
      outerHeaderStyles={outerHeaderStyles}
    />
  );
};

export default SearchableReactTable;
