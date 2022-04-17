import React from 'react'
import Button from '../atoms/Button'
import InputLabelContainer from '../atoms/InputLabelContainer';
import GroupContainer from '../atoms/GroupContainer';

function ForgotPassword({updateFormState}) {
  return (
    <>
      <InputLabelContainer>
        <label>Username:</label>
        <input
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