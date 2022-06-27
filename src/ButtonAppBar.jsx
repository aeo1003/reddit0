import * as React from 'react';
import {useState, useEffect, useRef, useContext} from 'react';
import {MenuItem, AppBar, Menu, TextField, Toolbar, Typography, IconButton, Input} from '@mui/material';

import MenuIcon from "@mui/icons-material/Menu";
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';

import useScroll from './useScroll'
import useFetch from './useFetch'
import { Context } from './App';



export default function ButtonAppBar(props) {

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
  

  

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("refresh prevented");
  };

  useEffect(() => {
    props.onChange(newsub)    
  },[newsub])



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




  const handleMenuClose = (e) => {
    stopImmediatePropagation(e)
    setAnchorEl(false)
      setNewsub(e.currentTarget.innerText)
  }

  const handleSortMenuClose = (e) => {
    stopImmediatePropagation(e)
     setAnchorSortEl(false)
  //     setNewsub(e.currentTarget.innerText)
   }
   
   const handleMenuClick = (e) => {
    //  setNewsub('')
    //console.log(e.currentTarget)
      setAnchorEl(e.currentTarget)    
    }

   const handleSortMenuClick = (e) => {
    //  setNewsub('')
      setAnchorSortEl(e.currentTarget)    
    }

  const onMenuClose = (e) => {
      setAnchorEl(false)
   // }
  }

  const onSortMenuClose = (e) => {
      setAnchorSortEl(null)
   // }
  }
  
const handleKeyPress = (event) => {

  if(event.key === 'Enter'){
    setAnchorEl(false)
    setNewsub(refNewSub.current.value)
  }
}

  return (
   <AppBar style={ scrollDirection === "up" ? styles.hidden : styles.active }  position="sticky" color="primary">
  {/* <AppBar position="sticky" color="primary"> */}
    <Toolbar>
      <IconButton
        id='menu'
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu cambio sub"
        sx={{ mr: 2 }}
        onClick={(e) => handleMenuClick(e)}
      >
        <MenuIcon />
      </IconButton>

      <Typography variant='h4'> {props.title}</Typography>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={isSortMenuOpen}
        onClose={onMenuClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >

        {(subnames.length > 0)
        ? subnames.map((sub, index) => (
          <MenuItem sx={{color: '#888'}} key={index} onClick={(e) => handleMenuClose(e)}>
           <Typography variant='div'> {sub}</Typography>
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










{/* 

      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menuS"
        aria-controls='Control'
        sx={{ ml: 2 }}
        onClick={(e) => handleSortMenuClick(e)}
      >
        <FilterListOutlinedIcon />
      </IconButton>

      <Menu
        id="menuS"
        anchorEl={anchorSortEl}
        open={isSortMenuOpen}
        onClose={onSortMenuClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
          <MenuItem sx={{color: '#888'}} onClick={(e) => handleSortMenuClose(e)}>
           <Typography variant='div'> uno</Typography>
          </MenuItem>
          <MenuItem sx={{color: '#888'}} onClick={(e) => handleSortMenuClose(e)}>
           <Typography variant='div'> dos</Typography>
          </MenuItem>
          <MenuItem sx={{color: '#888'}} onClick={(e) => handleSortMenuClose(e)}>
           <Typography variant='div'> tres</Typography>
          </MenuItem>
      </Menu>

 */}















     

    </Toolbar>
  </AppBar>
)
}
