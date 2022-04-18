import Button from '../atoms/Button';
import InputLabelContainer from '../atoms/InputLabelContainer';
import GroupContainer from '../atoms/GroupContainer';
import React from 'react';
import Label from '../atoms/Label';
import Input from '../atoms/Input';

function SignIn({disabled, formState, updateFormState }) {
  return (
    <>
      <InputLabelContainer>
        <Label>Email:</Label>
        <Input
          type="text"
          name="username"
          onChange={e => {
            updateFormState(e);
          }}
          value={formState.username}
          placeholder='email'
        />
      </InputLabelContainer>
      <InputLabelContainer>
        <Label>Password:</Label>
        <Input
          type="password"
          name="password"
          onChange={e => {
            updateFormState(e);
          }}
          placeholder='password'
        />
      </InputLabelContainer>
      <GroupContainer>
        <Button disabled={disabled} type="submit">Sign In</Button>
      </GroupContainer>
    </>
  );
}

export default SignIn