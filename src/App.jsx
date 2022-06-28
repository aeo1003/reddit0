import React from 'react'
import { useState, useEffect, useRef, createContext, useContext } from 'react'
import './App.css'
import useFetch from './useFetch'
import ButtonAppBar from './ButtonAppBar'
import Datos from './Datos'
import BlockOfPosts from './BlockOfPosts'
// import { SettingsSystemDaydreamTwoTone } from '@mui/iconsmaterial'
import { myFetch } from './myFetch'
import axios from "axios"



export const Context = createContext('default value')

function App() {

   const [title, setTitle] = useState('Technology')
   
   const url = 'https://www.reddit.com/r/'+title+'/hot.json?limit=30'
   const {data,error,loading,status} = useFetch(url)
   
   const [datos,setDatos] = useState([])

   useEffect(() => {
      setDatos(data)    
   },[url,data])
  
   useEffect(() => {
      setTitle(title)
      setDatos([])
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
     <>
         <Context.Provider value={datos}>
            <ButtonAppBar title={title} onChangeSort={(e)=>{sortBy(e)}} onChange={(e) => {cambia(e)} }/>
            <BlockOfPosts d={datos} e={error} l={loading} t={title} s={status} />
         </Context.Provider>
     </>
  )  
}

export default App
