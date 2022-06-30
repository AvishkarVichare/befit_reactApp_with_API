import { Box, Typography , Stack} from '@mui/material'
import React from 'react'

const ExVideos = (props) => {

    const {videos} = props;
    // const exvids =videos.contents

    console.log("it is",typeof videos)
    console.log("this sar",videos[1])
  return (
    <>
    
    <Box>

    <Typography variant='h3'>
        Watch Videos
    </Typography>

    <Stack sx={{
        margin:"29px"
    }} gap="20px" direction='row'>

{
    videos.slice(1,6).map((item,index)=>{
        return (
            <a target="_blank"key={index} href={`https://www.youtube.com/watch?v=${item.video.videoId}`}>

            <img src={`${item.video.thumbnails[0].url}`}  alt="jno" />

            </a>
        )
    })
}

    </Stack>

    </Box>

    </>
  )
}

export default ExVideos