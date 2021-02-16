import styled from 'styled-components';

import { positionAbsolute, transformationMix } from 'assets/utils/mixins';
import { FadeIn, FadeOut } from 'assets/utils/animations';
/**
 * Summary:
 *  1. Stepper
 *  2. Wizard Panel
 */

/* === START - Stepper (1) === */
export const ProgressBarWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
  width: 80%;
  margin-bottom: 1rem;
`;

export const ProgressBarButton = styled.button<{ isActive?: boolean }>`
  // Define variables used in the block
  --btn-offset-vert: 20px;
  --btn-circle-decor-dimensions: 13px;

  position: relative;
  padding-top: var(--btn-offset-vert);

  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.lightGray};
  background-color: transparent;
  text-indent: -9999px;

  border: none;
  outline: none !important;
  cursor: pointer;

  ${transformationMix({ _duration: '0.15s' })}

  // Hide step text on mobile
  @media (min-width: 500px) {
    text-indent: 0;
  }

  // Add step (circle)
  &:before {
    content: '';

    display: block;
    width: var(--btn-circle-decor-dimensions);
    height: var(--btn-circle-decor-dimensions);
    ${positionAbsolute({ _top: '0', _left: '50%' })}

    transform: translateX(-50%);
    transition: all 0.15s linear 0s, transform 0.15s cubic-bezier(0.05, 1.09, 0.16, 1.4) 0s;

    border: 2px solid currentColor;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.white};
    box-sizing: border-box;
    z-index: 3;
  }

  // Add line between steps
  &:after {
    content: '';

    display: block;
    width: 100%;
    height: 2px;
    ${positionAbsolute({ _top: '5px', _left: `calc(-50% - 13px / 2)` })}

    background-color: ${({ isActive, theme }) =>
      isActive ? theme.colors.primary : theme.colors.lightGray};

    ${transformationMix({ _duration: '0.15s' })}

    z-index: 1;
  }

  // Remove the line after the last step
  &:first-child {
    &:after {
      display: none;
    }
  }

  // Define css properties for active steps
  ${(props) =>
    props.isActive &&
    `
      color: ${props.theme.colors.primary};

      &:before {
        transform: translateX(-50%) scale(1.2);

        background-color: ${props.theme.colors.primary};
      }
    `}
`;
/* === END - Stepper (1) === */

/* === START - Wizard Panel (1) === */
export const FormPanel = styled.div<{ isActive: boolean }>`
  width: 80%;
  height: 0;

  opacity: 0;
  visibility: hidden;
  transform: scale(0.9);

  padding: 1.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;

  visibility: ${({ isActive }) => (isActive ? 'visible' : 'hidden')};
  animation: ${({ isActive }) => (isActive ? FadeIn : FadeOut)} 0.5s linear;
  transition: visibility 0.5s linear;

  ${({ isActive }) =>
    isActive &&
    `
    ${transformationMix};

    height: auto;

    opacity: 1;
    visibility: visible;
    transform: scale(1);
   `};
`;

export const ActionButtonWrapper = styled.div<{ isFirst: boolean; isLast: boolean }>`
  display: flex;
  align-items: center;
  justify-content: ${({ isFirst, isLast }) =>
    isFirst || isLast ? (isFirst ? 'flex-end' : 'flex-start') : `space-between`};

  margin-top: 1rem;
`;
/* === END - Wizard Panel (1) === */
