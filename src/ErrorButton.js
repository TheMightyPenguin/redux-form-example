import React from 'react';
import { SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { dispatch } from 'redux';

const ErrorButton = (props) => {
  return (
    <button onClick={() => {
      const { dispatch } = props;
      const actionType = 'GENERATE_ERROR';
      const payload = {
        errors: {
          pleiq_code: ['already_used']
        }
      };

      dispatch({ type: actionType, payload });
    }}>
      Cause an error on form
    </button>
  );
};



export default connect(
  null,
  dispatch => ({ dispatch })
)(ErrorButton);
