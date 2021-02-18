import styled from 'styled-components';

export const BaseHOne = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  line-height: 1.25;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
`;

export const BaseHTwo = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: 1.25;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const BaseHThree = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 1.25;
  font-weight: 600;
  margin-bottom: 1rem;
  text-align: center;
`;

export const BodyText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.lightGray};
  line-height: 1.625;
  font-weight: 400;
  margin: 0.25rem;
  max-width: 560px;
  text-align: start;
`;
