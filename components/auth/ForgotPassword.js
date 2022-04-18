import React from 'react'
import Button from '../atoms/Button'
import InputLabelContainer from '../atoms/InputLabelContainer';
import GroupContainer from '../atoms/GroupContainer';
import Label from '../atoms/Label';
import Input from '../atoms/Input';

function ForgotPassword({updateFormState}) {
  return (
    <>
      <InputLabelContainer>
        <Label>Username:</Label>
        <Input
          name='username'
          placeholder='Username'
          onChange={e => {updateFormState(e)}}
        />
      </InputLabelContainer>
      <GroupContainer>
        <Button type='submit'>Reset password</Button>
      </GroupContainer>
    </>
  )
}

export default ForgotPassword