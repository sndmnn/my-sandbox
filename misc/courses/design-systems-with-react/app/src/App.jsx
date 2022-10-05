import React from 'react';
import styled from 'styled-components';
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from './components/Buttons';
import SignUpModal from './components/SignUpModal';
import GlobalStyles from './styles/GlobalStyles';

// const ButtonContainer = styled.div`
//   & > * {
//     margin: 0.5rem;
//   }
// `;

const App = () => (
  <>
    {/* <ButtonContainer>
      <PrimaryButton modifiers={['small', 'error']}>
        Primary Button
      </PrimaryButton>
      <SecondaryButton>Secondary Button</SecondaryButton>
      <TertiaryButton>Tertiary Button</TertiaryButton>
    </ButtonContainer> */}
    <SignUpModal />
    <GlobalStyles />
  </>
);

export default App;
