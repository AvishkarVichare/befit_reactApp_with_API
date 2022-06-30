import React,{useContext, useState} from 'react'

import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import BodyPartBox from './BodyPartBox'
import {Box, Typography} from '@mui/material'

import exersizeContext from '../context/exersize/exersizeContext'







const HorizontalScrollBar = (props) => {

const ex = useContext(exersizeContext)


   const {bodypart} = ex;

// console.log(bodypart[0])


  return (
  
    <ScrollMenu  >


        {bodypart.map((element,index)=>{
            return(
                <Box>

                <BodyPartBox bodypart={element} title={element.id || element} key={index} itemId={index}>
                </BodyPartBox>
                </Box>

            )
            
          })}
    </ScrollMenu>

  )
}

export default HorizontalScrollBar