/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div<{ isFocused: boolean; error: boolean }>`
  display: flex;
  flex-direction: column;
  margin: 15px 0;
  position: relative;
  margin-top: 30px;

  & > input {
    border: 1px solid ${(props) => (props.error ? '#e77674' : '#eee')};
    border-radius: 0.25rem;
    background-color: transparent;
    outline: none;
    padding: 12px 3px 12px 15px;
    font-size: 16px;
    transition: all 0.2s ease;
    z-index: 500;
  }
  & > label {
    color: #757575;
    position: absolute;
    top: 15px;
    left: 15px;
    transition: all 0.2s ease;
    z-index: 500;

    ${(props) =>
      props.isFocused &&
      `
      font-size: 13px;
      transform: translateY(-23px) translateX(-5px);
      z-index: 501;
      background: white;
      padding: 0 8px;
    `}
  }
`;

interface InputProps {
  value: string;
  type: string;
  label: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
}

export const Input: React.FC<InputProps> = ({
  value,
  type,
  label,
  onChange,
  onBlur = () => {},
  ...props
}) => {
  const [focused, setFocused] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleOnFocus = () => {
    setFocused(true);
  };

  const handleOnBlur = () => {
    setFocused(false);
    onBlur();
  };

  const validateValue = (val: string) => {
    if (type === 'email') {
      // VERY simple email validation
      // TODO: Move validation | Maybe passs them as props
      if (val.indexOf('@') === -1) {
        setError('email is invalid');
      } else {
        setError(null);
      }
    }
  };

  // Handles on Input change
  const handleOnChange = (val: string) => {
    validateValue(val);
    onChange(val);
  };

  const renderLabel = () => {
    if (label) {
      // if we have an error
      if (error) {
        return <label>{error}</label>;
      }

      return <label>{label}</label>;
    }
    return null;
  };

  const isFocused = focused || String(value);

  return (
    <InputContainer isFocused={Boolean(isFocused)} error={Boolean(error)}>
      <>
        {renderLabel()}
        <input
          value={value}
          type={type}
          onChange={(e) => handleOnChange(e.target.value)}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          {...props}
        />
      </>
    </InputContainer>
  );
};
