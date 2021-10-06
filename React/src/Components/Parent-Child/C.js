import React from 'react'
import D from './D'

function C(props) {
    return (
        <div>
             <h2>C Component</h2>
            
             <D information={props.info} />
        </div>
    )
}
export default C
