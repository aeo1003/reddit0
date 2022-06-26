import axios from "axios"
import { useEffect, useState } from "react"

export async function myFetch(url){

    const [data,setData] = useState(null)
    const [error,setError] = useState(null)
    const [loading,setLoading] = useState(false)
    
   
//         try{
//             setLoading(true)
//             const response = await axios.get(url)
//             setData(response.data)
//         }catch(err){
//             setError(err)
//         }finally{
//             setLoading(false)
//         }

//     return { data, error, loading }
// }





try {
    // const res = await fetch(`https://www.reddit.com/r/${subreddit}/hot.json?limit=50`); //?limit=100
     
    // const data = await res.json();
 
 
 
 
     
    fetch(url)
  .then(response => response.json())
  .then(data => setData(data));

     
   //   if (!res.status !== 200) {
   //     console.log(res.status)
   //     // get error message from body or default to response status
   //     const error = (data && data.message) || res.status;
   //     return Promise.reject(error);
   // }
 
 
    // let d=[]
    // //console.log('data.data : ',data.data)
    //  if(data.data !== 'undefined' && data.data.children.length > 0){
    //      data.data.children.map(p => {
    //      (p.data.link_flair_text != 'meta')
    //        ? d.push(p)
    //        : null
    //      })
    //      return d
    //    }
 
   //      if (!res.status !== 200) {
   //     console.log('res.status : ',res.ok);
   //     //throw new Error(`Error! status: ${response.status}`);
   //     // get error message from body or default to response status
   //     const error = (data && data.message) || res.status;
   //     return Promise.reject(error);
   // }
     
 }catch (error) {
     setError(error);
    // throw new Error(`Error! status: ${response.status}`);
     //`<div>No existe ese subreddit</div>`
 }

 return {data,error}
}