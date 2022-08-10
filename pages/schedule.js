import {H1, H3} from '../components/atoms/Typography';
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

const Schedule = () => {
  const [formState, setFormState] = useState(emptyForm)
  const [patientType, setPatientType] = useState()

  const onPatientTypeChange = e => setPatientType(e.target.value)
  const handleSubmit = e => {
    
  }

  return (
    <>
      <H1 style={{textAlign: "center",  padding: "0 1em"}}>Schedule an Appointment</H1>
      <Card>
        <Form onSubmit={handleSubmit}>
        <Flex className='center'>
          <Input
            type='radio'
            name='patientType'
            value='newPatient'
            onChange={onPatientTypeChange}
          />
          <Label style={{margin: '0 2em 0 .5em' }}>
            New Patient
          </Label>
          <Input
            type='radio'
            name='patientType'
            value='oldPatient'
            onChange={onPatientTypeChange}
          />
          <Label style={{marginLeft: '.5em'}}>
            Returning Patient
          </Label>
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
              <Label>{input.label}</Label>
              <Input
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