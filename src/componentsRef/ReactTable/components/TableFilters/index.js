import { Chip, FormLabel, Stack } from "@mui/material";
import React from "react";

import "./TableFilters.css";

const TableFilters = (props) => {
  return props.tableFilters?.length >= 1 ? (
    <Stack direction="row" spacing={1} alignItems="center">
      <FormLabel>Filters: </FormLabel>
      {props.tableFilters.map((f) => (
        <Chip
          size="small"
          color="primary"
          variant="outlined"
          sx={{
            fontSize: ".65rem",
          }}
          label={f}
          onDelete={() => props.onDelete(f)}
        />
      ))}
    </Stack>
  ) : null;
};

export default TableFilters;
