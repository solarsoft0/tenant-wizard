// TODO: Write unit testing !!!
/**
 * Name Validation
 *
 * - Name is required
 * - Name can't include characters
 * - Name needs to have more than 3 characters
 */
export const nameValidation = (value: string): string | null => {
  if (value.trim() === '') {
    return `Name is required`;
  }
  if (/[^a-zA-Z -]/.test(value)) {
    return "Name can't include characters";
  }
  if (value.trim().length < 3) {
    return `Name needs to have more than 3 characters`;
  }
  return null;
};

/**
 * Email Validation
 *
 * - Email is required
 * - Invalid e-mail address
 */
export const emailValidation = (value: string): string | null => {
  if (/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value)) {
    return null;
  }
  if (value.trim() === '') {
    return 'Email is required';
  }
  return 'Invalid e-mail address';
};

/**
 * Phone Number Validation
 *
 * - Phone number is required
 * - Invalid phone number
 */
export const phoneNumberValidation = (value: string): string | null => {
  if (value.trim() === '') {
    return 'Phone number is required';
  }

  if (/^[0-9]*$/.test(value)) return null;

  return 'Invalid phone number';
};
