import React from 'react'
import { useState, useEffect, useRef, createContext, useContext } from 'react'
import './App.css'
import useFetch from './useFetch'
import useFetchComments from './useFetchComments'
import ButtonAppBar from './ButtonAppBar'
import baseTheme from './styles/styles'
import Datos from './Datos'
import BlockOfPosts from './BlockOfPosts'
import {mainApp, mainAppDark, navbar, postcards, postcardsDark} from './data'
// import { SettingsSystemDaydreamTwoTone } from '@mui/iconsmaterial'
import { myFetch } from './myFetch'
import axios from "axios"
import {Masonry} from '@mui/lab/'

import {lightTheme, darkTheme, GlobalStyles} from './theme.js'
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';


import "@fontsource/roboto"; // Loading Roboto font. MUI was designed with this font in mind.
import {
  Card,
  CardHeader,
  Switch,
  CardContent,
  Box,
  Drawer,
  List,
  Icon,
  IconButton,
  Container,
  Typography,
  FormGroup,
  FormControlLabel,
  CssBaseline,
  Paper
} from "@mui/material";

import { createTheme, ThemeProvider } from "@mui/material/styles"
import { LocalConvenienceStoreOutlined, Scale, SetMealOutlined } from '@mui/icons-material'


export const Context = createContext('default value')

function App(props) {

const [theme, setTheme] = useState('light')
const [themeApp, setThemeApp] = useState([])

const changeTheme = () => {
  theme==='light' ? setTheme('dark') : setTheme('light')
};

   const [title, setTitle] = useState('NEWS')
   
   const url = 'https://www.reddit.com/r/'+title+'/hot.json?limit=60'
   const {data,error,loading,status} = useFetch(url)
   
   const [datos,setDatos] = useState([])
   const [comments, setComments] = useState()

   const [isModalOpen, setIsModalOpen] = useState(false)
   const [isReplyOpen, setIsReplyOpen] = useState(false)
   const [commentsUrl, setCommentsUrl] = useState()
   
   useEffect(() => {
      setDatos(data)    
   },[url,data])

   useEffect(() => {
      setTitle(title)
      setDatos([])
   },[])
   
   useEffect(() => {
      //console.log('los come : ',commentsUrl)
   },[commentsUrl])
   
   const {cData,cError,cLoading} = useFetchComments(commentsUrl)


   useEffect(() => {
      comments?.length>0
         ? setIsModalOpen(true)
         : setIsModalOpen(false)
   },[comments])

   const loadComments = e => {
      //console.log('la e es : ',e)
       setComments(e)      
   }
   
   const loadUrl = e => {
      //console.log('la e es : ',e)
       setCommentsUrl(e)      
   }

   const onCloseModal = () => {
      setIsModalOpen(false)
   }
   
   const cambia = (e) => {
      title!==''
      ? setTitle(e)
      : null
   }

   const sortBy = (e) => {
      
      if(datos!==null)
        { 
         if (e === 'Ddes') {         
            const sortedData = JSON.parse(JSON.stringify(datos))
            sortedData?.data?.children?.sort((a,b) => Number(b.data.created) - Number(a.data.created)); // b - a for reverse sort
            setDatos(sortedData)
            }

            if (e === 'Dasc') {         
               const sortedData = JSON.parse(JSON.stringify(datos))
               sortedData?.data?.children?.sort((a,b) => Number(a.data.created) - Number(b.data.created)); // b - a for reverse sort
               setDatos(sortedData)
            } 
//------------------------------------------------------------------------------
            if (e === 'Cdes') {         
               const sortedData = JSON.parse(JSON.stringify(datos))   //AQUI SE USA DATA!!!
               sortedData?.data?.children?.sort((a,b) => b.data.num_comments - a.data.num_comments); // b - a for reverse sort
               setDatos(sortedData)
               } 
            if (e === 'Casc') {         
               const sortedData = JSON.parse(JSON.stringify(datos))   //AQUI SE USA DATA!!!
               sortedData?.data?.children?.sort((a,b) => a.data.num_comments - b.data.num_comments); // b - a for reverse sort
               setDatos(sortedData)
               } 
         

            if (e === 'Vdes') {
               const sortedData = JSON.parse(JSON.stringify(datos))
                     sortedData?.data?.children?.sort((a,b) => b.data.ups - a.data.ups); // b - a for reverse sort
                     setDatos(sortedData)         
            } 
            if (e === 'Vasc') {
               const sortedData = JSON.parse(JSON.stringify(datos))
                     sortedData?.data?.children?.sort((a,b) => a.data.ups - b.data.ups); // b - a for reverse sort
                     setDatos(sortedData)         
            } 
         }
   }


   const toggleReplies = (c) => {
      isReplyOpen
      ? setIsReplyOpen(false)
      : setIsReplyOpen(true)
      //console.log(c)
   }

   return (
      
     
              
      <div className={theme}>
         <ThemeProvider theme={theme === 'light' ? createTheme(lightTheme) : createTheme(darkTheme)} > 
            
            {/* <GlobalStyles /> */}               
                  <ButtonAppBar 
                        t={theme} 
                        s={status} 
                        title={title} 
                        onChangeSort={ (e) => {sortBy(e)} }                              
                        onChange={(e) => {cambia(e)} }  
                        onChangeTheme={ (e) => {changeTheme(e)} }
                  /> 

                        <BlockOfPosts 
                           d={datos} 
                           e={error} 
                           l={loading} 
                           t={title} 
                           s={status} 
                           onUrl={ (e) => loadUrl(e)} 
                           onComments={ e => {loadComments(e)} }
                        />
                              <Drawer 
                                 variant='temporary'                   
                                 open={isModalOpen}
                                 onClose={onCloseModal}
                              >                              

                                 <Box sx={{width:300}} >
                                    {comments?.map(c=>
                                       <Box 
                                          border='1px solid #F2F4A6' 
                                          display='flow' 
                                          key={c.data.created} 
                                          sx={{fontSize:'0.7rem', pt:2, pl:0.5}}  
                                       >
                                          <Typography 
                                             fontSize='0.9rem' 
                                             gutterBottom
                                          >
                                             {c.data.body}                          
                                             {c.data.replies !== '' 
                                                   ? <IconButton  style={{transform: `scale(0.6)`}} > <ExpandCircleDownIcon /> </IconButton> 
                                                   :null}
                                             {/* {isReplyOpen ? <Box style={{display:'flex'}} >test</Box> : <Box style={{display:'none'}} >test</Box>}
                                             {cLoading ? loading : null} */}
                                          </Typography>

                                          
                                       </Box> )}
                                    
                                 </Box>
                              </Drawer>
         </ThemeProvider> 
      </div>
      
        
  )  
}

export default App
