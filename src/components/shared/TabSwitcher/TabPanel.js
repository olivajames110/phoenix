import React from "react";

const TabPanel = (props) => {
  const { children, value, index, title, ...other } = props;
  // useEffect(() => {
  //   props.setTitle(title);
  // }, [props]);
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      className={`tab-panel ${props.sub && "sub"} ${props.className}`}
    >
      {value === index && (
        <div
          style={{ padding: props.padding ? "20px 0" : "0" }}
          className="tab-panel-body"
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default TabPanel;
