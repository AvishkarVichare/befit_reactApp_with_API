import React, { useContext } from 'react'
import Logo from '../assets/logo.png'
import { Box ,Stack ,Typography } from '@mui/material'
import exersizeContext from '../context/exersize/exersizeContext'
const BodyPartBox = (props) => {

  const ex= useContext(exersizeContext)

  const {bd,setbd} = ex;

  return (
    <Box 
    sx={props.bodypart===bd?{borderTop:"2px solid red",borderBottom:"2px solid red"}:{border:"none"} }
    onClick={ ()=>{ setbd(props.bodypart)
    } }
    
    mx="20px" >
        <Stack >

    <img style={props.bodypart===bd?{height:"200px"}:{height:"100px"}}  src={Logo} alt="bodypart" />
    <Typography align="center" variant='h5' >
{props.bodypart}
    </Typography>

    
        </Stack>

    


    </Box>
  )
}

export default BodyPartBox