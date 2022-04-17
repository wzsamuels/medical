import React from 'react'
import Button from '../atoms/Button'
import InputLabelContainer from '../atoms/InputLabelContainer';
import GroupContainer from '../atoms/GroupContainer';

function ConfirmSignUp({updateFormState, formState}) {

  return (
    <>
      <InputLabelContainer>
        <label>Email:</label>
        <input
          name='username'
          onChange={e => updateFormState(e)}
          value={formState.username}
        />
      </InputLabelContainer>
      <InputLabelContainer>
        <label>Confirmation Code:</label>
        <input
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