import React from "react";
import StyledRadioTitle from './RadioTitle.styled'

const RadioTitle = props => {
    return (
        <StyledRadioTitle>
            {props.children}
        </StyledRadioTitle>
    )
}

export default RadioTitle