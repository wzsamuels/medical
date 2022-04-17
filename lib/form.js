const handleFormUpdate = (event, formState, setFormState) => {
  const key = event.target.name
  const type = event.target.type
  let value = event.target.value

  // Automatically add dashes as phone numbers are typed
  if(type && type === 'tel') {
    if(value.length === 3 && formState.phone.length === 2) {
      value += '-'
    } else if(value.length  === 7 && formState.phone.length === 6) {
      value += '-'
    }
  }
  setFormState({ ...formState, [key]: value })
}

const formInputs = [
  {
    key: 'firstname',
    type: 'text',
    label: 'First Name',
  },
  {
    key: 'middlename',
    type: 'text',
    label: 'Middle Name',
  },
  {
    key: 'lastname',
    type: 'text',
    label: 'Last Name',
  },
  {
    key: 'dob',
    type: 'date',
    label: 'Date of birth',
  },
  {
    key: 'phone',
    type: 'tel',
    label: 'Phone Number'
  },
  {
    key: 'email',
    type: 'text',
    label: 'Email'
  },
]

const emptyForm = {firstname: '', middlename: '', lastname: '', dob: '2020-01-01', phone: '', email: ''}

export {handleFormUpdate, formInputs, emptyForm}