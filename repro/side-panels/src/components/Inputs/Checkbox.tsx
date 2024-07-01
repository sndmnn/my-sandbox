import React from 'react';
import { CheckboxContainer } from './Checkbox.styles';

interface ComponentProps extends React.HTMLAttributes<HTMLInputElement> {
  className?: string;
  children: React.ReactNode;
}

export default React.forwardRef(function Checkbox(
  { className, children, ...props }: ComponentProps,
  ref: React.Ref<HTMLInputElement>,
) {
  const checkboxId = React.useId();

  return (
    <CheckboxContainer className={className}>
      <label htmlFor={checkboxId} className="checkbox-label">
        <input
          id={checkboxId}
          type="checkbox"
          className="checkbox-input"
          ref={ref}
          {...props}
        />
        {children}
      </label>
    </CheckboxContainer>
  );
});
