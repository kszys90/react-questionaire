import React from 'react';
import StyledQuestionnaireBody from './QuestionnaireBody.styled'

const QuestionnaireBody = props => {
    return (
        <StyledQuestionnaireBody variant={[props.variant]}>{props.children}</StyledQuestionnaireBody>
    );
}

export default QuestionnaireBody;