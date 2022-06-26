import { useEffect, useState } from "react"
import axios from "axios"


export default function useFetch(url){
    //const url = 'https://www.reddit.com/r/'+title+'.json'
   // const url = 'https://www.reddit.com/r/'+title+'.json'
   // console.log('CARGANDO ',url)
    const [data,setData] = useState(null)
    const [error,setError] = useState(null)
    const [loading,setLoading] = useState(false)

    useEffect( () => {
        
        (
            async function() {
                setLoading(true)
                setData([])
                setError(null)
                
                try{
                    const res = await fetch(url)
                    const data = await res.json()
                    setData(data)
                    
                }
                catch(error){
                    setError(error)
                }
                
            }
            
        )()
        //setLoading(false)
    }, [url])
    
    //setLoading(false)
     console.log('loading es  : ',loading)
    // console.log('data antes de salir : ',data)
    // console.log('error antes de salir : ',error)
   // if(data !== null){return { data, error, loading } }else return  { failData, failError, failLoading } 
    return { data, error, loading } 

}

