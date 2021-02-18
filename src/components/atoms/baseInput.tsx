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
  errorMessage?: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  // Index signature
  [key: string]: unknown;
}

export const Input: React.FC<InputProps> = ({
  value,
  type,
  label,
  onChange,
  errorMessage,
  onBlur = () => {},
  ...props
}) => {
  const [focused, setFocused] = React.useState(false);

  const handleOnBlur = () => {
    setFocused(false);
    onBlur();
  };

  const renderLabel = () => {
    if (label) {
      // handle the error message
      if (errorMessage) {
        return <label>{errorMessage}</label>;
      }
      // no error, return label
      return <label>{label}</label>;
    }
    return null;
  };

  const isFocused = focused || String(value);

  return (
    <InputContainer isFocused={Boolean(isFocused)} error={Boolean(errorMessage)}>
      <>
        {renderLabel()}
        <input
          value={value}
          type={type}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={handleOnBlur}
          {...props}
        />
      </>
    </InputContainer>
  );
};
