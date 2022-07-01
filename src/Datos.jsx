import React, {useContext,useState,useEffect} from 'react'
import { Box,Divider,Grid, Paper, Typography, IconButton} from '@mui/material/'
// import * as API from "../services/GetInfo"
// import { makeStyles } from "@mui/styles"
import { createTheme, ThemeProvider } from "@mui/material"
import "@fontsource/roboto"
import { navbar, postcards } from './data'

import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import { Context } from './App';
import useFetch from './useFetch'

import baseTheme from "./styles/styles";


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

// const useStyles = makeStyles({
//   root: {
//     flexGrow: 1,
//     padding: "1rem"
//     },
 
//   paper: {
//     padding: '1rem',
//     textAlign: 'right',
//     color: '#fa0',
//     }
// });

// const theme = createTheme({
//   components: {
//     MuiTypography: {
//       variants: [
//         {
//           props: {
//             variant: 'body3'
//           },
//           style: {
//             fontSize: '0.7rem',
//             fontWeight: '300',
//             //color: '#111'
//           }
//         }
//       ]
//     }
//     }  
//   })




export default function Datos(props) {
  
const openSite = () => {
  //useStyles()
  window.open(props.url)
  }

 


//const classes = useStyles()   

// const [comments, setComments] = React.useState([])

// const handleCommentsClick = (e) => {
//    API.getComments(props.perma).then(setComments)
//    if(comments.length>0){
//    }
// }

// React.useEffect(() => {
//  if ((comments) && (comments.length > 0)){
//    props.passComments(comments)
//    props.passData(true)
//   }
// }, [comments])

 //    const value = useContext(Context) // trae el array de datos desde el Context creado en App
   //  console.log('y los datos son... ',value)
     const colores = ['#AFDB37','#89C5D3','#8C9DCF','#EAACBD','#E9BB2','#a8D0C6','#b7EDC3','#DEA4C0','#f1ed22','#dcd2d3','#eae4d2','#c6d5d8','#717876','#849498'];
     const min = 0;
     const max = colores.length-1;

     const [theme, setTheme] = useState(baseTheme)
 
     function randomRange(myMin, myMax) {
      return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
    }
           const rndcol = colores[randomRange(0, 10)]


    useEffect(() => {      
      //const newTheme = navbar
      setTheme(createTheme(postcards))

  },[])
 
     return (
    <>
    
    <ThemeProvider theme={theme}>
      {/* <Paper elevation={1} style={{backgroundColor: rndcol}}> */}
      <Box sx={{background:'#ccc', borderRadius:'10px 10px 0px 0px'}}>
          
        <Box p={0.8} sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', 
              justifyContent:'space-between' }}> 
             
          <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', 
              justifyContent:'space-between' }}>
                
                  <ThumbUpAltOutlinedIcon sx={{fontSize:'medium'}} />
                  <Typography sx={{ml:'0.5rem',fontSize:'0.7rem'}} variant=""> {props.ups} </Typography>
                
          </Box>

              <Typography style={{ fontWeight: 900 }} sx={{fontSize:'1.1rem'}} > {props.topic || props.hint} </Typography>          
        </Box>
      </Box>
    
    {/* <Paper  style={{backgroundColor: 'rgb(231, 236, 229)'}}> */}
    <Box style={{backgroundColor: '#ddd'}}> 
        <Box onClick={openSite} style={{cursor:'pointer'}} p={0.8} sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent:'space-between' }}>
            <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent:'space-between' }}>
                <Typography mr={1}               
                            fontWeight='500' 
                            fontSize='01rem' 
                            variant="body1">{props.subject}
                </Typography>
            </Box>
            {props.hint === 'image' ? <img width='80' src={props.thumbnail || props.url} /> : null }
        </Box>
        
        <Box>
          <Divider />
          <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'baseline', justifyContent: 'space-between' }}>
              <Typography sx={{fontSize:'0.7rem', ml:'0.5rem'}} variant="overline" > {props.utc} </Typography>

              <IconButton
                size="small"
                color="inherit"
                aria-label="menu"
                onClick={(e) => handleCommentsClick(e)}
              >
                   <Typography sx={{fontSize:'0.7rem'}}
                      mr={1}
                      variant="overline">{props.num_comments}
                  </Typography>
                  <ForumOutlinedIcon sx={{fontSize:'small'}} />
              </IconButton>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
    
    </>
  )
}
