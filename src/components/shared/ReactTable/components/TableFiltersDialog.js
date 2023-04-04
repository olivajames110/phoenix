import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Stack,
} from "@mui/material";

import React, { useState } from "react";
import {
  loanProductTypeOptions,
  loanPurposeOptions,
  loanStatus,
} from "../../../../forms/_formQuestions/selectOptions";

import MuiDialog from "../../MuiDialog";

const _ = require("lodash");

const TableFiltersDialog = (props) => {
  const [filters, setFilters] = useState([]);

  const handleChange = (event) => {
    const value = event.target.value;
    let doesExist = _.includes(filters, value);

    if (doesExist) {
      let filteredList = filters.filter((f) => f !== value);

      // let spreadFilters = [...filters, value];
      setFilters(filteredList);
    }

    if (!doesExist) {
      let spreadFilters = [...filters, value];
      setFilters(spreadFilters);
    }
  };

  const handleCancel = () => {
    // setFilters([]);
    props.onClose();
  };

  const handleOnSave = () => {
    props.onSubmit(filters);
    props.onClose();
  };
  const handleOnClear = () => {
    props.onSubmit([]);
    props.onClose();
  };

  React.useEffect(() => {
    if (props.tableFilters !== undefined) {
      setFilters(props.tableFilters);
    }
  }, [props.tableFilters]);
  return (
    <MuiDialog
      title={"Table Filters"}
      show={props.show}
      maxWidth={"md"}
      headerAction={<Button onClick={handleOnClear}>Clear Filters</Button>}
      paperWidth={"60%"}
      onClose={handleCancel}
      onSubmit={handleOnSave}
    >
      <Stack direction={"row"} justifyContent="space-between" spacing={2}>
        <FormGroup>
          <FormLabel id="filter-loan-status">Loan Status</FormLabel>
          <FormControl>
            {loanStatus.map((value) => (
              <FormControlLabel
                value={value}
                key={value}
                sx={{ paddingLeft: "10px" }}
                control={
                  <Checkbox
                    id="Status"
                    checked={_.includes(filters, value)}
                    onChange={handleChange}
                    name={value}
                  />
                }
                label={value}
              />
            ))}
          </FormControl>
        </FormGroup>
        <FormGroup>
          <FormLabel id="filter-loan-status">Purpose</FormLabel>
          <FormControl>
            {loanPurposeOptions.map((value) => (
              <FormControlLabel
                value={value}
                key={value}
                sx={{ paddingLeft: "10px" }}
                control={
                  <Checkbox
                    id="Purpose"
                    checked={_.includes(filters, value)}
                    onChange={handleChange}
                    name={value}
                  />
                }
                label={value}
              />
            ))}
          </FormControl>
        </FormGroup>
        <FormGroup>
          <FormLabel id="filter-loan-status">Product Type</FormLabel>
          <FormControl>
            {loanProductTypeOptions.map((value) => (
              <FormControlLabel
                value={value}
                id="Product"
                key={value}
                sx={{ paddingLeft: "10px" }}
                control={
                  <Checkbox
                    checked={_.includes(filters, value)}
                    onChange={handleChange}
                    name={value}
                  />
                }
                label={value}
              />
            ))}
          </FormControl>
        </FormGroup>
      </Stack>
    </MuiDialog>
  );
};

// const old = (
//   <Dialog
//     id="status-dialog"
//     sx={{ "& .MuiDialog-paper": { width: "80%" } }}
//     maxWidth="xs"
//     // TransitionProps={{ onEntering: handleEntering }}
//     open={props.statusOpen}
//     // {...other}
//   >
//     <DialogTitle>Change Loan Status</DialogTitle>
//     <DialogContent dividers></DialogContent>
//     <DialogActions>
//       <Button autoFocus onClick={handleCancel}>
//         Cancel
//       </Button>
//       <Button
//         id="submit"
//         className={value === props.loanStatus ? "" : "active"}
//         onClick={handleOnSave}
//       >
//         Save Status
//       </Button>
//     </DialogActions>
//   </Dialog>
// );

export default TableFiltersDialog;
