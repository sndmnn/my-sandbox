import React, { MouseEventHandler } from 'react';
import StylableComponent from '../StylableComponent';
import { ButtonContainer } from './PrimaryButton.styles';

interface ComponentProps extends StylableComponent {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

const PrimaryButton: React.FC<ComponentProps> = ({
  onClick,
  className,
  children,
}) => {
  return (
    <ButtonContainer className={className} onClick={onClick}>
      {children}
    </ButtonContainer>
  );
};

export default PrimaryButton;
