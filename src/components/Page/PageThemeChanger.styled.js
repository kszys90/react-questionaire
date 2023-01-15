import styled from 'styled-components';

const DefaultStylePageThemeChanger = styled.div`
    position: absolute;
    min-width: 120px;
    top: 20px;
    padding: 5px;
    right: 20px;
    background: red;
`
const StyledPageThemeChanger = styled(DefaultStylePageThemeChanger)(({ theme, variant }) => theme.page[variant])

export default StyledPageThemeChanger; 