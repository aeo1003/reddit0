import React from 'react'
import { useState, useEffect, useRef, createContext, useContext } from 'react'
import './App.css'
import useFetch from './useFetch'
import ButtonAppBar from './ButtonAppBar'
import Datos from './Datos'
import BlockOfPosts from './BlockOfPosts'



export const Context = createContext('default value')



function App() {

   const [title, setTitle] = useState('news')
   const [datos, setDatos] = useState([])
   const [errors, setErrors] = useState([])

   const url = 'https://www.reddit.com/r/'+title+'.json'
  
   // const refBar = useRef()
   const {data,error,loading} = useFetch(url)
   

   console.log('data : ',data)
   console.log('error : ',error)
   console.log('loading : ',loading)



   !data===null && error === null
   ? setDatos(data)
   :null

   !data===null && error !== null
   ? setErrors(error)
   :null

   useEffect(() => {
    // console.log('que estoy dentro !!!')
   setTitle(title)
   },[])

   function cambia (e) {
      setTitle(e)
   }
   


  return (
     <>
         <Context.Provider value={data}>
            <ButtonAppBar title={title} onChange={(e) => {cambia(e)} }/>
            <BlockOfPosts />
         </Context.Provider>
     </>
  )
  
}

export default App
