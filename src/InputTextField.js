import React from 'react';
import { FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import classNames from 'classnames';

const InputTextField = ({ responseErrors = [], ...otherProps }) => {
  const { input, label, name, type, valid, meta } = otherProps;
  const { touched, error, warning } = meta;
  const errors = error
    ? [error].concat(responseErrors)
    : [].concat(responseErrors);
  const formColor = classNames({ danger: errors.length > 0 && touched, success: valid });

  return (
    <FormGroup color={formColor}>
      <Label for={name}>{name}</Label>
      <Input state={formColor} {...input} />
      {
        touched &&
        errors.map((error, index) => (
          <FormFeedback key={index}>{error}</FormFeedback>
        ))
      }
    </FormGroup>
  );
};

export default InputTextField;
