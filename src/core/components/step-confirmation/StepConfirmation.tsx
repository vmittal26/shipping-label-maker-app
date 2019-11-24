
import React from 'react';
import PaperStyled from '../../utils/styled-components/PaperStyledJss';
import Spinner from '../spinner/Spinner';
import ErroMessageContainer from '../error-message-container/ErrorMessageContainer';
import { TypographyStyled } from '../../utils/styled-components/TypographyStyled';

type StepConfirmationType = {
  isFormValid: boolean
}

const StepConfirmation: React.FC<StepConfirmationType> = (props: StepConfirmationType) => {

  const [isValidating, setValidating] = React.useState<boolean>(true);
  const { isFormValid } = props;

  React.useEffect(() => {
    setTimeout(setValidating, 500, false);
  }, []);

  let stepConfirmation = <Spinner />;

  if (!isValidating) {
    stepConfirmation = (<PaperStyled>
      {isFormValid ?<TypographyStyled textcolor="green" variant="h5" component="h5">All steps are complete!</TypographyStyled> : <ErroMessageContainer errorMessage=" Some of the information is incomplete! , Please revist steps to enter missing information" />}
    </PaperStyled>)
  }

  return stepConfirmation;
}

export default StepConfirmation;
