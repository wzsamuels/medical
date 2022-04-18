import React from 'react'
import Button from '../atoms/Button'
import InputLabelContainer from '../atoms/InputLabelContainer';
import GroupContainer from '../atoms/GroupContainer';
import Label from '../atoms/Label';
import Input from '../atoms/Input';

function ForgotPasswordSubmit({updateFormState}) {
  return (
    <>
      <InputLabelContainer>
        <Label>Confirmation Code:</Label>
        <Input
          name='confirmationCode'
          placeholder='Confirmation code'
          onChange={e => { updateFormState(e)} }
        />
      </InputLabelContainer>
      <InputLabelContainer>
        <Label>Password:</Label>
        <Input
          name='password'
          placeholder='New password'
          type='password'
          onChange={e => { updateFormState(e)} }
        />
      </InputLabelContainer>
      <GroupContainer>
        <Button type='submit'>Save new password</Button>
      </GroupContainer>
    </>
  )
}

export default ForgotPasswordSubmit