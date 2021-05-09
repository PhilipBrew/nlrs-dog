import React from 'react';

import StyledForm from '../../styles/FormStyles';
import { SubmitButton } from '../Buttons';

const ResetForm = () => (
  <StyledForm>
    <fieldset>
      <legend>Rest your password</legend>

      <label htmlFor="email">Email*</label>
      <input type="email" name="email" required />
      <SubmitButton
        // onClick={() => handleSubmit()}
        br={5}
        mt={16}
        value="Login"
      />
    </fieldset>
  </StyledForm>
);

export default ResetForm;
