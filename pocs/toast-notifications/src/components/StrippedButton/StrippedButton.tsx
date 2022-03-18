import React, { MouseEventHandler } from 'react';
import { StrippedButtonContainer } from './StrippedButton.styles';

const StrippedButton: React.FC<{
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}> = ({ className, onClick, children }) => (
  <StrippedButtonContainer className={className} onClick={onClick}>
    {children}
  </StrippedButtonContainer>
);

StrippedButton.defaultProps = {
  className: '',
  onClick: undefined,
};

export default StrippedButton;
