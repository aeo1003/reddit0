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
     
    
      MuiAppBar: {
        styleOverrides: {
            colorInherit: {
                backgroundColor: "#ddd",
                //color: "#f00"
            },
        },
        defaultProps: {
            color: "inherit",
        },
      },

      MuiTypography: {
        styleOverrides: {
            root: {
              color: '#002'              
            }
          }        
    },

      MuiCard: {
        styleOverrides: {
            colorInherit: {
                backgroundColor: "#444",
                border: 'none'
            },
        },
        defaultProps: {
            color: "inherit",
        },
      },

      MuiIconButton: {
        styleOverrides: {
            colorInherit: {                
                color: "#222"
            },
        },
        defaultProps: {
            color: "inherit",
        },
      },
      
    
      MuiPaper: {
        styleOverrides: {
          root: {
            background: "#eee"
          }
        },
        defaultProps: {
          elevation: 6
        }
      }
    }
  };




  export const navbarDark = {
    palette: {
      primary: {
        main: "#1769aa"
      },
      secondary: {
        main: "#00b0ff"
      }
    },
    components: {
     
    
      MuiAppBar: {
        styleOverrides: {
            colorInherit: {
                backgroundColor: "#4a4a4a",
                //color: "#f00"
            },
        },
        defaultProps: {
            color: "inherit",
        },
      },



      MuiTypography: {
        styleOverrides: {
            root: {
              color: '#eee'              
            }
          }        
    },



      MuiCard: {
        styleOverrides: {
            colorInherit: {
                backgroundColor: "#4a4a4a",
                border: 'none'
            },
        },
        defaultProps: {
            color: "inherit",
        },
      },



      MuiIconButton: {
        styleOverrides: {
            colorInherit: {                
                color: "#ccc"
            },
        },
        defaultProps: {
            color: "inherit",
        }
      },



       MuiIcon: {
        styleOverrides: {
            root: {
              // background: "#aabbccdd"
              color: '#F2F4A6'
            }
        }
      },
      
    
      MuiPaper: {
        styleOverrides: {
          root: {
            background: "#222"
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
      mode: 'light',
      primary: {
        main: "#deedaa"
      },
      secondary: {
        main: "#aef0f0"
      }
    },
    components: {
     
      MuiCard: {
        styleOverrides: {
            root: {
             // background: "#aabbccdd"
              background: '#bbb'
            }
          }
      },
      MuiPaper: {
        styleOverrides: {
            root: {
               background: "#eee"
              // background: '#f2a'
            }
          }
      },
      MuiTypography: {
        styleOverrides: {
            root: {
              // background: "#aabbccdd"
              color: '#222'              
            }
          }        
      },
      MuiIcon: {
        styleOverrides: {
            root: {
              // background: "#aabbccdd"
              color: '#222'
            }
        }
      }
    }
      
  };



  export const postcardsDark = {
    palette: {
      primary: {
        main: "#deedaa"
      },
      secondary: {
        main: "#aef0f0"
      }
    },
    components: {
     
      MuiCard: {
        styleOverrides: {
            root: {
             // background: "#aabbccdd"
              background: '#888'
            }
          }
      },
        MuiTypography: {
          styleOverrides: {
              root: {
               // background: "#aabbccdd"
               color: '#fff'              
              }
            }
          },
         
        MuiPaper: {
          styleOverrides: {
            root: {
            // background: "#aabbccdd"
              background: '#333'
            }
          },
          
          defaultProps: {
            elevation: 6
          }
        },
        MuiIconButton: {
          styleOverrides: {
              root: {
                // background: "#aabbccdd"
                color: '#fff'
              }
          }
        },
        MuiIcon: {
          styleOverrides: {
              root: {
                // background: "#aabbccdd"
                color: '#fff'
              }
          }
        },
        MuiDivider: {
          styleOverrides: {
              root: {
                // background: "#aabbccdd"
             
                  background: '#F2F4A6',
                  
                
              }
          }
        }
      }
  };








  export const mainApp = {
    palette: {
      primary: {
        main: "#1769aa"
      },
      secondary: {
        main: "#00b0ff"
      }
    },
    components: {
     
      MuiPaper: {
        styleOverrides: {
          root: {
           // background: "#aabbccdd"
            background: '#ccc'
          }
        }
      }
    }
  };



  export const mainAppDark = {
    palette: {
      primary: {
        main: "#1769aa"
      },
      secondary: {
        main: "#00b0ff"
      }
    },
    components: {
     
      MuiPaper: {
        styleOverrides: {
          root: {
           // background: "#aabbccdd"
            background: '#333'
          }
        }
      }
    }
  };
  