import React from 'react'
import { useState, useEffect,  createContext, useContext } from 'react'
import './App.css'
import useFetch from './useFetch'
import ButtonAppBar from './ButtonAppBar'
import Datos from './Datos'
import BlockOfPosts from './BlockOfPosts'



export const Context = createContext('default value')

function App() {

   const [title, setTitle] = useState('news')
   const [datos, setDatos] = useState([])

   const url = 'https://www.reddit.com/r/'+title+'.json'
   const {data,error,loading} = useFetch(url)

   console.log('data : ',data)
   console.log('error : ',error)
   console.log(loading)

   !data===null
   ? setDatos(data)
   :null

   useEffect(() => {
    // console.log('que estoy dentro !!!')
   // console.log(datos)
   },[datos])
   

  return (
     <>
     <Context.Provider value={data}>

        <ButtonAppBar title={title} onChange={(e) => setTitle(e)}/>

        <BlockOfPosts />  

        
     </Context.Provider>
     {/* {data?.data.children.map(post => 
      <div>{post.data.title}</div>
    )} */}
     </>
  )
  
}

export default App
