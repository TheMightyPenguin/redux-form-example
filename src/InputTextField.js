import React from 'react';
import { FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import classNames from 'classnames';
import translations from './translations';

const InputTextField = ({ responseErrors = {}, ...otherProps }) => {
  const { input, label, name, placeholder, errorKey, type, valid, meta } = otherProps;
  const { touched, error, warning } = meta;
  let errors = [];

  if (typeof responseErrors[errorKey] !== 'undefined') {
    errors = errors.concat(...responseErrors[errorKey]);
  }

  if (error) {
    errors.push(error);
  }

  const formColor = classNames({ danger: errors.length > 0 && touched, success: valid });
  console.log(errors);

  return (
    <FormGroup color={formColor}>
      <Label for={name}>{name}</Label>
      <Input state={formColor} placeholder={placeholder} {...input} />
      {
        touched &&
        errors.map((error, index) => (
          <FormFeedback key={index}>{translations.t(error)}</FormFeedback>
        ))
      }
    </FormGroup>
  );
};

export default InputTextField;
