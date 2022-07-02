import React, { useContext, useEffect, useState } from 'react'
import { Container } from '@mui/system'

import exersizeContext from '../context/exersize/exersizeContext'

import { fetchData, options } from '../utils/fetchData'
import { Typography, Pagination , Box, Button, Stack} from '@mui/material'

import ExerciseCard from './ExerciseCard'
import BodyPartBox from './BodyPartBox'

const Exercises = () => {


    const ex= useContext(exersizeContext)

    const {exercises,bd,setbd,setexercises} = ex;


let [currentPage,setcurrentPage] =useState(1);

 



    useEffect(() => {

        const fetchEx = async()=>{
        const data =await fetchData(`https://exercisedb.p.rapidapi.com/exercises`,options)

        if(bd){
          // console.log("this is bd",bd)
          setexercises(data.filter(e=>{
            return e.bodyPart===bd;
          }))
        }
        else{

          setexercises(data)
        }
        
      } 
     fetchEx(); 
     


    }, [bd])


   const lengthOfExercise = 9;

    let lastIndex = currentPage*lengthOfExercise
   let firstIndex = lastIndex-lengthOfExercise

    
   const exercisesOnCurrentPage = exercises.slice(firstIndex,lastIndex)

const handleNext = (e,value)=>{
      console.log("cp is",value)
      setcurrentPage(value);
      window.scrollTo({top:1000})

}



    // console.log("this is exercise",exercisesOnCurrentPage)

  return (
    <Box id="exercises" className='exerciseContainer' margin="10px" sx={{ marginTop:{lg:"150px",sm:"60px" , xs:"50px"}}} justifyContent="center"
  >
        
    <Typography align='center' variant="h4">View Exercises</Typography>

    <Box   style={{ justifyContent:"center",display:"flex", marginTop:"20px",flexWrap:"wrap" ,flexDirection:"row"}}>

    {exercisesOnCurrentPage.map(((element,index)=>{
        return(
        <ExerciseCard key={index} element={element} ></ExerciseCard>
        )
    }))}
    </Box>
    
    <Stack >

    <Pagination sx={{display:"flex", justifyContent:"center"}} value={currentPage} onChange={handleNext} count={parseInt(exercises.length/lengthOfExercise)}/>

    </Stack>

    </Box>
  )
}

export default Exercises