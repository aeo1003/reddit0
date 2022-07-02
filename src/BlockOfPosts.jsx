import React, { useState, useEffect, useContext } from 'react'
//import * as API from "../services/GetInfo"
import {Box,Grid} from '@mui/material'
import {Masonry} from '@mui/lab'
import Datos from './Datos'
import {navbar,postcards,postcardsDark} from './data'
import { makeStyles } from "@mui/styles"
import { Context } from './App'
import baseTheme from "./styles/styles";


import "@fontsource/roboto"; // Loading Roboto font. MUI was designed with this font in mind.
import { createTheme, ThemeProvider } from "@mui/material/styles"

// // Define theme settings
// const light = {
//     palette: {
//       mode: "light",
//     },
//   };
  
//   const dark = {
//     palette: {
//       mode: "dark",
//     },
//   };

//import ScrollDialog from './ScrollDialog'


//import {motion} from 'framer-motion'



export default function BlockOfPosts(props) {

    const [theme, setTheme] = useState(props.m ? postcards : postcardsDark)




   const [childData, setChildData] = useState(false)


                                                    const useStyles = makeStyles(() => ({
                                                        container: {
                                                            padding: '10px 10px 10px 10px',
                                                        },
                                                        item: {
                                                            padding: '10px',
                                                                
                                                        },
                                                        }));


   // function bgcolor(v) { return API.prueba(temas,v) }

    const [tempComments, setTempComments] = useState([]) 

    const da = props.d
    const er = props.e
    const lo = props.l
    const st = props.s
    
    //console.log('ups del 3 en blockofposts : ',da) //.data.children[3].data.ups)
   // console.log(typeof st)
   
   useEffect(() => {
     //console.log('el theme pasado es : ',props.m)
     setTheme(props.m)
   },[])


    function UTCtoDate(utc) {
        const d = new Date(utc*1000);
        return d.toLocaleDateString();
    }
    
    console.log('----> st : ',props.m)

    if(lo){ return <div style={{padding:'2rem'}} ><h3 style={{color:'#ccc'}}>loading...</h3></div> } 

   
    if( (!lo && er ) || st===404 ){ return <div style={{padding:'2rem'}} ><h3 style={{color:'#ccc'}}>No lo encuentro.</h3></div> }
    if( (!lo && er ) || st===403 ){ return <div style={{padding:'2rem'}} ><h3 style={{color:'#ccc'}}>Zona Privada, prohibido el paso.</h3></div> }
    
    if (da?.data?.children.length>0) {
      //  if (st==='200') {
        return (    
        <>
         <ThemeProvider theme={props.m}>
            <Box ml={2} mt={4}>
                <Masonry columns={{ xs: 1, sm: 2, md:3, lg:4 }} spacing={2}>                
                {                          
                      da.data.children.map(item =>
                        <Box key={item.data.created}  xs={4} sm={4} md={2}>                            
                                <Datos 
                                    key= {item.data.created}
                                    created={item.data.created}  
                                    perma={item.data.permalink}
                                    ups={item.data.ups}
                                    subject={item.data.title}
                                    author={item.data.author}
                                    num_comments={item.data.num_comments}
                                    utc={UTCtoDate(item.data.created_utc)} 
                                    topic={item.data.link_flair_text}
                                    url={item.data.url}
                                    hint={item.data.post_hint}
                                    thumb={item.data.thumbnail}
                                    theme={props.m}

                                />                    
                        </Box>                     
                        )
                  }                      
                </Masonry>
            </Box>
        </ThemeProvider>    
    </>
        )}
}



    // const handleMenuClose = (e) => {
    //     setChildData(false)
    // }

    // React.useEffect(() => {      
    // },[tempComments])
 
    // const passData = (e) => {
    //     setChildData(e)
    // }

    // const passComments = (e) => {
    //     if (e && e.length > 0) {
    //         setTempComments(e)
    //        return e
    //     }
    // }

   


    // const value = useContext(Context) // trae los datos del Context creado en App
   // console.log('y los datos son... ',value
    //console.log('value : ',props.v)