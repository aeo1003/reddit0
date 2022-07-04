import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    palette: {
        primary: {
          main: "#5aa"
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
            background: '#7acaca'
          }
        }
      },
      MuiCard: {
        styleOverrides: {
            root: {
              background: '#93D5F0'
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
          main: '#055'
        },
        secondary: {
          main: "#9500ae"
        }
      },
      body:'#208',
    components: {     
      MuiPaper: {
        styleOverrides: {
          root: {
            background: '#388'
          }
        }
      },
      MuiCard: {
        styleOverrides: {
            root: {
              background: '#166'
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

export const GlobalStyles = createGlobalStyle`
    body {
        background-color: $((props) => props.theme.body)
    }
`;

