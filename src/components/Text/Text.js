import React from 'react';
import StyledText from './Text.styled'

const Text = props => {
    return (
        <StyledText size={props.size} variant={props.variant} variantStyle={props.variantStyle}>{props.children}</StyledText >
    );
}

export default Text;