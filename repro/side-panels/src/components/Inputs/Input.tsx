import React from 'react';
import { InputContainer } from './SharedInputStyles';
import { Input } from './Input.styles';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  className?: string;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
}

/**
 * Generic input component that can be used to create multiple types of inputs.
 *
 * It may receive a validation function that will be called onBlur, or have an
 * error passed to it to display an error message. This allows the component to
 * be used with external form libraries as well as standalone.
 *
 * @param label the label for the input
 * @param validate a function that will be called onBlur to validate the input.
 * Receives the input value and should return an error message if invalid, or
 * `null` otherwise.
 * @param error an error message to display
 * @param className a class name to apply to the input container
 * @param containerProps additional props to pass to the container
 * @param inputProps additional props to pass to the input
 */
export default React.forwardRef(function GenericInput(
  { label, className, error, containerProps, ...inputProps }: TextInputProps,
  ref: React.Ref<HTMLInputElement>,
) {
  const inputId = React.useId();

  return (
    <InputContainer
      className={className}
      error={!!error}
      disabled={inputProps.disabled}
      {...containerProps}
    >
      {label && (
        <label className="label" htmlFor={inputId}>
          {label}
        </label>
      )}
      <Input
        className="input"
        id={inputId}
        type="text"
        ref={ref}
        aria-invalid={!!error}
        {...inputProps}
      />
      {error && <span className="error">{error}</span>}
    </InputContainer>
  );
});
