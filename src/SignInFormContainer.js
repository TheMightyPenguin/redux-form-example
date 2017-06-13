import React from 'react';
import SignInForm from './SignInForm';
import { compose, pure, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { dispatch } from 'redux';

const SignInFormContainer = ({ handleSubmit, pleiqCode, responseErrors, allState }) => {
  return (
    <div>
      <SignInForm onSubmit={handleSubmit} responseErrors={responseErrors} />
      <p>Object: {JSON.stringify(allState)}</p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  pleiqCode: state.pleiq_code,
  responseErrors: state.pleiq_code.errors,
  // just to illustrate how the state changes
  allState: state
});

const mapDispatchToProps = (dispatch) => ({ dispatch });

const SignInFormContainerHandlers = {
  handleSubmit: (props) => ({ pleiq_code }) => {
    const { dispatch } = props;
    const actionType = 'REQUEST_PARENT_ACTIVATE';
    const payload = {
      parent: {
        pleiq_code
      }
    };

    dispatch({ type: actionType, payload });
  }
};

const SignInFormContainerComposed = compose(
  withHandlers(SignInFormContainerHandlers),
  pure
)(SignInFormContainer);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInFormContainerComposed);
