import React from "react";

const BackgroundShape = (props) => {
  const styles = {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    maxWidth: "740px",
    zIndex: "-1",
  };

  return (
    <div style={styles}>
      <svg
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 435.51 526.53"
      >
        <path
          d="M368,1c42.63,308,60.24,423.09,65,441,.24,.92,1.41,5.17,2,11,.65,6.4,3.29,32.39-15,53-1.81,2.04-13.26,14.6-32,19-2.75,.65-11.12,2.39-22,1-22.38-2.87-167.6-33.41-366-77V0C133,0,198,1,368,1Z"
          style={{ fill: "#edf2f5" }}
        />
      </svg>
    </div>
  );
};

export default BackgroundShape;
