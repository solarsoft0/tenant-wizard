import * as React from 'react';
import styled from 'styled-components';

import { useWizard } from './wizardSteps';

const BaseForm = styled.form`
  width: 80%;
`;

export const RegisterForm: React.FC = (props) => {
  const { handleOnSubmit } = useWizard();

  // Handle the registration form submit event
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Wizard submit callback
    handleOnSubmit();
  };

  // Render Form
  return <BaseForm onSubmit={onSubmit}>{props.children}</BaseForm>;
};
