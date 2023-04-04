import { Checkbox } from "@mui/material";
import React from "react";
// import "./TableCheckbox.css";

export const TableCheckbox = React.forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef();
    const resolvedRef = ref || defaultRef;

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate;
      console.log();
    }, [resolvedRef, indeterminate]);

    return (
      <>
        <Checkbox
          sx={{ "& .MuiSvgIcon-root": { fontSize: 14 } }}
          ref={resolvedRef}
          {...rest}
        />
      </>
    );
  }
);
