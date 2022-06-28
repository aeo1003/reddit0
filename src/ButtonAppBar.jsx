import * as React from 'react';
import {useState, useEffect, useRef, useContext} from 'react';
import {createTheme, ThemeProvider, MenuItem, AppBar, Menu, Box, 
        TextField, Toolbar, Typography, IconButton, Input} from '@mui/material';

import MenuIcon from "@mui/icons-material/Menu";
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

import useScroll from './useScroll'
import useFetch from './useFetch'
import { Context } from './App';



export default function ButtonAppBar(props) {<></>

  const refNewSub = useRef()
  const subnames = ['Futurology','Technology','Singularity']

  const [anchorEl, setAnchorEl] = React.useState(false)


  const [anchorSortEl, setAnchorSortEl] = React.useState(false)
  const isMenuOpen = Boolean(anchorEl)
  const isSortMenuOpen = Boolean(anchorSortEl)
  const [newsub, setNewsub] = React.useState('')


  const [posts, setPosts] = useState([])
  const [temas, setTemas] = useState([])
  const [title, setTitle] = useState('')
  
  const [sortedBy, setSortedBy] = useState(null)

  const theme = createTheme({
    components: {
      MuiTypography: {
        variants: [
          {
            props: {
              variant: 'body3'
            },
            style: {
              fontSize: '0.8rem',
              fontWeight: 'lighter',
              color: '#222'
            }
          }
        ]
      }
      }  
    })

  
  useEffect(() => {
    props.onChange(newsub)
    setSortedBy(null)
  },[newsub])
  

  useEffect(() => {
    setAnchorSortEl(null)
    stopImmediatePropagation
    props.onChangeSort(sortedBy)
  }, [sortedBy])



  const { y, x, scrollDirection } = useScroll();  

  const styles = {
    active: {
      //color: 'orange',
      color: 'rgba(20,20,20, 0.5)',
      backgroundColor: 'lightgray',
      visibility: "visible",
      transition: "all 1s"
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
  //console.log('sort order is : ',t)
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
   // }
  }

  const onSortMenuClose = (e) => {
      setAnchorSortEl(null)
   // }
  }
  
const handleKeyPress = (event) => {

  if(event.key === 'Enter'){
    setAnchorEl(null)
    setNewsub(refNewSub.current.value)
  }
}

  return (
    <ThemeProvider theme={theme}>

   <AppBar style={ scrollDirection === "up" ? styles.hidden : styles.active }  
           position="sticky" color="primary">
    <Toolbar>
      <IconButton
        id='menu'
        size="large"
        edge="start"
        color="inherit"
        aria-label="icono-menu-cambio-sub"
        sx={{ mr: 2 }}
        onClick={(e) => handleMenuClick(e)}
      >
        <MenuIcon />
      </IconButton>

      <Typography variant='h5'> {props.title}</Typography>

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
          <MenuItem sx={{color: '#888'}} key={index} onClick={(e) => handleMenuClose(e)}>
           <Typography variant='body2'> {sub}</Typography>
          </MenuItem>
        ))
        : null        
        }

        <MenuItem onClickCapture={stopImmediatePropagation}
          onKeyDown={e => e.stopPropagation()}>
           
            Add sub <input style={{marginLeft:'1rem'}} ref={refNewSub} id='textinput' type="text" name="fname" 
             onKeyUp={handleKeyPress}/>
        </MenuItem>
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



      <Menu
        anchorEl={anchorSortEl}
        open={isSortMenuOpen}
        onClose={onSortMenuClose}
        sx={{textAlign:'center'}}       
  
      >
        <Box sx={{color: '#888'}} >
          <IconButton onClick={(e) => {handleClickSortedBy(e,'Dasc')}}>  <ExpandLessOutlinedIcon /> </IconButton>
          <Typography variant='body3'> By Date</Typography>
          <IconButton onClick={(e) => {handleClickSortedBy(e,'Ddes')}}>  <ExpandMoreOutlinedIcon /> </IconButton>
        </Box>
        <Box sx={{color: '#888'}} >
          <IconButton onClick={(e) => {handleClickSortedBy(e,'Vasc')}}>  <ExpandLessOutlinedIcon /> </IconButton>
          <Typography variant='body3'> By Votes</Typography>
          <IconButton onClick={(e) => {handleClickSortedBy(e,'Vdes')}}>  <ExpandMoreOutlinedIcon /> </IconButton>
        </Box>
        <Box sx={{color: '#888'}} >
          <IconButton onClick={(e) => {handleClickSortedBy(e,'Casc')}}>  <ExpandLessOutlinedIcon /> </IconButton>
          <Typography variant='body3'> By Comments</Typography>
          <IconButton onClick={(e) => {handleClickSortedBy(e,'Cdes')}}>  <ExpandMoreOutlinedIcon /> </IconButton>
        </Box>
      
      
      
      </Menu>

    {/* <IconButton onClick={(e) => {handleClickSortedBy(e,'D')}}>  <ExpandLessOutlinedIcon /> </IconButton> */}
      {/* <Menu
        id="menuS"
        anchorEl={anchorSortEl}
        open={isSortMenuOpen}
        onClose={onSortMenuClose}
        
      >
          <MenuItem sx={{color: '#888', justifyContent: 'center'}} >
    
           <Typography  variant='div'> By Date</Typography>
          </MenuItem>
          <MenuItem sx={{color: '#888', justifyContent: 'center'}} onClick={(e) => {handleClickSortedBy(e,'V')}}>
           <Typography variant='div'> By Votes</Typography>
          </MenuItem>
          <MenuItem sx={{color: '#888', justifyContent: 'center'}} onClick={(e) => {handleClickSortedBy(e,'C')}}>
           <Typography variant='div'> By Comments</Typography>
          </MenuItem>
      </Menu> */}

    </Toolbar>
  </AppBar>
  </ThemeProvider>
)
}
