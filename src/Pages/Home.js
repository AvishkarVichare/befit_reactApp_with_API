import React,{useState} from 'react'
import Exercises from '../Components/Exercises'
import HeroBanner from '../Components/HeroBanner'
import SearchEx from '../Components/SearchEx'

const Home = () => {

  

  return (
    <>
    <HeroBanner/>
    <SearchEx />
    <Exercises/>
    </>
  )
}

export default Home