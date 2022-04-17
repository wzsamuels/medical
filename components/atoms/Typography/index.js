import styled from 'styled-components';

export const H1 = styled.h1`
  font-size: 2em;
  font-weight: 300;
  
  @media screen and (min-width: 750px) {
    font-size: 2.25em;
  font-weight: normal;
   // font-weight: bold;
  }
`

export const H2 = styled.h2`
  font-size: 1.5em;
  font-weight: normal;

  @media screen and (min-width: 750px) {
    font-size: 1.75em;
  //  font-weight: bold;
  }
`

export const H3 = styled.h3`
  font-size: 1.25em;
  font-weight: normal;
  @media screen and (min-width: 750px) {
    font-size: 1.5em;
  }
`

const P = styled.p`
`

export {P}