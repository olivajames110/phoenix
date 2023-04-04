import React from "react";
import {
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { isNil } from "lodash";
import { getObjectValueFromStringPath } from "../../../helpers/getObjectValueFromStringPath";
import { useMemo } from "react";
import { makeStyles } from "@mui/styles";

const MuiTable = ({ data, columns, cellReturnValue }) => {
  const memo__columns = useMemo(() => columns, [columns]);
  const memo__data = useMemo(() => data, [data]);

  const useStyles = makeStyles({
    table: {
      // minWidth: 650,
      "& .MuiTableCell-root": {
        // border: " 1px solid  rgba(224, 224, 224, 1)",
        padding: "6px 10px",
        // borderLeft: "1px solid rgba(224, 224, 224, 1)",
      },
    },
  });
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table
        className={classes.table}
        sx={{ minWidth: 650 }}
        size="small"
        aria-label="a dense table"
      >
        <TableHead>
          <DynamicTableRow>
            {memo__columns.map((column) => (
              <TableCell
                component="th"
                sx={{ fontWeight: "600", fontSize: ".7rem", opacity: 0.65 }}
              >
                {column.Header}
              </TableCell>
            ))}
          </DynamicTableRow>
        </TableHead>
        <TableBody>
          {memo__data.map((row) => {
            const isTotal = row?.isTotal;
            return (
              <DynamicTableRow key={row.name} isTotal={isTotal}>
                {memo__columns.map((column) => (
                  <DynamicTableCell
                    row={row}
                    column={column}
                    cellReturnValue={cellReturnValue}
                    isTotal={isTotal}
                  />
                ))}
              </DynamicTableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const DynamicTableRow = ({ isTotal, children }) => {
  const defaultStyles = {
    "td:first-child , td:last-child": { borderLeft: 0, borderRight: 0 },
  };
  // const defaultStyles = { " &:first-child th": { border: 0 } };
  // const defaultStyles = { "&:first-child td, &:first-child th": { border: 0 } };
  const styles = {
    default: {
      ...defaultStyles,
      position: "relative",
    },
    isTotal: {
      ...defaultStyles,
      borderTop: "3px solid #23568538",
    },
  };
  return (
    <TableRow sx={isTotal ? styles.isTotal : styles.default}>
      {children}
    </TableRow>
  );
};

const DynamicTableCell = ({ row, column, cellReturnValue, isTotal }) => {
  const defaultReturn = isNil(cellReturnValue) ? "-" : cellReturnValue;
  const isAccesorCell = isNil(column.accessor) ? false : true;

  const pathValue = getObjectValueFromStringPath(
    row,
    column.path,
    defaultReturn
  );

  const cellValue = isNil(column.value) ? pathValue : column.value;

  const isEmptyCell = cellValue === "-" ? true : false;
  const isTotalCell = !isEmptyCell && isTotal ? true : false;

  const getAccessorValue = () => {
    if (isNil(column.accessor)) {
      return defaultReturn;
    }

    if (cellValue === defaultReturn) {
      return defaultReturn;
    }

    return column.accessor(cellValue);
  };

  const accesorValue = getAccessorValue();

  const defaultStyles = {
    "&:first-child td": { background: "red", border: 0 },
    fontSize: ".7rem",
  };

  const styles = {
    default: {
      border: " 1px solid  rgba(224, 224, 224, 1)",
      ...defaultStyles,
      borderBottom: "none",
    },
    isTotal: {
      // border: "none",
      ...defaultStyles,
      background: "#93cafb17",
      border: " 1px solid  #d6d3d3",
      // border: "1px solid #ffffff",
    },
  };

  const populatedCell = !isAccesorCell ? cellValue : accesorValue;
  const returnedCellValue = isEmptyCell && isTotal ? "" : populatedCell;

  return (
    <TableCell sx={isTotal ? styles.isTotal : styles.default}>
      {returnedCellValue}
    </TableCell>
  );
};

export default MuiTable;
