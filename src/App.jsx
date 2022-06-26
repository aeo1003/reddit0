import React from 'react'
import { useState, useEffect, useRef, createContext, useContext } from 'react'
import './App.css'
import useFetch from './useFetch'
import ButtonAppBar from './ButtonAppBar'
import Datos from './Datos'
import BlockOfPosts from './BlockOfPosts'
import { SettingsSystemDaydreamTwoTone } from '@mui/icons-material'
import { myFetch } from './myFetch'


export const Context = createContext('default value')



function App() {

   const [title, setTitle] = useState('technology')
   const [datos, setDatos] = useState([])
   const [errors, setErrors] = useState([])

   //const url = 'https://www.reddit.com/r/'+title+'.json'
  
   // const refBar = useRef()
   const {data,error,loading} = useFetch('https://www.reddit.com/r/'+title+'.json')
  
   

   // console.log('data1 : ',data)
   // console.log('error1 : ',error)
   // console.log('loading1 : ',loading)

   // !data===null && error === null
   // ? setDatos(data)
   // :null

   // !data===null && error !== null
   // ? setErrors(error)
   // :null

   useEffect(() => {
    // console.log('que estoy dentro !!!')
   setTitle(title)
   },[])

   useEffect(() => {
     //  const {data0,error0} = myFetch(url)      
      setDatos(data)
   },[title])

   // function cambia (e) {
   //    setTitle(e)
   //    console.log("--------------------->",e)
   //   console.log('datagdaggdfasdfasdfsdfs0 : ',data)
   // }

   const cambia = (e) => {
      console.log('iiiiiiiii',e)
      setTitle(e)
   }
   
   return (
     <>
         <Context.Provider value={data}>
            <ButtonAppBar title={title} onChange={(e) => {cambia(e)} }/>
            <BlockOfPosts d={data} e={error} l={loading} />           
         </Context.Provider>
     </>
  )  
}

export default App
