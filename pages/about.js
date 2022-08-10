import {H1, H2, H3} from '../components/atoms/Typography';
import ImageWrapper from '../components/atoms/ImageStyled';
import FlexColumn from '../components/atoms/FlexColumn';
import Image from 'next/image'
import Flex from '../components/atoms/Flex';
import styled from 'styled-components';

const About = () => {
  return (
    <FlexColumn className='center'>
      <H1>About Us</H1>
      <H2>Meet Our Incredible Medical Team!</H2>
      <Flex className='center'>
        <DoctorWrapper className='center'>
          <H3>Dr. Esmé Jeanette</H3>
          <ImageWrapper>
            <Image width="600px" height="900px" src="https://twinsilver.mo.cloudinary.net/medical/doctor1.jpg?tx=q_auto,f_auto"/>
          </ImageWrapper>
        </DoctorWrapper>
        <DoctorWrapper className='center'>
          <H3>Dr. Harold Cavan</H3>
          <ImageWrapper>
            <Image width="600px" height="900px" src="https://twinsilver.mo.cloudinary.net/medical/doctor2.jpg?tx=q_auto,f_auto"/>
          </ImageWrapper>
        </DoctorWrapper>
        <DoctorWrapper className='center'>
          <H3>Dr. Celia Morrison</H3>
          <ImageWrapper>
            <Image width="600px" height="900px" src="https://twinsilver.mo.cloudinary.net/medical/doctor3.jpg?tx=q_auto,f_auto"/>
          </ImageWrapper>
        </DoctorWrapper>
        <DoctorWrapper className='center'>
          <H3>Dr. Sara Gill</H3>
          <ImageWrapper>
            <Image width="600px" height="900px" src="https://twinsilver.mo.cloudinary.net/medical/doctor5.jpg?tx=q_auto,f_auto"/>
          </ImageWrapper>
        </DoctorWrapper>
      </Flex>
    </FlexColumn>
  )
}

const DoctorWrapper = styled(FlexColumn)`
  max-width: 600px;
  width: 100%;
  margin: .5em;
  @media screen and (min-width: 900px) {
    width: calc(50% - 4em);
    margin: 2em;
  }
`

export default About