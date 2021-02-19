import { nameValidation, emailValidation, phoneNumberValidation } from './validator';

describe('Name Validator', () => {
  it('Should return successfull validation ', () => {
    const validationStatus = nameValidation('tester');
    expect(validationStatus).toBe(null);
  });
  it('Should return required error ', () => {
    const validationStatus = nameValidation('');
    expect(validationStatus).toBe('Name is required');
  });
  it('Should return characters error ', () => {
    const validationStatus = nameValidation('test!test');
    expect(validationStatus).toBe("Name can't include characters");
  });
  it('Should return length error ', () => {
    const validationStatus = nameValidation('te');
    expect(validationStatus).toBe('Name needs to have more than 3 characters');
  });
});

describe('Email Validator', () => {
  it('Should return successfull validation ', () => {
    const validationStatus = emailValidation('tester@test.com');
    expect(validationStatus).toBe(null);
  });
  it('Should return required error ', () => {
    const validationStatus = emailValidation('');
    expect(validationStatus).toBe('Email is required');
  });
  it('Should return invalid error ', () => {
    const validationStatus = emailValidation('test@');
    expect(validationStatus).toBe('Invalid e-mail address');
  });
});

describe('Phone Validator', () => {
  it('Should return successfull validation ', () => {
    const validationStatus = phoneNumberValidation('112312');
    expect(validationStatus).toBe(null);
  });
  it('Should return required error ', () => {
    const validationStatus = phoneNumberValidation('');
    expect(validationStatus).toBe('Phone number is required');
  });
  it('Should return invalid error ', () => {
    const validationStatus = phoneNumberValidation('1234a');
    expect(validationStatus).toBe('Invalid phone number');
  });
});
