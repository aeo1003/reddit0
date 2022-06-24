import * as React from 'react';
import {useState, useEffect, useContext} from 'react';
import {MenuItem, AppBar, Menu, TextField, Toolbar, Typography, IconButton, Input} from '@mui/material';

import MenuIcon from "@mui/icons-material/Menu";

import useScroll from './useScroll'
import useFetch from './useFetch'
import { Context } from './App';



export default function ButtonAppBar(props) {

  
  const subnames = ['Futurology','Technology','Singularity']

  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const [newsub, setNewsub] = React.useState('')


  const [posts, setPosts] = useState([])
  const [temas, setTemas] = useState([])
  const [title, setTitle] = useState('')
  


  const onSubmit = (e) => {
    e.preventDefault();
    console.log("refresh prevented");
  };

  useEffect(() => {

  },[])



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
  };
  

  const handleMenuClick = (e) => {
    setNewsub('')
    setAnchorEl(e.currentTarget)
  };




  const handleMenuClose = (e) => {
    stopImmediatePropagation(e)
    setAnchorEl(null)
    // const value = useContext(Context)
    // console.log('y los datos son... ',value)

    
    if (subnames.includes(e.currentTarget.innerText)) {     
      props.onChange(e.currentTarget.innerText)
    }
    
  };


const handleKeyPress = (event) => {

  if(event.key === 'Enter'){
    setAnchorEl(null)
    const  tempnewsub = document.getElementById('textinput').value
    setNewsub(tempnewsub)
  }
}

  return (
   <AppBar style={ scrollDirection === "up" ? styles.hidden : styles.active }  position="sticky" color="primary">
  {/* <AppBar position="sticky" color="primary"> */}
    <Toolbar>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={(e) => handleMenuClick(e)}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant='h4'> {props.title}</Typography>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >

        {(subnames.length > 0)
        ? subnames.map((sub, index) => (
          <MenuItem sx={{color: '#888'}} key={index} onClick={(e) => handleMenuClose(e)}>
           <Typography variant='div'> {sub}</Typography>
          </MenuItem>
        ))
        : null        
        }    
      </Menu>

      {/* <Context.Consumer>
        {value => <h1>{value}</h1> }
      </Context.Consumer> */}




      {/* <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >

        {(subnames.length > 0)
        ? subnames.map((sub, index) => (
          <MenuItem sx={{color: '#888'}} key={index} onClick={(e) => handleMenuClose(e)}>
           <Typography variant='div'> {sub}</Typography>
          </MenuItem>
        ))
        : null        
        }          
        
        <br/>
        <MenuItem onClickCapture={stopImmediatePropagation}
          onKeyDown={e => e.stopPropagation()}>
            <form onSubmit={onSubmit}>
            Add sub: <input id='textinput' type="text" name="fname" 
             onKeyUp={handleKeyPress}/>           
             <input type="text" onclick="myFunction()" value="Submit"/>
            </form>
            </MenuItem>
            
      </Menu> */}

      {/* <MyFormHelperText onSubmit={(e) => enviar(e)} /> */}
      


      <Typography id='titulo' variant='h4' > {props.value} </Typography>

    </Toolbar>
  </AppBar>
// </div>
)
}
