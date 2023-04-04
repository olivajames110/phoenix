import React, { useEffect } from "react";

import { Add } from "@mui/icons-material";
import { Box, Tab, Tabs, tabsClasses, Tooltip } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

import "./TabSwitcher.css";

const TabSwitcher = (props) => {
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
        marginTop: props.borderTop ? "10px" : 0,
        borderTop: props.noBorder || !props.borderTop ? 0 : 1,
        borderBottom: props.noBorder ? 0 : 1,
        borderColor: "divider",
        ...props.sx,
      }}
    >
      <Tabs
        value={value}
        scrollButtons="auto"
        orientation={props.vertical ? "vertical" : "horizontal"}
        sx={{
          alignItems: props.vertical ? "flex-start" : "center",
          [`& .${tabsClasses.scrollButtons}`]: {
            boxShadow: "0 0 7px 0px #00000038",
            width: "24px",
            "&.Mui-disabled": {
              opacity: 0.3,
              // width: "24px",
              boxShadow: "none",
            },
          },
        }}
        onChange={handleChange}
        variant="scrollable"
        aria-label="basic tabs example"
        indicatorColor="secondary"
      >
        {props.tabs?.map((t) => {
          return props.link ? (
            <Tab
              sx={{
                paddingRight: props.vertical ? "10px" : "0",
              }}
              id={t.to}
              key={t.label}
              label={t.label}
            />
          ) : (
            <Tab
              sx={{
                paddingRight: props.vertical ? "10px" : "0",
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

export default TabSwitcher;
