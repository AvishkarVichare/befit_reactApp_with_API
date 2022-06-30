import React from 'react'
import { Typography,Stack } from '@mui/material'

const Detail = (props) => {
  return (
    <div className='detailContainer'>


        
            <Stack>

          <Typography gutterBottom variant='h2'>
                {props.detail.name}
            </Typography>

            <Typography variant='h6'>

                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci possimus itaque dicta neque quo earum maxime nemo in quos, sit reprehenderit delectus laborum obcaecati assumenda fugiat repellat error. Eligendi, consequatur?
            </Typography>
            </Stack>
      
            <img className='detailImg' src={props.detail.gifUrl}  alt="" />

        
    </div>
  )
}

export default Detail