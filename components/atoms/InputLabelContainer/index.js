import styled from 'styled-components';
import Flex from '../Flex';

const InputLabelContainer = styled(Flex)`
  align-items: center;

  input:not([type='checkbox']), textarea {
    padding: .5em;
    max-width: 100%;
    width: 100%;
  }

  input:not([type='checkbox']):focus {
    outline: none !important;
  }
  
  label + * {
    flex: 1 0 220px;
  }
  
  & > label {
    flex: 1 0 120px;
    max-width: 200px;
  }
`

export default InputLabelContainer