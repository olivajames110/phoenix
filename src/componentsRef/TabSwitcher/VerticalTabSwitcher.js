import React, { useEffect } from "react";

import { Add } from "@mui/icons-material";
import { Box, Tab, Tabs, Tooltip } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

import "./TabSwitcher.css";

const VerticalTabSwitcher = (props) => {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (props.setValue) {
      props.setValue(newValue);
    }

    if (props.link) {
      navigate(event.target.id);
    }
  };

  useEffect(() => {
    if (props.value) {
      setValue(props.value);
    }
  }, [props.value]);

  useEffect(() => {
    if (props.link) {
      let url = location.pathname;
      let last = url.split("/").pop();

      let index = props.tabs.findIndex((t) => t.to === last);

      if (index < 0) {
        setValue(0);
        return;
      }
      setValue(index);
    }
  }, [location]);

  return (
    <Box
      id={props.id}
      className={`tab-switcher ${props.sub && "sub"}`}
      sx={{
        position: "sticky",
        top: 0,
        marginTop: props.borderTop ? "10px" : 0,
        borderTop: 0,
        borderBottom: 0,
        borderColor: "divider",
        ...props.sx,
        // width: "110px",
      }}
    >
      <Tabs
        sx={{ width: "100%" }}
        value={value}
        orientation={"vertical"}
        // sx={{ alignItems: "flex-start" }}
        onChange={handleChange}
        variant="scrollable"
        aria-label="basic tabs example"
        indicatorColor="secondary"
      >
        {props.tabs?.map((t) => {
          return props.link ? (
            <Tab
              sx={{
                paddingRight: "30px !important",
                textAlign: "left",
                // alignItems: "flex-start",
                alignItems: "center",
                justifyContent: "flex-start !important",
                whiteSpace: "nowrap",
              }}
              id={t.to}
              key={t.label}
              label={t.label}
              icon={t.icon}
              iconPosition="start"
            />
          ) : (
            <Tab
              sx={{
                paddingRight: "10px",
              }}
              key={t}
              label={t}
            />
          );
        })}
        {props.addNewOnClick && (
          <Tooltip placement="top" title="Add New">
            <Tab onClick={props.addNewOnClick} id="add-new" label={<Add />} />
          </Tooltip>
        )}
      </Tabs>
    </Box>
  );
};

export default VerticalTabSwitcher;
