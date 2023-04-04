import { AddRounded, AttachMoney } from "@mui/icons-material";
import { Button, ListItemIcon, Menu, MenuItem, Paper } from "@mui/material";
import { propsToClassKey } from "@mui/styles";
import { Box } from "@mui/system";
import React, { useState } from "react";

const DropdownButton = ({ label, items }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handlePopoverOpen = (event) => {
    if (!open) {
      setAnchorEl(event.currentTarget);
    }
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Button
        onClick={handlePopoverOpen}
        variant="contained"
        sx={{ padding: "4px 10px" }}
        endIcon={<AddRounded />}
      >
        {label}
      </Button>
      <Paper>
        <Menu
          id="button-dropdown-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handlePopoverClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          // onMouseLeave={handlePopoverClose}
        >
          <Box onClick={handlePopoverClose}>
            {items.map((item, i) => {
              return (
                <MenuItem onClick={item.onClick}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <p>{item.label}</p>
                </MenuItem>
              );
            })}
          </Box>
        </Menu>
      </Paper>
    </Box>
  );
};

export default DropdownButton;
