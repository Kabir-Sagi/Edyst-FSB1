import React,{useState} from 'react'
import B from './B'


 function A() {
      const [state,setState] = useState("Edyst")
    return (
        <div>
             <h2>A Component</h2>
            <B data={state}   />
        </div>
    )
}

export default A
