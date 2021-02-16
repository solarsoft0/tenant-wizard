import styled from 'styled-components';
// TODO: Add outlined button feature
export const BaseButton = styled.button`
  position: relative;
  font-family: ${({ theme }) => theme.fonts[0]};
  cursor: pointer;
  text-decoration: none;
  font-style: normal;
  text-align: center;
  line-height: 1;
  margin: 0px;
  font-weight: 600;
  width: auto;
  font-size: 0.875rem;
  min-height: 2.625rem;
  min-width: 2.625rem;
  padding: 0px 1rem;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.primary};
  border: none;
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 10px, rgb(182 182 182 / 50%) 0px 1px 2px;
  border-radius: 6.25rem;
`;
