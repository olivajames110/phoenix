import * as React from "react";
import ReactDOM from "react-dom";

const Backdrop = ({ onClick, white, portal }) => {
  const backdropStyles = {
    position: "fixed",
    left: "0",
    top: "0",
    zIndex: "10000",
    height: "100vh",
    width: "100%",
    backdropFilter: "blur(3px)",
    // z-index: '11',
    background: white ? "#ffffff" : "rgba(8, 8, 8, 0.657)",
  };
  const content = (
    <div
      style={backdropStyles}
      className={`backdrop  `}
      onClick={onClick}
      onKeyDown={onClick}
      aria-label="backdrop"
      role="button"
      tabIndex={0}
    />
  );

  return ReactDOM.createPortal(
    content,
    document.getElementById(
      portal ? `${portal}-backdrop-hook` : "backdrop-hook"
    )
  );
};

export default Backdrop;
