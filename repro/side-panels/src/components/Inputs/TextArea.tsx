import React from 'react';
import { InputContainer } from './SharedInputStyles';
import { TextArea } from './TextArea.styles';

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string | undefined;
  className?: string;
}

export default React.forwardRef(function GenericTextArea(
  { label, error, className, ...textAreaProps }: TextAreaProps,
  ref: React.Ref<HTMLTextAreaElement>,
) {
  const textAreaId = React.useId();

  return (
    <InputContainer
      className={className}
      error={!!error}
      disabled={textAreaProps.disabled}
    >
      {label && (
        <label className="label" htmlFor={textAreaId}>
          {label}
        </label>
      )}
      <TextArea
        className="input"
        id={textAreaId}
        ref={ref}
        {...textAreaProps}
      />
      {error && <span className="error">{error}</span>}
    </InputContainer>
  );
});
