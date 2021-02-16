import styled from 'styled-components';

export const input = styled.input`
  transition-property: color, background-color, box-shadow;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  color: rgb(51, 51, 51);
  background: rgb(250, 250, 250);
  border: 0px solid transparent;
  box-shadow: none;
  appearance: none;
  font-weight: 400;
  border-radius: 0.5rem;
  padding: 0px 1rem;
  width: 100%;
  position: relative;
  font-size: 1rem;
  min-height: 3.25rem;
  flex: 1 1 0%;
`;
