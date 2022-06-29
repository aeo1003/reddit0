import { createTheme } from "@mui/material/styles";

const baseTheme = createTheme({
  palette: {
    primary: {
      main: "#af52bf"
    },
    secondary: {
      main: "#9500ae"
    }
  },
  shape: {
    borderRadius: 4
  },
  components: {
    MuiButton: {
      defaultProps: {
        sx: {
          margin: 1
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        // root: {
        //   background: "#44de89"
        // }
      },
      defaultProps: {
        elevation: 5
      }
    }
  }
});

export default baseTheme;
