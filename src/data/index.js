export const theme1 = `{
    "palette": {
      "primary": {
        "main": "#357a38"
      },
      "secondary": {
        "main": "#00a152"
      }
    },
    "components": {
      "MuiButton": {
        "defaultProps": {
          "disableRipple": true,
          "size": "small",
          "sx": {
            "color": "#393e46"
          }
        }
      },
      "MuiPaper": {
        "defaultProps": {
          "elevation": 10
        },
        "styleOverrides": {
          "root": {
            "background": "lightgray"
          }
        }
      }
    }
  }`;
  
  export const navbar = {
    palette: {
      primary: {
        main: "#1769aa"
      },
      secondary: {
        main: "#00b0ff"
      }
    },
    components: {
      MuiAppbar: {
        defaultProps: {
            size: 'large',
            background: 'skyblue'
        }
    
      },
      MuiButton: {
        defaultProps: {
          disableRipple: true,
          size: "large",
          sx: {
            borderRadius: "10px"
          }
        }
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            background: "#f00"
          }
        },
        defaultProps: {
          elevation: 6
        }
      }
    }
  };


  export const postcards = {
    palette: {
      primary: {
        main: "#deedaa"
      },
      secondary: {
        main: "#aef0f0"
      }
    },
    components: {
      MuiButton: {
        defaultProps: {
          disableRipple: true,
          size: "large",
          sx: {
            borderRadius: "10px"
          }
        }
      },
      MuiCard: {
        styleOverrides: {
            root: {
             // background: "#aabbccdd"
              background: '#fff'
            }
          }
        },
      MuiPaper: {
        styleOverrides: {
          root: {
           // background: "#aabbccdd"
            background: '#dda8e8'
          }
        },
        defaultProps: {
          elevation: 6
        }
      }
    }
  };
  