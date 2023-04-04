import React, { useState } from "react";
import TabSwitcher from "../shared/TabSwitcher";
import VerticalTabSwitcher from "../shared/TabSwitcher/VerticalTabSwitcher";

const DrilldownTabSwitcher = ({ tabs }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const showVerticalNav = screenWidth <= 1400 ? true : false;

  React.useEffect(() => {
    function handleResize() {
      console.log("ch", window.innerWidth);
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  });
  const tabs_vertical = <VerticalTabSwitcher id="primary" link tabs={tabs} />;

  const tabs_horizontal = (
    <TabSwitcher
      id="primary"
      link
      sx={{
        borderBottom: "2px solid",
        position: "sticky",
        top: "0",
        zIndex: "11",
        background: "white",
      }}
      tabs={tabs}
    />
  );

  return showVerticalNav ? tabs_vertical : tabs_horizontal;
};

export default DrilldownTabSwitcher;
