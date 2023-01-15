import styled, { css } from 'styled-components';

const DefaultStyleText = styled.p`
    text-align: center;
`

const StyledTextSize = styled(DefaultStyleText)(({ size, theme }) => theme.text.size[size])
const StyledText = styled(StyledTextSize)(({ variantStyle, theme, variant }) => theme.text.styled[variant][variantStyle])

// const StyledText = DefaultStyleText

export default StyledText; 