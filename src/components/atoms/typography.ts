import styled from 'styled-components';

export const HeaderOne = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  line-height: 1.25;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
`;

export const BodyText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightGray};
  line-height: 1.625;
  font-weight: 400;
  margin: 2rem auto;
  max-width: 560px;
  text-align: center;
`;
