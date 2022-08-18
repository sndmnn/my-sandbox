import React, { MouseEventHandler } from 'react';
import { ButtonContainer } from './PrimaryButton.styles';

interface ComponentProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  className?: string;
}

const PrimaryButton: React.FC<ComponentProps> = ({
  children,
  className,
  onClick,
}) => {
  return (
    <ButtonContainer className={className} onClick={onClick}>
      {children}
    </ButtonContainer>
  );
};

export default PrimaryButton;
