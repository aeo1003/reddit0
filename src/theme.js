import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    palette: {
        primary: {
          main: "#aaa"
        },
        secondary: {
          main: "#9500ae"
        }
      },
    body: '#f6f',
    fontColor: '#222',

    components: {     
      MuiPaper: {
        styleOverrides: {
          root: {
            background: '#cacaca'
          }
        }
      },
      MuiCard: {
        styleOverrides: {
            root: {
              background: '#aaa'
            }
          }
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            color: '#222'
          }
        }
      },
      
      MuiIcon: {
        styleOverrides: {
            root: {
              color: '#222'
            }
        }
      },
      MuiDivider: {
        styleOverrides: {
            root: {
                background: '#ddd',
            }
        }
      }
    }
};




export const darkTheme = {
    palette: {
        primary: {
          main: '#555'
        },
        secondary: {
          main: "#9500ae"
        }
      },
      body:'#888',
    components: {     
      MuiPaper: {
        styleOverrides: {
          root: {
            background: '#333'
          }
        }
      },
      MuiCard: {
        styleOverrides: {
            root: {
              background: '#666'
            }
          }
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            color: '#eee'
          }
        }
      },
      MuiIconButton: {
        styleOverrides: {
            root: {
              color: '#fff'
            }
        }
      },
      MuiIcon: {
        styleOverrides: {
            root: {
              color: '#fff'
            }
        }
      },
      MuiDivider: {
        styleOverrides: {
            root: {
                background: '#F2F4A6',
            }
        }
      }
    }
};
// background-color: $((props) => props.theme.body)
export const GlobalStyles = createGlobalStyle`
    body {
      background-color: $((props) => props.theme.body)
    }
`;

