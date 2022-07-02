import React, { useContext } from "react";
import Home from "./Pages/Home";
import {Routes,Route} from 'react-router-dom'
import ExersizeState from "./context/exersize/ExersizeState";
import './App.css'
import ExerciseDetail from "./Pages/ExerciseDetail";
import exersizeContext from "./context/exersize/exersizeContext";


const App = () => {

return(
<>
    <ExersizeState>

        <Routes>


    <Route exact path="/" element={<Home/>}></Route>

    <Route exact path="/exerciseDetail/:id"  element={<ExerciseDetail/>}></Route>

        </Routes>
        </ExersizeState>

    </>
  )
}

export default App