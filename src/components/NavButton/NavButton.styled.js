import styled from 'styled-components';

const DefaultStyleNavButton = styled.button`
`

const StyledNavButtonSize = styled(DefaultStyleNavButton)(({ size, theme }) => theme.button.size[size])
const StyledNavButton = styled(StyledNavButtonSize)(({ variant, theme }) => theme.button.variant[variant])


export default StyledNavButton; 