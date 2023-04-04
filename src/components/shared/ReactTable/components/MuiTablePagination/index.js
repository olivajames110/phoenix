import { Pagination } from "@mui/material";
import React from "react";
import "./MuiTablePagination.css";

const MuiTablePagination = (props) => {
  const [page, setPage] = React.useState(1);

  const handleChange = (event, value) => {
    setPage(value);
    props.onClick(value - 1);
  };
  return (
    <Pagination
      sx={props.sx}
      className="mui-table-pagination-wrapper"
      onChange={handleChange}
      page={page}
      count={props.pageCount}
      siblingCount={1}
    />
  );
};

export default MuiTablePagination;
