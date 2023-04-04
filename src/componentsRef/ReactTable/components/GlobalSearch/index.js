import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";
import SearchIcon from "@mui/icons-material/Search";
import "./GlobalSearch.css";
import { InputAdornment, TextField } from "@mui/material";

const GlobalSearch = ({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
  rows,
  visibleRows,
}) => {
  const TWO_HUNDRED_MS = 200;
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, TWO_HUNDRED_MS);
  return (
    <div className="global-search-wrapper">
      <TextField
        id="global-search"
        fullWidth
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
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

export default GlobalSearch;
