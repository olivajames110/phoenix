import { blue, blueGrey, green, purple } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const inputTheme = createTheme({
  palette: {
    primary: {
      // main: blueGrey[800],
      // main: blue[1000],
      main: "#CC4100",
      // main: "#FD4F00",
      // main: "#153450",
    },
    secondary: {
      // main: blueGrey[800],
      main: blue[700],
      // main: "#235685",
      // main: "#153450",
    },

    success: {
      main: green[800],
      // main: "#153450",
    },
  },
  typography: {
    // htmlFontSize: 10,
    htmlFontSize: ".8rem",
    fontFamily: '"Inter", sans-serif',
    h1: {
      // fontWeight: 600,
      fontSize: "1.4rem",
      fontFamily: '"Montserrat", sans-serif',
    },
    h2: {
      // fontWeight: 600,
      fontFamily: '"Montserrat", sans-serif',
    },
    h3: {
      // fontWeight: 600,
      fontFamily: '"Montserrat", sans-serif',
    },
    h4: {
      // fontWeight: 600,
      fontFamily: '"Montserrat", sans-serif',
    },
  },

  components: {
    // Name of the component

    MuiFilledInput: {
      styleOverrides: {
        root: {
          // paddingTop: "0",
          "&:before": {
            // borderRadius: "0px",
            borderRadius: "4px",
            borderColor: "transparent",
          },
          "&:hover": {
            borderRadius: "4px",
            // borderColor: "transparent",
            "&:before": {
              borderRadius: "4px",
              // borderColor: "transparent",
            },
          },
        },
        textarea: {
          background: "#ffffff",
          border: "1px solid",
          borderRadius: "4px",
          padding: 0,
          color: "var(--black)",
        },
        // underline: {
        //   "&:before": {
        //     borderRadius: "4px",
        //     borderColor: "transparent",
        //   },
        //   "&:after": {
        //     borderRadius: "4px",
        //     borderColor: "transparent",
        //   },
        // },
      },
      "&:before": {
        borderRadius: "2px",
        // borderRadius: "0px",
        borderColor: "transparent",
      },
      "&:after": {
        borderRadius: "2px",
        // borderRadius: "0px",
        borderColor: "transparent",
      },
    },

    //Input
    MuiInputBase: {
      styleOverrides: {
        root: {
          border: "1px solid",
          borderRadius: "4px",
          borderColor: "hsl(0, 0%, 80%)",
          color: "var(--black)",
          background: "#ffffff !important",
          // paddingTop: "18px",
        },
        input: {
          borderRadius: "4px",
        },
      },
    },

    //Input Label
    MuiFormLabel: {
      styleOverrides: {
        root: {
          top: "3px !important",
        },
      },
    },

    //Helper Text
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: ".75rem",
          opacity: ".95",
        },
      },
    },

    //Label
    MuiInputLabel: {
      styleOverrides: {
        root: {
          opacity: ".8",
          // lineHeight: "2em",
        },
      },
    },

    //Popover
    MuiPopover: {
      // styleOverrides: {
      //   paper: {
      //     boxShadow: "0 0 3px 2px #0000001a, 0 2px 3px 0px #0000001a",
      //   },
      // },
    },

    //Page Tab
    MuiTab: {
      styleOverrides: {
        root: {
          minWidth: "70px",

          selected: {
            fontWeight: "bold",
            // color: "red",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: "600",
          textTransform: "initial",
          boxShadow: "none",
        },
      },
    },

    //Card
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 2px 1px;",
          // boxShadow: "rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;",
        },
      },
    },

    //Backdropo
    MuiDialog: {
      MuiBackdrop: {
        styleOverrides: {
          root: {
            MuiBackdrop: {
              backgroundColor: "rgba(9, 30, 66, 0.54)",
            },
          },
        },
      },
    },
  },
});
