import React from 'react'

import { Box, Typography } from '@mui/material'
import ExerciseCard from './ExerciseCard'


const SimilarEx = (props) => {


    // const exercises = props. 

    console.log("this is  similar", props.target)


  return (

    <Box sx={{display:'flex',flexDirection:'column', alignItems:"center"}}>
        <Typography fontWeight={700} align='center'   variant='h2'>
            Similar Exercises
        </Typography>

     
        <div style={{display:"flex",flexWrap:"wrap" , justifyContent:'center'}}>


        {
            props.target.slice(0,6).map((element,index)=>{

                return(

                    <ExerciseCard key={index} element={element}/>

                )

            })
        }
        </div>


    </Box>
  )
}

export default SimilarEx