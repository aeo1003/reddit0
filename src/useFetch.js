import { useEffect, useState } from "react"
// import axios from "axios"


export default function useFetch(url){

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
                    setLoading(false)
                }
                catch(error){
                    setError(error)
                    setLoading(false)
                }                
            }            
        )()
        //setLoading(false)
    }, [url])
    
   //  console.log('loading es  : ',loading)
    
     return { data, error, loading } 

}

