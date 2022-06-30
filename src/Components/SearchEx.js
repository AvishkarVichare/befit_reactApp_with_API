import React, { useEffect, useContext , useState } from 'react'
import {Typography,Button,Stack,Box,TextField} from '@mui/material'
 
import { fetchData,options } from '../utils/fetchData'
import HorizontalScrollBar from './HorizontalScrollBar'

import exersizeContext from '../context/exersize/exersizeContext'

const SearchEx = (props) => {
const {} = props;
    // console.log(bodypart)

   const ex = useContext(exersizeContext)

   const {exercises,setexercises,bodypart,setbodypart} = ex;
   


    const [search, setsearch] = useState("")

    useEffect(() => {
      
        const bodyPartData = async()=>{
            const data =await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',options)
            // console.log(data)
            // console.log(bodypart)
            setbodypart(data);
        }
        
        
        
        bodyPartData();
    
    }, [])
    




const handleSearch = async()=>{

    if(search){
        const fetchExercises =await fetchData('https://exercisedb.p.rapidapi.com/exercises',options);


        const searchedExercises = fetchExercises.filter(element=>{    
            return (element.bodyPart.toLowerCase().includes(search) ||
            element.name.toLowerCase().includes(search) ||
            element.equipment.toLowerCase().includes(search)||
            element.target.toLowerCase().includes(search)
            )
        })

       

        setexercises(searchedExercises)
        console.log("searching in",exercises)

        
        window.scrollTo({ top: 1100,  });
    }

}


  return (
    <Box  >
        <Typography  fontWeight={700} align='center' variant='h4'>Start Building</Typography>
      <Stack my="40px" direction="row" px="10px">


<TextField onChange={(e)=>{  setsearch(e.target.value.toLowerCase())
}} placeholder='Search Exercise' fullWidth sx={{mx:"10px"}}/>


<Button onClick={handleSearch} color="error" variant='contained'>Search</Button>
</Stack>


<HorizontalScrollBar />

    </Box>
  )
}

export default SearchEx