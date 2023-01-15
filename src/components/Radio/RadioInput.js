import React from "react";
import StyledRadioInput from './RadioInput.styled'

const RadioInput = props => {
    return (
        <StyledRadioInput>
            <input
                type="radio"
                value={props.value}
                checked={props.checked}
                onChange={props.onChange}
            />
            {props.children}
        </StyledRadioInput>
    )
}

export default RadioInput