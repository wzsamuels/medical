import Button from '../atoms/Button';
import InputLabelContainer from '../atoms/InputLabelContainer';
import GroupContainer from '../atoms/GroupContainer';
import React from 'react';

function SignIn({ updateFormState }) {
  return (
    <>
      <InputLabelContainer>
        <label>Email:</label>
        <input
          type="text"
          name="username"
          onChange={e => {
            updateFormState(e);
          }}
          placeholder='email'
        />
      </InputLabelContainer>
      <InputLabelContainer>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          onChange={e => {
            updateFormState(e);
          }}
          placeholder='password'
        />
      </InputLabelContainer>
      <GroupContainer>
        <Button type="submit">Sign In</Button>
      </GroupContainer>
    </>
  );
}

export default SignIn