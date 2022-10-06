import { useSpring, animated, config } from 'react-spring';
import { ModalWrapper } from '../Modal';
import { Close, SignUp } from '../../assets';
import { PrimaryButton } from '../Buttons';
import {
  SignUpText,
  SignUpTitle,
  CloseModalButton,
} from './SignUpModal.styles';

const SignUpModal = ({ shouldShow, setShouldShow }) => {
  const animation = useSpring({
    opacity: shouldShow ? 1 : 0,
    transform: shouldShow ? `translateY(0%)` : `translateY(-125%)`,
    config: config.slow,
  });

  return (
    <animated.div style={animation}>
      <ModalWrapper>
        <CloseModalButton
          aria-label="Close modal"
          onClick={() => setShouldShow(false)}
        >
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
    </animated.div>
  );
};

export default SignUpModal;
