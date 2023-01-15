import styled, { css } from 'styled-components';

const DefaultStyleIntroContainer = styled.div`
    width: 400px;
    margin-left: auto;
    margin-right: auto;
`
const StyledIntroContainer = styled(DefaultStyleIntroContainer)(({ variant, theme }) => theme.introContainer[variant])

export default StyledIntroContainer; 