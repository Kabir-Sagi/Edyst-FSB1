import React,{useState} from "react";

function Count() {
    
         function increaseCount() {
              setState(state + 1)
             
         }
  const [state,setState] = useState(0)
    return <div>
          <h2>Count Value:{state}</h2>
          <button onClick={increaseCount}>Update Count</button>
    </div>

}

export default Count