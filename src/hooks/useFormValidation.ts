import { useState } from 'react';
import { nameValidation, emailValidation, phoneNumberValidation } from 'utils/validator';

// Personal Information Form Validator
const personalInfoValidator: { [key: string]: (val: string) => string | null } = {
  fullName: (name: string) => nameValidation(name),
  email: (email: string) => emailValidation(email),
  phoneNumber: (phone: string) => phoneNumberValidation(phone),
};

// Validation mapper
// Usefull if we added more field to the form
// The salary panel doesn't require any validation as it's being done on the component level
const FormValidators = {
  personal: personalInfoValidator,
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useFormValidation = (formType: 'personal') => {
  // Pick the righ validator
  const validator = FormValidators[formType];
  // Define the object state used to track errors through inputfield
  const [validationErrors, setValidationErrors] = useState<{
    [key: string]: string | undefined;
  }>({});

  // Validate a single entry
  const validateField = (key: string, value: string) => {
    // validate
    const error = validator[key](value);

    // set the new error if any
    setValidationErrors((prevState) => ({
      ...prevState,
      [key]: error || undefined,
    }));

    // return error message in case needed
    return error;
  };

  // Validate all entries
  const validateForm = (personalInfo: { [key: string]: string }) => {
    Object.keys(validator).forEach((key) => validateField(key, personalInfo[key]));
  };

  // hook API
  return { validateForm, validationErrors, validateField };
};
