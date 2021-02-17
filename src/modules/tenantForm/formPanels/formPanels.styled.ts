import styled from 'styled-components';
import { BaseHThree } from 'components/atoms/baseTypography';

export const Title = styled(BaseHThree)`
  text-align: start;
`;

export const FormWrapper = styled.section`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1 1 auto;
`;

/* ==== Salary Panel ==== */
export const OptionWrapper = styled.div<{ isChecked?: boolean }>`
  width: 80%;
  background-color: ${({ isChecked }) => (isChecked ? '#b6b6b5' : '#f6f6f5')};
  color: ${({ isChecked }) => (isChecked ? '#f6f6f5' : `inherit`)};
  margin: auto;
  height: 2rem;
  display: flex;
  border-radius: 10px;
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
`;

export const ContentWrapper = styled.div`
  width: 100%;

  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
`;

export const RadioLabel = styled.label`
  width: 90%;
  margin: auto;
  text-align: center;
`;
/* ==== END - Salary Panel ==== */
