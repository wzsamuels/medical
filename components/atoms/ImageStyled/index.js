import styled from 'styled-components';

const ImageWrapper = styled.div`
  width: calc(100% - 1em);
  max-width: 800px;
  margin: 0;
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > span {
    box-shadow: 0 16px 38px -12px rgb(0 0 0 / 56%), 0 4px 25px 0px rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(0 0 0 / 20%);
    border-radius: 6px;
  }
`

export default ImageWrapper
