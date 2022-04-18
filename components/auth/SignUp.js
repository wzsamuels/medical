import React from 'react'
import Button from '../atoms/Button'
import InputLabelContainer from '../atoms/InputLabelContainer';
import GroupContainer from '../atoms/GroupContainer';
import Label from '../atoms/Label';
import Input from '../atoms/Input';

function SignUp({ formState, updateFormState }) {

  return (
    <>
      <InputLabelContainer>
        <Label>Email:</Label>
        <Input
          name='username'
          onChange={e => updateFormState(e)}
          placeholder='email'
          value={formState.username}
        />
      </InputLabelContainer>
      <InputLabelContainer>
        <Label>Password:</Label>
        <Input
          type='password'
          name='password'
          onChange={e => updateFormState(e)}
          placeholder='password'
        />
      </InputLabelContainer>
      <GroupContainer>
        <Button type='submit'>Sign Up</Button>
      </GroupContainer>
    </>
  )
}

export default SignUp