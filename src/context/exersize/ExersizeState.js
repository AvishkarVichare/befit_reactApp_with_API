

import exersizeContext from "./exersizeContext";
import { useState  } from "react";


const ExersizeState = (props)=>{
    const [id, setid] = useState("")
    const [exercises, setexercises] = useState([])
    const [bodypart, setbodypart] = useState([])

    const [bd, setbd] = useState("")


return(

    <exersizeContext.Provider value={{exercises, setexercises,bodypart, setbodypart,bd, setbd,id,setid}}>

    {props.children}
    </exersizeContext.Provider>
)

}

export default ExersizeState;