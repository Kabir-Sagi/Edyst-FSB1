import React,{useContext} from 'react'
import mycontext from '../../ContextObject/context'

 function D() {
    const data = useContext(mycontext)
    return (
        <div>
            <h2>D Component</h2>
            <h4>{data.email}</h4>
        </div>
    )
}

export default D
