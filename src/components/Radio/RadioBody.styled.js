import styled from 'styled-components';

const DefaultStyleRadioBody = styled.div`
    margin: 20px auto 0 auto;
    padding: 10px;
    width: 400px;
    border: 1px solid black;
`
const StyledRadioBody = styled(DefaultStyleRadioBody)(({ variant, theme }) => theme.radio.variant[variant])


export default StyledRadioBody; 