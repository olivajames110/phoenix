import { Pagination } from "@mui/material";
import React from "react";

import "./TablePagination.css";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import NumTableRowsSelector from "../NumTableRowsSelector";

const TablePagination = (props) => {
  const [page, setPage] = React.useState(1);

  const handleChange = (event, value) => {
    console.log(event, value);
    setPage(value);
    props.onClick(value - 1);
  };

  return (
    <div className="table-pagination-wrapper">
      {!props.hideFilter && (
        <button
          className={`table-filter-toggle ${
            props.showTableFilters && "active"
          }`}
          onClick={props.toggleShowFilters}
        >
          <FilterAltOutlinedIcon />
        </button>
      )}
      {!props.hidePagination && (
        <>
          <NumTableRowsSelector
            items={[50, 75, 100, 200]}
            onChange={props.onRowNumChange}
            data={props.data}
            value={props.value}
          />
          <Pagination
            onChange={handleChange}
            page={page}
            count={props.pageCount}
            siblingCount={1}
          />
        </>
      )}
    </div>
  );
};

export default TablePagination;
