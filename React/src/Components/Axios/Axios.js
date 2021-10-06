import React,{useState,useEffect} from "react";
import axios from 'axios'


const Axios  = ()=>{
     const [state,setState] = useState([]) 

         useEffect(() => {
             console.log("Called Multiple times")
               sendRequest()
            
         },[])

      const sendRequest = ()=>{
            axios.get("https://jsonplaceholder.typicode.com/users")
            .then((res)=>{
               console.log(res.data)
               setState(res.data)

            },(errorMsg)=>{
                alert("Error while getting the data")
                console.log(errorMsg)
            })
      }

    return <div>
           <h2>Axios Example</h2>
           <button onClick={sendRequest}>Send Request</button>
       { state.length > 0 ? <table>
                   <thead>
                       <tr>
                           <th>ID</th>
                           <th>NAME</th>
                           <th>EMAIL</th>
                           <th>CITY</th>
                       </tr>
                   </thead>
                   <tbody>
                       {state.map(function(ele,index){
                           return <tr key={index}>
                                  <td>{ele.id}</td>
                                  <td>{ele.name}</td>
                                  <td>{ele.email}</td>
                                  <td>{ele.address.city}</td>
                                </tr>
                       })}
                   </tbody>
               </table>
                : <div>No Data</div>}
               
    </div>
}

export default Axios