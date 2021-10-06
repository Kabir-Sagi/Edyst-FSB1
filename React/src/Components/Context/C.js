import React,{useContext} from 'react'
import D from './D'
import mycontext from '../../ContextObject/context'

export default function C() {

            const data= useContext(mycontext)
    return (
        <div>
            <h2>C Component</h2>
            <h4>{data.name}  </h4>
            <D />
        </div>
    )
}
