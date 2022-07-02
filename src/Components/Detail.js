import React from 'react'
import { Typography,Stack } from '@mui/material'



import Img1 from '../assets/body-part.png'
import Img2 from '../assets/equipment.png'
import Img3 from '../assets/target.png'

const Detail = (props) => {


  const images = [
    {img:Img1,
    key:1,
    for: props.detail.bodyPart
    },
    {img:Img2,
    key:2,
    for: props.detail.equipment

    },
    {img:Img3,
    key:3,
    for:props.detail.target
    }
  ]




  return (
    <div className='detailContainer'>


        
            <Stack >

          <Typography fontWeight={700} gutterBottom variant='h2'>
                {props.detail.name}
            </Typography>

            <Typography variant='h6'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi blanditiis eveniet tenetur. Qui quibusdam, facere reprehenderit omnis corrupti fugiat natus esse quia aliquid molestiae id nemo placeat earum illo eaque?
               
            </Typography>

          {
            images.map((item,index)=>{
              return(
               <Stack gap={3} style={{
                display:"flex",
                alignItems:"center",
                marginTop:"10px"
               }} direction='row'>

              <div className='iconContainer'>
                 <img className='detailIcon' index={item.key} src={item.img} alt="nothing just img so go sleep" />
               </div>

               <Typography fontSize={30} fontWeight={700}ariant='h4'>
                  {item.for}
               </Typography>

               </Stack>
              )
            })
          }


            </Stack>
      
            <img className='detailImg' src={props.detail.gifUrl}  alt="" />

        
    </div>
  )
}

export default Detail