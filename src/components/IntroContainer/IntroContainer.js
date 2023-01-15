import React from 'react';
import StyledIntroContainer from './IntroContainer.styled'

const IntroContainer = props => {
    return (
        <StyledIntroContainer variant={props.variant}>{props.children}</StyledIntroContainer >
    );
}

export default IntroContainer;