import React from 'react'
import Button from '../atoms/Button'
import InputLabelContainer from '../atoms/InputLabelContainer';
import GroupContainer from '../atoms/GroupContainer';
import Label from '../atoms/Label';
import Input from '../atoms/Input';

function ConfirmSignUp({updateFormState, formState}) {

  return (
    <>
      <InputLabelContainer>
        <Label>Email:</Label>
        <Input
          name='username'
          onChange={e => updateFormState(e)}
          value={formState.username}
        />
      </InputLabelContainer>
      <InputLabelContainer>
        <Label>Confirmation Code:</Label>
        <Input
          name='confirmationCode'
          //placeholder='Confirmation Code'
          onChange={e => updateFormState(e)}
        />
      </InputLabelContainer>
      <GroupContainer>
        <Button type='submit'>Confirm Sign Up</Button>
      </GroupContainer>
    </>
  )
}

export default ConfirmSignUp