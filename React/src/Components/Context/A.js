import React,{useState} from 'react'
import B from './B'
import mycontext from '../../ContextObject/context'


export default function A() {
     const [state,setState]=useState({
         name:"Edyst",
         email:"Edyst@gmail.com"
     })
    return (
        <div>
            <h2>A Component</h2>
            <mycontext.Provider value={state}>
            <B />
            </mycontext.Provider>
        </div>
    )
}
