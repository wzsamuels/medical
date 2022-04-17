import {H1, H2, H3} from '../components/atoms/Typography';
import protectedRoute from '../lib/protectedRoute';
import Card from '../components/atoms/Card';
import {useEffect, useState} from 'react';
import {API, graphqlOperation} from 'aws-amplify';
import Button from '../components/atoms/Button';
import {updatePatient} from '../src/graphql/mutations';
import {emptyForm, formInputs, handleFormUpdate} from '../lib/form';
import Label from '../components/atoms/Label';
import Input from '../components/atoms/Input';
import Alert from '../components/molecules/Alert';
import Form from '../components/atoms/Form';
import InputLabelContainer from '../components/atoms/InputLabelContainer';
import GroupContainer from '../components/atoms/GroupContainer';

const Account = ({user}) => {
  const [formState, setFormState] = useState(emptyForm)
  const [patient, setPatient] = useState(null)
  const [message, setMessage] = useState(null)

  useEffect(() => {
    // Fetch customer data based on logged in user ID
    const fetchPatient = async() => {
      const response = await API.graphql(graphqlOperation(`query patientByUserID {
          patientByUserID(userID: "${user.attributes.sub}") {
            items {          
              id
              userID
              firstname
              middlename
              lastname
              dob
              phone
              email
            }
          }
        }`))
      return response.data.patientByUserID.items[0]
    }

    if(user) {
      fetchPatient()
        .then((response) => {
          setPatient(response)
          setFormState({firstname: response.firstname, middlename: response.middlename, lastname: response.lastname,
            dob: response.dob, phone: response.phone, email: response.email})
        })
        .catch(err => {
          console.log(err)
        })
    }
  }, [user])

  const handleSubmit = async (e) => {
    e.preventDefault()
    let newMessage
    try {
      await API.graphql(graphqlOperation(updatePatient, {input :
          {id: patient.id, userID: patient.userID, firstname: formState.firstname, middlename: formState.middlename,
            lastname: formState.lastname, dob: formState.dob, phone: formState.phone, email: formState.email}}))
      newMessage = "Information successfully updated"
    } catch(err) {
      newMessage = `There was an error updating your information: ${JSON.stringify(err)}`
    }
    setMessage(newMessage)
  }

  return (
    <>
      <H1>Personal Information</H1>
      <H2>Keep your details up to date to save time and paperwork and your next appointment.</H2>
      <Card>
        <Form onSubmit={e => handleSubmit(e)} >
          {
            formInputs.map(input =>
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

          <GroupContainer>
            <Button>Save Changes</Button>
          </GroupContainer>
        </Form>
        {message && <Alert>{message}</Alert>}
      </Card>
    </>
  )
}

export default protectedRoute(Account)
