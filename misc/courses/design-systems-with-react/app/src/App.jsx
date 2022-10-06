import React, { useState } from 'react';
import styled from 'styled-components';
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from './components/Buttons';
import SignUpModal from './components/SignUpModal';
import GlobalStyles from './styles/GlobalStyles';

const ButtonContainer = styled.div`
  & > * {
    margin: 0.5rem;
  }
`;

const App = () => {
  const [shouldShowModal, setShouldShowModal] = useState(false);

  return (
    <>
      {/* <ButtonContainer>
        <PrimaryButton modifiers={['small', 'error']}>
          Primary Button
        </PrimaryButton>
        <SecondaryButton>Secondary Button</SecondaryButton>
        <TertiaryButton>Tertiary Button</TertiaryButton>
      </ButtonContainer> */}

      <TertiaryButton onClick={() => setShouldShowModal((s) => !s)}>
        Toggle Modal
      </TertiaryButton>

      <SignUpModal
        shouldShow={shouldShowModal}
        setShouldShow={setShouldShowModal}
      />
      <GlobalStyles />
    </>
  );
};

export default App;
