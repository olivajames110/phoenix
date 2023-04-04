import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";
import SearchIcon from "@mui/icons-material/Search";
import "./TableSearchInput.css";
import { InputAdornment, TextField } from "@mui/material";

const TableSearchInput = ({ onChange, value, rows, preGlobalFilteredRows }) => {
  const count = preGlobalFilteredRows.length;
  return (
    <div className="table-search-wrapper">
      <TextField
        id="table-search"
        fullWidth
        value={value || ""}
        onChange={onChange}
        placeholder={`Search`}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />

      {rows.length < count && (
        <div className="currently-showing">
          Showing: <b>{rows.length}</b> of {count}
        </div>
      )}
    </div>
  );
};

export default TableSearchInput;
