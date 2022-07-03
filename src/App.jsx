import React from 'react'
import { useState, useEffect, useRef, createContext, useContext } from 'react'
import './App.css'
import useFetch from './useFetch'
import ButtonAppBar from './ButtonAppBar'
import baseTheme from './styles/styles'
import Datos from './Datos'
import BlockOfPosts from './BlockOfPosts'
import {mainApp, mainAppDark, navbar, postcards, postcardsDark} from './data'
// import { SettingsSystemDaydreamTwoTone } from '@mui/iconsmaterial'
import { myFetch } from './myFetch'
import axios from "axios"



import "@fontsource/roboto"; // Loading Roboto font. MUI was designed with this font in mind.
import {
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
  Paper
} from "@mui/material";

import { createTheme, ThemeProvider } from "@mui/material/styles"
import { SetMealOutlined } from '@mui/icons-material'


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

 // 

 


export const Context = createContext('default value')

function App() {

// The light theme is used by default
const [isDarkTheme, setIsDarkTheme] = useState(false);
const [mode, setMode] = useState('light')
const [theme, setTheme] = useState(postcards)
const [themeApp, setThemeApp] = useState([])

// This function is triggered when the Switch component is toggled
const changeTheme = (e) => {
  // console.log('aqui e vale : ',e)
  setIsDarkTheme(e);
  //console.log('primer theme : ',theme)
  {e ? setTheme(createTheme(postcardsDark)) : setTheme(createTheme(postcards))}
  {e ? setFondo('darkFondo') : setFondo('lightFondo')}
  console.log('el fondo es  :',fondo)
};





   const [title, setTitle] = useState('Technology')
   
   const url = 'https://www.reddit.com/r/'+title+'/hot.json?limit=30'
   const {data,error,loading,status} = useFetch(url)
   
   const [datos,setDatos] = useState([])
   const [fondo, setFondo] = useState({})
   
   useEffect(() => {
      setDatos(data)    
   },[url,data])

   useEffect(() => {
      setTitle(title)
      setDatos([])
      setTheme(createTheme(postcards))
      setFondo('lightFondo')
    //  setThemeApp(createTheme(mainApp))
      
      //console.log('sljfsdkf',theme)
   },[])

   
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

   
   return (
      
     
      <Context.Provider value={datos}>           
         {/* <ThemeProvider theme={createTheme(postcards)} >           */}
               {/* <Box sx={{ position:'absolute', width:'100%', height:'100%', backgroundColor:'red'}}></Box> */}
            {/* </ThemeProvider>   */}


         {/* <ThemeProvider theme={fondo} >  */}
            <div className={fondo}>
            
               <ThemeProvider theme={createTheme(navbar)} >           
                  <ButtonAppBar title={title} onChangeSort={ (e) => {sortBy(e)} } onMode={ e => setMode(e)} 
                              onChange={(e) => {cambia(e)} }  onChangeTheme={ (e) => {changeTheme(e)} }/>
               </ThemeProvider>

               <ThemeProvider theme={createTheme(postcards)} >          
                  <BlockOfPosts d={datos} e={error} l={loading} t={title} s={status} m={theme} />
               </ThemeProvider>  
            </div>
         {/* </ThemeProvider>  */}




      </Context.Provider>
        
   
    
  )  
}

export default App
