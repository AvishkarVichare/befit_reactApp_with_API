import React,{useState} from 'react'
import Exercises from '../Components/Exercises'
import HeroBanner from '../Components/HeroBanner'
import NavBar from '../Components/NavBar'
import SearchEx from '../Components/SearchEx'

const Home = () => {

  

  return (
    <>
    <NavBar/>
    <HeroBanner/>
    <SearchEx />
    <Exercises/>
    </>
  )
}

export default Home