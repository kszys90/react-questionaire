import React from "react";

const Nav = props => {
    return (
        <div style={{
            position: 'absolute',
            width: '540px',
            bottom: '20px'
        }}>
            {props.children}
        </div>
    )
}

export default Nav