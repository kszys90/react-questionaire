import React from "react";
import StyledNavButton from './NavButton.styled'

const NavButton = props => {
    return (
        <StyledNavButton size={props.size} variant={props.variant} onClick={props.onClick}>{props.children}</StyledNavButton>
    )
}

export default NavButton