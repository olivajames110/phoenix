import React from "react";

import ScreenBody from "./Screen/ScreenBody";
import ScreenHeader from "./Screen/ScreenHeader";
import ScreenTitle from "./Screen/ScreenTitle";

const DashboardScreen = (props) => {
  return (
    <>
      {props.headerContent ? props.headerContent : null}
      {props.title && (
        <ScreenHeader
          title={props.title}
          bottomPadding
          headerContent={props.headerContent}
          headerContentFullWidth={props.headerContentFullWidth}
          {...props}
        >
          <ScreenTitle title={props.title} />
        </ScreenHeader>
      )}

      <ScreenBody noBodyPadding={props.noBodyPadding} maxWidth={props.maxWidth}>
        {props.children}
      </ScreenBody>
    </>
  );
};
export default React.memo(DashboardScreen);
