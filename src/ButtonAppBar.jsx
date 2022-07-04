import * as React from 'react';
import {useState, useEffect, useRef, useContext} from 'react';
// import {createTheme, ThemeProvider, MenuItem, AppBar, Menu, Box,        TextField, Toolbar, Typography, responsiveFontSizes, IconButton, Input} from '@mui/material';

import MenuIcon from "@mui/icons-material/Menu";
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import NightsStayTwoToneIcon from '@mui/icons-material/NightsStayTwoTone';
import StarIcon from '@mui/icons-material/Star';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

import useScroll from './useScroll'
import useFetch from './useFetch'
import { Context } from './App';
import { navbar, navbarDark, postcards } from './data'
import {lightTheme, darkTheme, GlobalStyles} from './theme.js'





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


export default function ButtonAppBar(props) {

// The light theme is used by default
const [isDarkTheme, setIsDarkTheme] = useState(false);

// This function is triggered when the Switch component is toggled
const changeTheme = () => {
  setIsDarkTheme(!isDarkTheme)
  props.onChangeTheme(!isDarkTheme)
};



  const refNewSub = useRef()
  const subnames = ['Futurology','Roomporn','Graphic_Design','Pics']

  const [anchorEl, setAnchorEl] = React.useState(false)


  const [anchorSortEl, setAnchorSortEl] = React.useState(false)
  const isMenuOpen = Boolean(anchorEl)
  const isSortMenuOpen = Boolean(anchorSortEl)
  const [newsub, setNewsub] = React.useState('')

  const [sortedBy, setSortedBy] = useState(null)
 // const [theme, setTheme] = useState('navbar')

  const breakpoints = {
    values: {
      xs: 0,
      sm: 320, // Phone
      md: 768, // Tablet/Laptop
      lg: 1500, // Desktop
      xl: 2000
    }
  }
  

  
  useEffect(() => {
    props.onChange(newsub)
    setSortedBy(null)
  },[newsub])
  

  useEffect(() => {
    setAnchorSortEl(null)
    props.onChangeSort(sortedBy)
  }, [sortedBy])


  useEffect(() => {      
    //const newTheme = navbar
    //setTheme(createTheme(navbar))

  },[])

  


  const { y, x, scrollDirection } = useScroll();  

  const styles = {
    active: {
     // backgroundColor: '#6FFCAA',
     
      visibility: "visible",
      transition: "all 0.5s"
    },
    hidden: {
      backgroundColor: 'lightgray',
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

  if(event.key === 'Enter'){
    setAnchorEl(null)
    setNewsub(refNewSub.current.value) // el ref se refiere al campo input
  }
}

  return (
    <>
         {/* <ThemeProvider theme={props.t === 'light' ? createTheme(lightTheme) : createTheme(darkTheme)} >  */}
   {/* <ThemeProvider theme={isDarkTheme ? createTheme(navbarDark) : createTheme(navbar)}>  */}
<GlobalStyles />
   
     <AppBar style={ scrollDirection === "up" ? styles.hidden : styles.active } position="sticky" >
      
      <Toolbar sx={{ justifyContent: "space-between"}}>
          <Box display='flex' alignItems='center'>
              <IconButton
                id='menu'
                size="large"
                edge="start"    
                aria-label="icono-menu-cambio-sub"
                //sx={{mr: 2}}
                onClick={(e) => handleMenuClick(e)}
              >
                <MenuIcon />
              </IconButton>
  
              <Typography variant='overline' sx={{ fontSize:'1.5rem' }}> {props.title}</Typography>
              
              <IconButton
                id=" star"
                size="large"
                edge="start"
                
               // aria-label="icono-menu-ordenar"
                //aria-controls='Control'
                  sx={{ ml: '0.2rem' }}
              //  onClick={(e) => handleSortMenuClick(e)}
              >
                <StarIcon sx={{color:'orange', fontSize:'1.5rem'}} />
              </IconButton>
              
              <IconButton
                id="ordena"
                size="large"
                edge="start"
                
               // aria-label="icono-menu-ordenar"
                //aria-controls='Control'
                  // sx={{ ml: '1rem' }}
                onClick={(e) => handleSortMenuClick(e)}
              >
                <FilterListOutlinedIcon />
              </IconButton>
  
  
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
                              onKeyUp={handleKeyPress} onKeyDown={e=> e.stopPropagation()}/>
                </Box>
  
              </Menu>
          
          </Box>
  
              
                      <Box display='flex' direction='row' alignItems='center' > 
                      
                       <IconButton checked={isDarkTheme}  onClick={changeTheme}>
                        { !isDarkTheme ? <NightsStayTwoToneIcon /> : <WbSunnyIcon /> }
                       </IconButton >
                      </Box>
              
  
        <Menu
          anchorEl={anchorSortEl}
          open={isSortMenuOpen}
          onClose={onSortMenuClose}
          sx={{textAlign:'center'}}       
    
        >
  
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
    {/* </ThemeProvider> */}
   </>
  
)
}




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