import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import { Box } from "@mui/material";
import React from "react";

const SortableTableHeader = (props) => {
  return (
    <thead className="cell-titles">
      {props.headerGroups.map((headerGroup) => (
        //Table header
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
  );
};

export default SortableTableHeader;
