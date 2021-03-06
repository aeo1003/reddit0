import React, {useContext,useState,useEffect} from 'react'
import { Box,Button,Dialog,DialogTitle,DialogContent,Divider,Card, Grid,Icon, Paper, Typography, IconButton} from '@mui/material/'
import * as API from './comments.js'
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
// import Modal from 'react-modal';
import ModalComments from './ModalComments.jsx'

export default function Datos(props) {
  
const openSite = () => {
  //useStyles()
  window.open(props.url)
  }





 
     const colores = ['#AFDB37','#89C5D3','#8C9DCF','#EAACBD','#E9BB2','#a8D0C6','#b7EDC3','#DEA4C0','#f1ed22','#dcd2d3','#eae4d2','#c6d5d8','#717876','#849498'];
     const min = 0;
     const max = colores.length-1;

     const [theme, setTheme] = useState(baseTheme)
     const [comments, setComments] = useState([])
 
     function randomRange(myMin, myMax) {
      return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
    }
           const rndcol = colores[randomRange(0, 10)]
    const [show, setShow] = useState(false);

    useEffect(() => {      
      //const newTheme = navbar
      //console.log('theme : ',props.mode)

 },[])


useEffect(() => {      

  const url = 'https://www.reddit.com'+props.perma+'data.json'
  props.onChangeComments(comments) // le pasa comments a BlockOfPosts function -> onChangeComments
  props.onChangeUrl(url)

},[comments])


 const handleCommentsClick = (e) => {
   API.getComments(props.perma).then(setComments)
   // const url = 'https://www.reddit.com/r/'+title+'/hot.json?limit=60'
   
   
  // const url = 'https://www.reddit.com'+props.perma+'data.json'
  
   // console.log('lo : ',loading)
}
 
 // const {data,error,loading,status} = useFetch(cUrl)



     return (
    <>
    
    {/* <ThemeProvider theme={props.theme}> */}


      {/* <Paper elevation={1} style={{backgroundColor: rndcol}}>  */}
    <Card sx={{borderRadius:'10px 10px 0px 0px'}}>
        
      <Box sx={{paddingLeft: '1rem', paddingRight: '1rem', display: 'flex', flexDirection: 'row', alignItems: 'center', 
            justifyContent:'space-between' }}> 
            {/* icono con pulgar hacia arriba + numero de likes */}
            <Box sx={{display: 'flex',flexDirection: 'row', alignItems: 'center' }}>
                  <Icon>
                    <ThumbUpAltOutlinedIcon sx={{fontSize:'1.2rem'}} />
                  </Icon>
                    <Typography sx={{ml:'0.5rem',fontSize:'0.7rem'}} variant="overline"> {props.ups} </Typography>                  
            </Box>
{/* el campo topic o el campo hint -  */}
            <Typography sx={{fontSize:'1.1rem', fontWeight: '900'}} > {props.topic || props.hint} </Typography>          
      </Box>
      
    </Card>
 
    <Paper sx={{borderRadius:'0px 0px 10px 10px'}}> 

      <Box onClick={openSite} sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent:'space-between' }}>
            <Box sx={{marginLeft:'0.5rem',cursor:'pointer', display: 'flex', flexDirection: 'row', 
                      alignItems: 'center', justifyContent:'space-between' }}  p={2}>
                <Typography sx={{ fontWeight:'500', fontSize:'0.9rem' }} 
                            variant="body1">{props.subject}
                </Typography>
            </Box>
            <Box sx={{marginTop:'0.4rem', marginRight:'0.4rem'}}>{props.hint === 'image' ? <img loading='lazy' height='80' src={props.thumbnail || props.url} /> : null }</Box>
      </Box>
        
      <Box >
        
        <Divider />
        <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <Typography sx={{fontSize:'0.7rem', ml:'0.5rem'}} variant="overline" > {props.utc} </Typography>
            
            
          <Box>
                <Typography sx={{mr:'0.4rem', fontSize:'0.7rem'}}
                        variant="overline">{props.num_comments}
                    </Typography>
                
                <IconButton
                  sx={{mr:'0.5', size:'small'}}
                  onClick={(e) => handleCommentsClick(e)}
                >                    
                    <ForumOutlinedIcon sx={{fontSize:'medium'}} />
                </IconButton>

                
          
          </Box>

        </Box>

      </Box>
    </Paper>    
    </>
  )
}





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