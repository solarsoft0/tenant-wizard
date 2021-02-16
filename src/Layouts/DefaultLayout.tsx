import styled from 'styled-components';

export const MainWrapper = styled.main`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  max-width: 1000px;

  font-family: ${({ theme }) => theme.fonts[0]};
  background-color: ${({ theme }) => theme.colors.white};
`;
