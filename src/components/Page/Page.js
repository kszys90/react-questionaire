import React from 'react';
import StyledPage from './Page.styled'
import StyledPageThemeChanger from './PageThemeChanger.styled'


const Page = props => {
    function renderPage() {
        return (
            <StyledPage>
                <StyledPageThemeChanger
                    onClick={props.onClick}
                    variant={props.variant}
                >
                    Switch theme to: <br />
                    {props.variant === 'light' ? 'Dark' : 'Light'}
                </StyledPageThemeChanger>
                {props.children}
            </StyledPage >
        )
    }

    return (
        props.currentPage ? renderPage() : null
    );
}

export default Page;