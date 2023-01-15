import React from "react";
import StyledTextArea from './TextArea.styled'

const TextArea = props => {

    return (
        <StyledTextArea value={props.value} onChange={(e) => props.parentCallback(e.target.value)}> </StyledTextArea>
    )
}

export default TextArea