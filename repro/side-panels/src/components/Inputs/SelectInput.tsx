import React from 'react';
import { InputContainer } from './SharedInputStyles';
import { Select } from './SelectInput.styles';

interface Option extends React.OptionHTMLAttributes<HTMLOptionElement> {
  label: string;
  value: string;
}

interface ComponentProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: Option[];
  className?: string;
  tooltip?: string;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
}

export default React.forwardRef(function SelectInput(
  {
    label,
    options,
    error,
    className,
    containerProps,
    ...props
  }: ComponentProps,
  ref: React.Ref<HTMLSelectElement>,
) {
  const selectId = React.useId();

  return (
    <InputContainer
      error={!!error}
      className={className}
      disabled={props.disabled}
      {...containerProps}
    >
      {label && (
        <label htmlFor={selectId} className="label">
          {label}
        </label>
      )}
      <Select id={selectId} ref={ref} className="input" {...props}>
        {options.map((option) => (
          <option key={option.value} {...option}>
            {option.label}
          </option>
        ))}
      </Select>
      {error && <span className="error">{error}</span>}
    </InputContainer>
  );
});
