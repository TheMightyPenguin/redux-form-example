export const minLength = (min) => (value) => {
  return value && value.length < min ? `Must be ${min} characters or more` : undefined;
};

export const required = (value) => {
  return value ? undefined : 'Required';
};
