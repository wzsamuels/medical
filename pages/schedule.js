import {H1, H2, H3} from '../components/atoms/Typography';
import Form from '../components/atoms/Form';
import Flex from '../components/atoms/Flex';
import Card from '../components/atoms/Card';
import {useState} from 'react';
import {emptyForm, formInputs, handleFormUpdate} from '../lib/form';
import Button from '../components/atoms/Button';
import InputLabelContainer from '../components/atoms/InputLabelContainer';
import GroupContainer from '../components/atoms/GroupContainer';
import Label from '../components/atoms/Label';
import Input from '../components/atoms/Input';

const scheduleFormInputs = [
  ...formInputs,
  {
    key: 'date',
    type: 'date',
    label: 'Appointment Date',
  },
  {
    key: 'time',
    type: 'time',
    label: 'Appointment Time'
  }
]

const Schedule = ({user}) => {
  const [formState, setFormState] = useState(emptyForm)
  const [patientType, setPatientType] = useState()

  const onPatientTypeChange = e => setPatientType(e.target.value)
  const handleSubmit = e => {
    
  }

  return (
    <>
      <H1>Schedule an Appointment</H1>
      <Card>
        <Form onSubmit={handleSubmit}>
        <Flex flexDirection='row' justifyContent='center'>
          <label>
            <input
              type='radio'
              name='patientType'
              value='newPatient'
              onChange={onPatientTypeChange}
            />
            New Patient
          </label>
          <label style={{marginLeft: '1em'}}>
            <input
              type='radio'
              name='patientType'
              value='oldPatient'
              onChange={onPatientTypeChange}
            />
            Returning Patient
          </label>
        </Flex>
        {
          patientType === 'oldPatient' &&
            <InputLabelContainer>
              <Label>Patient ID</Label>
              <Input type='text'/>
            </InputLabelContainer>
        }
        {
          scheduleFormInputs.map(input =>
            <InputLabelContainer key={input.key}>
              <label>{input.label}</label>
              <input
                name={input.key}
                type={input.type}
                onChange={e => handleFormUpdate(e, formState, setFormState)}
                value={formState[input.key] || ''}
              />
            </InputLabelContainer>
          )}
          <H3>A member of our staff will review your request and confirm your appointment as soon as possible.</H3>
          <GroupContainer>
            <Button>Submit</Button>
          </GroupContainer>
        </Form>
      </Card>
    </>
  )
}

export default Schedule