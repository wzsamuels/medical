import Button from "../atoms/Button";
import {useState} from "react";
import Form from '../atoms/Form';
import GroupContainer from '../atoms/GroupContainer';
import InputLabelContainer from '../atoms/InputLabelContainer';
import Label from '../atoms/Label';
import TextArea from '../atoms/TextArea';
import Input from '../atoms/Input';
import {handleFormUpdate} from '../../lib/form';

// formFields should have the keys: key, type, label, required

const FormTemplate = ({formFields, handleSubmit = f => f, submitButton='Submit', FormComp=Form, style={}, ...props}) => {
  const [formState, setFormState] = useState(() => {
    let emptyFormState = {}
    formFields.map(field => emptyFormState = {...emptyFormState, [field.key]: ''})
    return emptyFormState
  })

  return (
    <FormComp onSubmit={e => handleSubmit(e, formState)} style={{...style}} {...props}>
      { formFields.map((field) =>
        <InputLabelContainer key={field.key}>
          <Label>{field.label}</Label>
          { field.type === 'textarea' ?
            <TextArea
              name={field.key}
              value={formState[field.key] || ''}
              onChange={e => handleFormUpdate(e, formState, setFormState)}
              required={field.required}
            />
            :
            <Input
              name={field.key}
              type={field.type}
              value={formState[field.key] || ''}
              onChange={e => handleFormUpdate(e, formState, setFormState)}
              required={field.required}
            />
          }
        </InputLabelContainer>
      )
      }
      <GroupContainer>
        <Button type='submit'>{submitButton}</Button>
      </GroupContainer>
    </FormComp>
  )
}

export {FormTemplate as default, handleFormUpdate}