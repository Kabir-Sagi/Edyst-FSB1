import React,{useState} from "react";
import axios from "axios";
import './Axios2.css'


const Axios2 = ()=>{
   const [data,setData] = useState([])
    const getData = ()=>{
         axios.get("https://jsonplaceholder.typicode.com/comments").then((res)=>{
             console.log(res.data)
             setData(res.data)

         },()=>{

         alert("Error while getting data")
         })
    }
  
 return     <div id="div">
         {
             data.map(function(element,index){
                 return <ul key={index + 1}>
                     <li>{element.id}</li>
                     <li>{element.name}</li>
                     <li>{element.email}</li>
                 </ul>
             })
         }

         <button onClick={getData}>Get Data</button>
      </div>
}

export default Axios2