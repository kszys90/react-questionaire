import React from "react";
import StyledRadioBody from './RadioBody.styled'

const RadioBody = props => {
    return (
        <StyledRadioBody variant={props.variant}>
            {props.children}
        </StyledRadioBody>
    )
}

export default RadioBody