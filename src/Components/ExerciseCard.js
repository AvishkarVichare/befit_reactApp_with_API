import { Button, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import exersizeContext from '../context/exersize/exersizeContext'
 
const ExerciseCard = (props) => {
    console.log(props.element)

    const ex= useContext(exersizeContext)
    const { setid} = ex;
 
    return (
    <Box p="10px" width={350} 
    
    justifyContent="center" border="2px solid grey" m="20px" borderRadius="10px" style={{alignItems:"spaceBetween"}}>

        
        <Stack margin="10px" justifyContent="center" direction='row'>
          <Stack margin="10px">
          <Typography   variant='h6'>Body Part:</Typography>
          <Button color="error"  sx={{mx:"10px"}} variant="contained" >{props.element.bodyPart}</Button>
          </Stack>
          <Stack margin="10px" justifyContent="center">
          <Typography  variant='h6'>Equipment:</Typography>
          <Button color="success" variant="contained" >{props.element.equipment}</Button>
          </Stack>
        </Stack>
        
        <img style={{height:"200px"}} src={props.element.gifUrl} alt="" />

        
        <Stack sx={{backgroundColor:"#ececec" , padding:"10px",display:"flex",
        alignItems:"center", borderRadius:"20px",}} >
        <div style={{fontWeight:"700",textAlign:"center"}} >Name:</div>
        <Typography color="error" fontWeight={700} align='center' variant='h6'>  
        {props.element.name}
      </Typography>

      <Link  className="details" to={`/exerciseDetail/${props.element.id}`} >
        Details
      </Link>

        </Stack>

    </Box>
  )
}

export default ExerciseCard