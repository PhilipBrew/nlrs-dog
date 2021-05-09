import React from 'react';
import StyledForm from '../../styles/FormStyles';

const UserDetailsForm = ({ name, email }) => (
  <StyledForm>
    <fieldset>
      <legend>User Details</legend>

      <label htmlFor="userName">Name</label>
      <input type="text" name="userName" value={name} />

      <label htmlFor="userEmail">Email</label>
      <input type="email" name="userEmail" value={email} />
    </fieldset>
  </StyledForm>
);

export default UserDetailsForm;
