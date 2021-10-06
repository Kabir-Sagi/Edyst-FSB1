import React,{useState} from "react";


var State = ()=> {
  const [name,setName]= useState("ReactJS")
     const [content,setContent] = useState("Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, deleniti?")
   return   <div>
          <h2>{name}</h2>
          <p>{content}</p>
          <button onClick={()=>{setName("Express JS")}}>Change Title</button>
      </div>


}

export default State