import React, { useEffect, useState } from "react";
import { useRowSelect, useSortBy, useTable } from "react-table";

import { Download, MoveUp } from "@mui/icons-material";
import {
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Toolbar,
} from "@mui/material";
import { useSelector } from "react-redux";
import { docGroupTypes } from "../../../forms/_formQuestions/selectOptions";
import { parseCamelCaseToCapitalCase } from "../../../helpers/parseCamelCaseToCapitalCase";
import Modal from "../Modal/Modal";
// import "./ReactTable.css";

const IndeterminateCheckbox = React.forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef();
    const resolvedRef = ref || defaultRef;

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate;
      console.log();
    }, [resolvedRef, indeterminate]);

    return (
      <>
        <Checkbox
          sx={{ "& .MuiSvgIcon-root": { fontSize: 18 } }}
          ref={resolvedRef}
          {...rest}
        />
      </>
    );
  }
);

const ReactSelectableTable = ({ columns, data, ...props }) => {
  const formState = useSelector((state) => state.formState);
  const [value, setValue] = useState(null);
  const [showSuccess, setShowSuccess] = useState(null);
  const [changeCategoryIsActive, setChangeCategoryIsActive] = useState(false);

  const handleBulkDownload = () => {
    selectedFlatRows.map((r) => {
      console.log(r.original);
      props.handleDocumentFileDownload(r.original);
    });
  };

  const handleBulkDocGroupChange = (docGroup) => {
    selectedFlatRows.map((r) => {
      console.log(r.original);
      let id = r.original._id;
      props.handleDocumentGroupChange(id, docGroup);
    });
    setChangeCategoryIsActive(false);
  };

  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    selectedFlatRows,
    state: { selectedRowIds },
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        // Column for selection
        {
          id: "selection",
          // The header can use the table's getToggleAllRowsSelectedProps method
          // to render a checkbox
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <div>
              <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
            </div>
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ]);
    }
  );

  useEffect(() => {
    console.log("selectedFlatRows", selectedFlatRows);
    console.log("selectedRowIds", selectedRowIds);
  }, [selectedRowIds, selectedFlatRows]);

  // Render the UI for your table
  return (
    <>
      <Modal
        id="document-edit-modal"
        onCancel={() => setChangeCategoryIsActive(false)}
        show={changeCategoryIsActive}
      >
        <div className={`popover-inner-wrapper ${showSuccess && "success"}`}>
          <h3>Change Category</h3>
          <div className="current-file-name">
            <span>
              {showSuccess
                ? "File category successfully changed!"
                : "Current Group:"}
            </span>
            {!showSuccess && (
              <span className="current-name">
                {/* {toCamelCase(props.file.docGroup)} */}
              </span>
            )}
          </div>

          {!showSuccess && (
            <>
              <section className="input-field">
                <FormControl fullWidth size="small" variant="filled">
                  <InputLabel
                    // sx={{ fontSize: ".8rem", fontWeight: 600, opacity: ".6" }}
                    size="small"
                    htmlFor={"doc-group"}
                  >
                    New Document Group
                  </InputLabel>

                  <Select
                    id="popover-select"
                    labelId={"doc-group"}
                    size="small"
                    variant="filled"
                    fullWidth
                    value={value}
                    label="New Category"
                    onChange={(e) => setValue(e.target.value)}
                  >
                    {docGroupTypes.map((i) => (
                      <MenuItem value={i.name}>{i.label}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <div className="button-wrapper">
                  <button
                    onClick={() => handleBulkDocGroupChange(value)}
                    className="btn-blue "
                  >
                    Update Groups
                  </button>
                </div>
              </section>
            </>
          )}
        </div>
      </Modal>
      <div className="react-table-wrapper">
        <div id="table-header-toolbar">
          <div className="total-files">
            <h3>
              {parseCamelCaseToCapitalCase(props.docGroup)} ({data.length})
            </h3>
          </div>
          <div className="button-wrapper">
            <button
              onClick={() => props.getUserDocumentsZip()}
              // onClick={() => handleBulkActionSubmit({ docGroup: value })}
              // className="btn-blue "
            >
              <Download />
              <span>Download All as zip</span>
            </button>
          </div>
        </div>
        <table id={props.id} className="table" {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " 🔽"
                          : " 🔼"
                        : ""}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.slice(0, 10).map((row, i) => {
              prepareRow(row);
              return (
                <tr
                  className={`${selectedRowIds[i] === true && "selected"}`}
                  {...row.getRowProps()}
                >
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        {selectedFlatRows.length >= 1 && (
          <Toolbar className="bulk-actions-toolbar">
            <div className="num-items-selected">
              <div className="value center">{selectedFlatRows.length}</div>
              <span>Selected</span>
            </div>
            <div className="actions-container">
              <div className="button-wrapper">
                <button onClick={() => handleBulkDownload()}>
                  <Download />
                  <span>Download ({selectedFlatRows.length})</span>
                </button>
              </div>
              {/* <div className="button-wrapper">
                <button>
                  <Visibility />
                  <span>Mark Hidden</span>
                </button>
              </div>
              <div className="button-wrapper">
                <button>
                  <VisibilityOff />
                  <span>Mark Visible</span>
                </button>
              </div> */}
              <div className="button-wrapper">
                <button onClick={() => setChangeCategoryIsActive(true)}>
                  <MoveUp />
                  <span>Change Doc Group</span>
                </button>
              </div>
            </div>
          </Toolbar>
        )}
      </div>
    </>
  );
};
export default ReactSelectableTable;
