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
   
   const url = 'https://www.reddit.com/r/'+title+'.json'
  
   // const refBar = useRef()
   const {data,error,loading} = useFetch(url)
  
   useEffect(() => {
      setTitle(title)
   },[])
   
   const fetchProducts = () => {
      setLoading(true)
      setDatos([])
      setErrors(null)
      axios
         //setLoading(true)
        .get('https://www.reddit.com/r/'+title+'.json')
        .then((res) => 
       { const j = res.data
          //console.log('datos recien recibidos : ',j);
         setDatos(j)}
        )
        .catch((err) => {
          console.error(err)
          setErrors(err)
        })
        setLoading(false)
    }
   
   const cambia = (e) => {
      title!==''
      ? setTitle(e)
      : null
   }
   
   return (
     <>
         <Context.Provider value={data}>
            <ButtonAppBar title={title} onChange={(e) => {cambia(e)} }/>
            <BlockOfPosts d={data} e={error} l={loading} t={title} />           
         </Context.Provider>
     </>
  )  
}

export default App
