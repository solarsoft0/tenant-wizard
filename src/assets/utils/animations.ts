import { keyframes } from 'styled-components';

export const FadeIn = keyframes`
  from {
    transform: scale(.5);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`;

export const FadeOut = keyframes`
  from {
    transform: scale(1);
    opacity: 1;
  }

  to {
    transform: scale(0.5);
    opacity: 0;
  }
`;
