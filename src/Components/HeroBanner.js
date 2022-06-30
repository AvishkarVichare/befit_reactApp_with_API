import React from 'react'

import { Container,Box,Typography, Stack } from '@mui/material'
import BannerImg from '../assets/bannerImg.jpg'

const HeroBanner = () => {
  return (
    <>
    
    <Box height={500} position="relative" sx={{mt:{sm:"50px" ,xs:"20px", lg:"200px"}, ml:{lg:"50px",xm:"10px"} }} >

        <Stack mx="40px">

        <Typography sx={{color:"red"}} fontWeight={700} variant='h5'>BeFit</Typography>
        <Typography fontWeight={700} variant="h2">Welcome to</Typography>
        <br/>
        <Typography fontWeight={700} variant="h3">Fit World</Typography>

        </Stack>


        <img className='bannerImg'  src={BannerImg}/>
        {/* <img className='bannerImg'  style={{  position:"absolute",top:"0px",marginTop:"-300px" ,height:"600px",width:"600px",right:"-10px" , borderBottomLeftRadius:"50%"}} src={BannerImg}/> */}

    </Box>

    </>
  )
}

export default HeroBanner