import { ModalWrapper } from '../Modal';
import { Close, SignUp } from '../../assets';
import { PrimaryButton } from '../Buttons';
import {
  SignUpText,
  SignUpTitle,
  CloseModalButton,
} from './SignUpModal.styles';

const SignUpModal = () => {
  return (
    <ModalWrapper>
      <CloseModalButton aria-label="Close modal">
        <Close />
      </CloseModalButton>
      <img
        className="hero"
        src={SignUp}
        alt="Sign up for an account"
        aria-hidden="true"
      />

      <SignUpTitle>Sign Up</SignUpTitle>
      <SignUpText>
        Sign up today and gain access to a lot of cool things.
      </SignUpText>

      <PrimaryButton>Sign Up Now</PrimaryButton>
    </ModalWrapper>
  );
};

export default SignUpModal;
