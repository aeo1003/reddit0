import React, { useState, useEffect, useContext } from 'react'
//import * as API from "../services/GetInfo"
import {Box,Grid} from '@mui/material'
import {Masonry} from '@mui/lab'
import Datos from './Datos'
import { makeStyles } from "@mui/styles"
import { Context } from './App'
//import ScrollDialog from './ScrollDialog'


//import {motion} from 'framer-motion'



export default function BlockOfPosts() {

   const [childData, setChildData] = useState(false)


                                                    const useStyles = makeStyles(() => ({
                                                        container: {
                                                            padding: '10px 10px 10px 10px',
                                                        },
                                                        item: {
                                                            padding: '10px',
                                                                
                                                        },
                                                        }));


   // function bgcolor(v) { return API.prueba(temas,v) }

    const [tempComments, setTempComments] = useState([]) 

    const handleMenuClose = (e) => {
        setChildData(false)
    }

    React.useEffect(() => {      
    },[tempComments])
 
    const passData = (e) => {
        setChildData(e)
    }

    const passComments = (e) => {
        if (e && e.length > 0) {
            setTempComments(e)
           return e
        }
    }

   


    const value = useContext(Context)
   // console.log('y los datos son... ',value)


    return (
    
    <>
        <Box ml={2} mt={4}>
             <Masonry columns={{ xs: 1, sm: 3, md:4, lg:4 }} spacing={2}>
            
           {
            (value && value !== undefined && value.data.children.length > 0)  //? posts.map(post =>          
              ?  value.data.children.map(item =>
                <Grid item key={item.data.created}  xs={4} sm={4} md={2}>
                    
                        <Datos 
                            key= {item.data.created}
                            created={item.data.created}  
                            perma={item.data.permalink}
                            ups={item.data.ups}
                            subject={item.data.title}
                            author={item.data.author}
                            num_comments={item.data.num_comments}
                            utc={item.data.created_utc} 
                            topic={item.data.link_flair_text}
                        />
                    
                </Grid> 
            
                )
                 : <div>No existe ese subreddit</div>
            }
                
            </Masonry>
          </Box>
         
         
    </>

    )
}