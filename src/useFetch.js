import { useEffect, useState } from "react"
// import axios from "axios"


export default function useFetch(url){
    //console.log('la url es : ',url)
    const [data,setData] = useState(null)
    const [error,setError] = useState(null)
    const [loading,setLoading] = useState(false)
    const [status,setStatus] = useState(null)

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
                    setStatus(res.status)
                }
                catch(error){
                    setError(error)
                    setLoading(false)
                }                
            }            
        )()
        //setLoading(false)
    }, [url])
    // error !== null
    // ? console.log(error.response)
    // : null
     //console.log('data es  : ',data)
    
     return { data, error, loading, status } 

}

