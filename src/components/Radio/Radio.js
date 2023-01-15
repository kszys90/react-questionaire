import React from "react";
import StyledRadio from './Radio.styled'

const Radio = props => {
    return (
        <StyledRadio>
            {props.children}
        </StyledRadio>
    )
}

export default Radio