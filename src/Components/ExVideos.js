import { Box,Button, Typography , Stack} from '@mui/material'
import React from 'react'

const ExVideos = (props) => {

    const {videos} = props;
    // const exvids =videos.contents

    // console.log("it is",typeof videos)
    // console.log("this sar",videos[1])
  return (
    <>
    
    <Box style={{display:'flex', flexDirection:'column', alignItems:'center',marginTop:'200px'}}>

    <Typography gutterBottom fontWeight={700} align='center' variant='h3'>
        Watch Videos
    </Typography>

    <div style={{display:"flex",justifyContent:'center', height:"200px",flexWrap:"wrap"}}>


{
    videos.slice(1,7).map((item,index)=>{
        return (
            <a className='videoMain' target="_blank"key={index} href={`https://www.youtube.com/watch?v=${item.video.videoId}`}>

            <img className='thumbnail' src={`${item.video.thumbnails[0].url}`}  alt="video" />

           <Stack style={{color:"#1f1f1f"}}>
           <Typography width='350px' >
                {item.video.title}
            </Typography>
                <Typography  width='350px' >
                   <span style={{fontWeight:"800"}}>  channel:</span>    {item.video.channelName}
                </Typography>
           </Stack>
            </a>
        )
    })
}

    </div>

    </Box>

    </>
  )
}

export default ExVideos