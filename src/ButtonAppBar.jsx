import * as React from 'react';
import {useState, useEffect, useRef, useContext} from 'react';
// import {createTheme, ThemeProvider, MenuItem, AppBar, Menu, Box,        TextField, Toolbar, Typography, responsiveFontSizes, IconButton, Input} from '@mui/material';

import MenuIcon from "@mui/icons-material/Menu";
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import NightsStayTwoToneIcon from '@mui/icons-material/NightsStayTwoTone';

import useScroll from './useScroll'
import useFetch from './useFetch'
import { Context } from './App';
import { navbar, postcards } from './data'






import "@fontsource/roboto"; // Loading Roboto font. MUI was designed with this font in mind.
import {
  AppBar,
  Toolbar,
  Icon,
  IconButton,
  Menu,
  MenuItem,
  Card,
  CardHeader,
  Switch,
  CardContent,
  Box,
  Container,
  Typography,
  FormGroup,
  FormControlLabel,
  CssBaseline,
} from "@mui/material";

import { createTheme, ThemeProvider } from "@mui/material/styles"

// Define theme settings
const light = {
  palette: {
    mode: "light",
  },
};

const dark = {
  palette: {
    mode: "dark",
  },
};












export default function ButtonAppBar(props) {

// The light theme is used by default
const [isDarkTheme, setIsDarkTheme] = useState(false);

// This function is triggered when the Switch component is toggled
const changeTheme = () => {
  setIsDarkTheme(!isDarkTheme)
  props.onChangeTheme(isDarkTheme)
};






  const refNewSub = useRef()
  const subnames = ['Futurology','Technology','Singularity']

  const [anchorEl, setAnchorEl] = React.useState(false)


  const [anchorSortEl, setAnchorSortEl] = React.useState(false)
  const isMenuOpen = Boolean(anchorEl)
  const isSortMenuOpen = Boolean(anchorSortEl)
  const [newsub, setNewsub] = React.useState('')


  // const [posts, setPosts] = useState([])
  // const [temas, setTemas] = useState([])
  // const [title, setTitle] = useState('')
  
  const [sortedBy, setSortedBy] = useState(null)
  // const theme2 = createTheme()
  // theme2 = responsiveFontSizes(theme2)


  const breakpoints = {
    values: {
      xs: 0,
      sm: 320, // Phone
      md: 768, // Tablet/Laptop
      lg: 1500, // Desktop
      xl: 2000
    }
  }
  
  // const theme = createTheme({
  //   breakpoints,
  //   typography: {
  //     h5: {
  //       fontSize: "1.3rem",
  //       [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
  //         fontSize: "2rem",
  //         fontWeight: "600",
  //         color: "#888"          
  //       }
  //     }
  //   }
  // })


const theme = createTheme({navbar})


  // const theme = createTheme({
  //   components: {
  //     MuiTypography: {
  //       variants: [
  //         {
  //           props: {
  //             variant: 'body3'
  //           },
  //           style: {
  //             fontSize: '0.8rem',
  //             fontWeight: 'lighter',
  //             color: '#222'
  //           }
  //         }
  //       ]
  //     }
  //     }  
  //   })

  
  useEffect(() => {
    props.onChange(newsub)
    setSortedBy(null)
  },[newsub])
  

  useEffect(() => {
    setAnchorSortEl(null)
    //stopImmediatePropagation
    props.onChangeSort(sortedBy)
  }, [sortedBy])



  const { y, x, scrollDirection } = useScroll();  

  const styles = {
    active: {
      color: 'rgba(20,20,20, 0.5)',
    //  backgroundColor: '#6FFCAA',
      visibility: "visible",
      transition: "all 0.5s"
    },
    hidden: {
      backgroundColor: 'lightgray)',
      visibility: "hidden",      
      transition: "all 0.5s",
      transform: "translateY(-100%)"
    }
  }

  const stopImmediatePropagation = (e) => {
    e.stopPropagation();
    e.preventDefault();
  }

const handleClickSortedBy = (e,t) => {
  stopImmediatePropagation(e)
  setAnchorSortEl(null)
  setSortedBy(t)
}


  const handleMenuClose = (e) => {
    stopImmediatePropagation(e)
    setAnchorEl(null)
      setNewsub(e.currentTarget.innerText)
  }

  const handleSortMenuClose = (e) => {
    stopImmediatePropagation(e)
     setAnchorSortEl(null)
   }
   
   const handleMenuClick = (e) => {
      setAnchorEl(e.currentTarget)    
    }

   const handleSortMenuClick = (e) => {
      setAnchorSortEl(e.currentTarget)    
    }

  const onMenuClose = (e) => {
      setAnchorEl(null)
  }

  const onSortMenuClose = (e) => {
      setAnchorSortEl(null)
  }
  
const handleKeyPress = (event) => {
stopImmediatePropagation(event)
  if(event.key === 'Enter'){
    setAnchorEl(null)
    setNewsub(refNewSub.current.value)
  }
}

  return (
    <ThemeProvider theme={theme}>
     {/* <ThemeProvider theme={isDarkTheme ? createTheme(dark) : createTheme(light)}> */}

   <AppBar style={ scrollDirection === "up" ? styles.hidden : styles.active } position="sticky" >
    <Toolbar className='toolbar' sx={{ justifyContent: "space-between", paddingRight:'0px', paddingLeft:'12px' }}>
  
      <IconButton
        id='menu'
        size="large"
        edge="start"        
        aria-label="icono-menu-cambio-sub"
        sx={{ mr: 2}}
        onClick={(e) => handleMenuClick(e)}
      >
        <MenuIcon sx={{mr: 2}}/>
      </IconButton>

      <Typography sx={{color:'#222'}} variant='h5'> {props.title}</Typography>

      <Menu
        id="menu-camio-sub"
        anchorEl={anchorEl}
        open={isMenuOpen}
        onClose={onMenuClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >

        {(subnames.length > 0)
        ? subnames.map((sub, index) => (
          <MenuItem sx={{color: '#222'}} key={index} onClick={(e) => handleMenuClose(e)}>
           <Typography variant='overline'> {sub}</Typography>
          </MenuItem>
        ))
        : null        
        }
        <Box display='flex' direction='row' alignItems='center'>
          <Box display='flex' direction='row' alignItems='center'>
              <Icon sx={{cursor:'none'}} >
                <KeyboardArrowRightRoundedIcon />
              </Icon>            
          </Box>
          <input style={{maxWidth:'80%'}} ref={refNewSub} id='textinput' type="text" name="fname" 
                  onKeyUp={handleKeyPress}/>
        </Box>
      </Menu>



      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="icono-menu-ordenar"
        //aria-controls='Control'
        sx={{ ml: 2 }}
        onClick={(e) => handleSortMenuClick(e)}
      >
        <FilterListOutlinedIcon />
      </IconButton>




         
            {/* <Card sx={{ bgcolor: 'inherit', y:''}}> */}
               <CardHeader
               action={
                  <FormGroup >
                    <Box display='flex' direction='row' alignItems='center' >
                     <FormControlLabel
                     control={
                        <Switch checked={isDarkTheme} onChange={changeTheme} />
                     }
                     //label="Dark Theme"
                     
                     />
                     <Icon>
                      <NightsStayTwoToneIcon />
                     </Icon >
                    </Box>
                  </FormGroup>
               }
               />
            {/* </Card> */}







      <Menu
        anchorEl={anchorSortEl}
        open={isSortMenuOpen}
        onClose={onSortMenuClose}
        sx={{textAlign:'center'}}       
  
      >
        {/* <Box sx={{color: '#888'}} > */}


        {/* <Box
        sx={{
          border: "solid 1px black",
          padding: (theme) => theme.spacing(5),
          "@media screen and (orientation: landscape)": (theme) => ({
            color: "black",
            paddingTop: {
              xs: theme.spacing(2.5),
              sm: 3,
              md: 4,
              lg: 5,
              xl: 6
            },
            backgroundColor: {
              xs: "lightgray",
              sm: "lightblue",
              md: "lightgreen",
              lg: "pink",
              xl: "orange"
            }
          }),
          "@media screen and (orientation: portrait)": {
            color: "white",
            paddingTop: (theme) => ({
              xs: theme.spacing(5.5),
              sm: 4,
              md: 3,
              lg: 2
            }),
            backgroundColor: {
              xs: "black",
              sm: "blue",
              md: "green",
              lg: "red"
            }
          }
        }}
      > */}
        <Box display='flex' sx={{ flexDirection: 'column' }} >
          <Box sx={{flexDirection: 'row'}} >
            <IconButton onClick={(e) => {handleClickSortedBy(e,'Dasc')}}>  <ExpandLessOutlinedIcon /> </IconButton>
            <Typography variant='overline'> By-Date</Typography>
            <IconButton onClick={(e) => {handleClickSortedBy(e,'Ddes')}}>  <ExpandMoreOutlinedIcon /> </IconButton>
          </Box>
          <Box >
            <IconButton onClick={(e) => {handleClickSortedBy(e,'Vasc')}}>  <ExpandLessOutlinedIcon /> </IconButton>
            <Typography variant='overline'> By Votes</Typography>
            <IconButton onClick={(e) => {handleClickSortedBy(e,'Vdes')}}>  <ExpandMoreOutlinedIcon /> </IconButton>
          </Box>
          <Box >
            <IconButton onClick={(e) => {handleClickSortedBy(e,'Casc')}}>  <ExpandLessOutlinedIcon /> </IconButton>
            <Typography variant='overline'> By Comments</Typography>
            <IconButton onClick={(e) => {handleClickSortedBy(e,'Cdes')}}>  <ExpandMoreOutlinedIcon /> </IconButton>
          </Box>
        </Box>
      
      
      
      </Menu>

    </Toolbar>
  </AppBar>
  </ThemeProvider>
)
}
