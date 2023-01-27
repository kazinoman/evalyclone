import { createTheme } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: "#000",
      light: "#F8F9FD",
    },
    secondary: {
      main: green[500],
    },
  },
  typography: {
    fontFamily: ["Noto Sans", "sans-serif"].join(","),
  },
});
