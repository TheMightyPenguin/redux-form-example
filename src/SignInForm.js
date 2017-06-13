import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Form, FormGroup } from 'reactstrap';
import translate from './translations';
import InputTextField from './InputTextField';
import { minLength, required } from './validators';

const SignInForm = (props) => {
  const { handleSubmit } = props;
  return (
    <Form onSubmit={handleSubmit}>
      <Field
        type="text"
        name="pleiq_code"
        label="PleIQ Code"
        component={InputTextField}
        validate={[ minLength(8), required ]}
      />
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default reduxForm({
  form: 'signInForm'
})(SignInForm);
