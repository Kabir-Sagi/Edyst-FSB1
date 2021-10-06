import React,{useEffect,useState} from "react";


const UseEffect = ()=>{
          const [state,setState]=   useState("useEffect")
            useEffect(()=>{
                 console.log("ComponentDidMount") 
            },[])

 return   <div>
          <h3>{state}</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, praesentium.</p>
          <button onClick={()=>{ setState("useEffect hook updated")}}>Click me</button>
      </div>

}

export default UseEffect