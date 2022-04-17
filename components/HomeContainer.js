import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all linear .5s;
  padding-left: 60px;
  //height: 500px;
  @media screen and (min-width: 600px) {
    padding-left: 120px;
  }
`

export default HomeContainer