import { Box, Stack, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import exersizeContext from '../context/exersize/exersizeContext'
import { fetchData, options, youtubeOptions } from '../utils/fetchData';
import Detail from '../Components/Detail';
import ExVideos from '../Components/ExVideos';

const ExerciseDetail = ()=>{



const [detail,setdetail] = useState({})

const [videos, setvideos] = useState([])


const currId = useParams();

// console.log("currid is " ,typeof currId)

useEffect(() => {
    
    const fetchEx = async()=>{

        const data = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/exercise/${currId.id}`,options)
                
        setdetail(data)
        // console.log(detail.name)

        const exVideosData = await fetchData(`https://youtube-search-and-download.p.rapidapi.com/search?query=${detail.name}`,youtubeOptions)
        // console.log("this is name", detail.name)
        // console.log(exVideosData)
        setvideos(exVideosData.contents)
        
    }

    fetchEx();
 
}, [])





    return(

        <Box >
          <Detail detail={detail}/>

        <ExVideos videos ={videos} />

        </Box>
       
    )

}

export default ExerciseDetail;