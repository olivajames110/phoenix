import { Delete } from "@mui/icons-material";
import { Chip } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const MuiChip = ({ label, onDelete }) => {
  const useStyles = makeStyles(() => ({
    chipCustom: {
      "& .MuiChip-label": {
        fontSize: ".75rem",

        // color: "#ffffff",
        fontWeight: "400 !important",
      }, // sub-selector
    },
  }));
  const customChipClass = useStyles();
  return (
    <Chip
      sx={{ width: "fit-content" }}
      onDelete={onDelete}
      className={customChipClass.chipCustom}
      size="small"
      color="secondary"
      variant="outlined"
      label={label}
      deleteIcon={<Delete />}
    />
  );
};

export default MuiChip;
