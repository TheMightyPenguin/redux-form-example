import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Form, FormGroup } from 'reactstrap';
import translate from './translations';
import InputTextField from './InputTextField';
import { minLength, required } from './validators';

const SignInForm = ({ responseErrors, ...otherProps }) => {
  const { handleSubmit } = otherProps;
  return (
    <Form onSubmit={handleSubmit}>
      <Field
        type="text"
        name="pleiq_code"
        errorKey="pleiq_code"
        label="PleIQ Code"
        component={InputTextField}
        validate={[ minLength(8), required ]}
        responseErrors={responseErrors}
      />
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default reduxForm({
  form: 'signInForm'
})(SignInForm);
