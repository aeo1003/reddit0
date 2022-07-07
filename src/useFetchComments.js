import { useEffect, useState } from "react"
// import axios from "axios"


const handleData = (callback) => {
    if (cData){
      callback(cData);
      setData(null);
    }
  }

  const handleError = (callback) => {
    if (cError){
      callback(cError);
      setError(null);
    }
  }

export default function useFetchComments(url){
    //console.log('la url es : ',url)
    const [cData,setData] = useState(null)
    const [cError,setError] = useState(null)
    const [cLoading,setLoading] = useState(false)
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
       // console.log('-----',cData)
        return { cData, handleData, cError, handleError, cLoading, status }         
    // }

}

