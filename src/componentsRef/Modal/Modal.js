import * as React from "react";

import ReactDOM from "react-dom";

import { CSSTransition } from "react-transition-group";
import Backdrop from "../Backdrop";

import "./Modal.css";

const ModalOverlay = (props) => {
  const modalRef = React.useRef(null);

  const {
    hideCloseButton,
    className,
    style,
    onCancel,
    contentClass,

    footerClass,
  } = props;

  const onScrollHandler = () => {
    // if (modalRef.current) {
    //   const {  scrollHeight, clientHeight } = modalRef.current;
    //   // console.log("---------");
    //   // console.log("scrollTop: ", scrollTop);
    //   // console.log("scrollHeight: ", scrollHeight);
    //   // console.log("clientHeight: ", clientHeight);
    //   if (scrollHeight - clientHeight <= 50) {
    //     setIsAtBottom(true);
    //     return;
    //   }
    //   if (scrollTop + clientHeight === scrollHeight) {
    //     console.log("reached bottom");
    //     setIsAtBottom(true);
    //   } else {
    //     setIsAtBottom(false);
    //   }
    // }
  };

  //Content

  const content = (
    <div
      ref={modalRef}
      onScroll={onScrollHandler}
      id={props.id}
      className={`modal ${className}`}
      style={{ width: props.noMaxWidth ? "inherit" : "96%", ...style }}
    >
      <div
        style={{
          borderWidth: props.hideHeaderBorder ? 0 : "1px",
          ...props.headerStyles,
        }}
        className={`modal__header ${
          (props.headerContent ||
            props.headerTitle ||
            props.headerDescription) &&
          "header-styles"
        }`}
      >
        {!hideCloseButton && (
          <button type="button" onClick={onCancel} className="cancel">
            {timesIcon}
          </button>
        )}
        {props.headerContent}
        <h2>{props.headerTitle}</h2>
        <p>{props.headerDescription}</p>
      </div>

      <div className={`modal__content ${contentClass}`}>{props.children}</div>
      <footer className={`modal__footer ${footerClass}`}>
        {/* {ScrollDownArrow} */}
      </footer>
      {/* {footer && (
        <footer className={`modal__footer ${footerClass}`}>{footer}</footer>
      )} */}
    </div>
  );
  React.useEffect(() => {
    onScrollHandler();
  }, []);
  return ReactDOM.createPortal(
    content,
    document.getElementById(props.portal ? props.portal : "modal-hook")
  );
};

const Modal = (props) => {
  const { show, onCancel, noBackdropClick } = props;

  return (
    <React.Fragment>
      {show && (
        <Backdrop
          portal={props.portal}
          white={props.white}
          onClick={noBackdropClick ? undefined : onCancel}
        />
      )}
      <CSSTransition
        in={show}
        timeout={200}
        classNames="fade-in"
        mountOnEnter
        unmountOnExit
      >
        <ModalOverlay {...props} />
      </CSSTransition>
    </React.Fragment>
  );
};

export default Modal;
const timesIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);
