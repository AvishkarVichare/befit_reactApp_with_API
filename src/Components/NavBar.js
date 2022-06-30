import React from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'

const NavBar = () => {
  return (
  <Stack  sx={{gap:{sm:"120px",xs:"50px"},mt:"20px"}} direction="row">

    <Link to="/">
        <img style={{height:"48px"}} src={Logo} alt="" />
    </Link>

    <Stack sx={{alignItems:"center"}} gap="20px" alignItems="flex-end" direction="row">
        <Link to="/">Home</Link>
        <a href="#exercises">Excersises</a>
    </Stack>

  </Stack>
  )
}

export default NavBar