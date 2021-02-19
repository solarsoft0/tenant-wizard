import React from 'react';
import ReactDOM from 'react-dom';
import styled, { keyframes } from 'styled-components';

const motion = () => keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const DualRingSpinner = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;

  :after {
    content: ' ';
    display: block;
    width: 50px;
    height: 50px;
    margin: 1px;
    border-radius: 50%;
    border: 5px solid ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary} transparent
      ${({ theme }) => theme.colors.primary} transparent;
    animation: ${() => motion()} 1.2s linear infinite;
  }
`;

const LoaderWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: auto;
`;

export const LoadingPanel: React.FC<{ selector?: string }> = ({ selector }) => {
  // validate selector
  const gridContent = document && selector && document.querySelector(selector);

  // If selector available, create a portal to it
  return gridContent ? (
    ReactDOM.createPortal(<DualRingSpinner />, gridContent)
  ) : (
    <LoaderWrapper>
      <DualRingSpinner />
    </LoaderWrapper>
  );
};
