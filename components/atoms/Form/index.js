import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  
  > *:not(:last-child) {
    margin-bottom: 1.5em;
  }
`

export default Form