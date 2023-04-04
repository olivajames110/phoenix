import { Stack } from "@mui/system";
import React from "react";

export const StackRow = (props) => {
  return (
    <Stack
      spacing={props.spacing}
      direction={"row"}
      flexWrap={"wrap"}
      sx={props.sx}
    >
      {props.children}
    </Stack>
  );
};
export const StackRowAround = (props) => {
  return (
    <Stack
      spacing={props.spacing}
      direction={"row"}
      flexWrap={"wrap"}
      justifyContent={"space-around"}
      alignItems={"center"}
      sx={props.sx}
    >
      {props.children}
    </Stack>
  );
};

export const StackRowBetween = (props) => {
  return (
    <Stack
      spacing={props.spacing}
      direction={"row"}
      flexWrap={"wrap"}
      justifyContent={"space-between"}
      alignItems={"center"}
      sx={props.sx}
    >
      {props.children}
    </Stack>
  );
};

export const StackRowEnd = (props) => {
  return (
    <Stack
      spacing={props.spacing}
      direction={"row"}
      flexWrap={"wrap"}
      justifyContent={"flex-end"}
      alignItems={"center"}
      sx={props.sx}
    >
      {props.children}
    </Stack>
  );
};

export const StackColumn = (props) => {
  return (
    <Stack spacing={props.spacing} direction={"column"} sx={props.sx}>
      {props.children}
    </Stack>
  );
};
export const StackColumnAround = (props) => {
  return (
    <Stack
      spacing={props.spacing}
      direction={"column"}
      justifyContent={"space-around"}
      alignItems={"center"}
      sx={props.sx}
    >
      {props.children}
    </Stack>
  );
};
export const StackColumnBetween = (props) => {
  return (
    <Stack
      spacing={props.spacing}
      direction={"column"}
      justifyContent={"space-between"}
      alignItems={"center"}
      sx={props.sx}
    >
      {props.children}
    </Stack>
  );
};

export const StackBetween = (props) => {
  return (
    <Stack
      spacing={props.spacing}
      direction={"row"}
      flexWrap={"wrap"}
      justifyContent={"space-between"}
      alignItems={"center"}
      sx={props.sx}
    >
      {props.children}
    </Stack>
  );
};

// export default StackRow;
