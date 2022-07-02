import { Box, Stack,Button, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import exersizeContext from '../context/exersize/exersizeContext'
import { fetchData, options, youtubeOptions } from '../utils/fetchData';
import Detail from '../Components/Detail';
import ExVideos from '../Components/ExVideos';
import SimilarEx from '../Components/SimilarEx';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const ExerciseDetail = ()=>{



const [detail,setdetail] = useState({})

const [videos, setvideos] = useState([])

const [target,settarget] = useState([]);

const currId = useParams();

// console.log("currid is " ,typeof currId)

useEffect(() => {
    
    const fetchEx = async()=>{

        const data = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/exercise/${currId.id}`,options)
                
        setdetail(data)
        // console.log(detail)


        const similar = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/target/${detail.target}`,options)

        // console.log(similar)

        settarget(similar)



        const exVideosData = await fetchData(`https://youtube-search-and-download.p.rapidapi.com/search?query=${detail.name}`,youtubeOptions)
        console.log("this is name", detail.name)
        console.log("this is videos data",exVideosData)
        setvideos(exVideosData.contents)
        
    }

    fetchEx();
 
}, [detail.name])





    return(

        <div className='detailPageContainer'>

        <Button variant='contained' color="error" style={{marginLeft:"40px",border:"2px solid red",borderRadius:"10px", display:"inline",padding:"10px"}} fontWeight={700}> <ArrowBackIosIcon></ArrowBackIosIcon> Go Back</Button>

        <Box style={{margin:"20px"}}>
          <Detail detail={detail}/>

        <SimilarEx  target = {target} />
        <ExVideos videos ={videos} />


        </Box>
        </div>
       
    )

}

export default ExerciseDetail;