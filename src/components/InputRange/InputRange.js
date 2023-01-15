import React from "react";
import StyledInputRange from './InputRange.styled'

const InputRange = props => {

    // function handleClick(e) {
    //     props.parentCallback('hmm')
    // }
    //     <div>
    //         <button onClick={handleClick}>Click this child!</button>
    //     </div>

    return (
        <>
            <div>
                <StyledInputRange type="range" name="rating" min="1" max="10" value={props.value} onChange={(e) => props.parentCallback(e.target.value)} />
            </div>
            <div>
                <h4>{props.value === '' ? 'Waiting for your rate' : 'Current rating: ' + props.value}</h4>
            </div>
        </>
    )
}

export default InputRange
