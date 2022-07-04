import {H1, H2, H3} from '../components/atoms/Typography';
import ImageWrapper from '../components/atoms/ImageStyled';
import FlexColumn from '../components/atoms/FlexColumn';
import Image from 'next/image'
import Flex from '../components/atoms/Flex';
import photo1 from '../public/assets/images/doctor1.jpeg';
import photo2 from '../public/assets/images/doctor2.jpeg';
import photo3 from '../public/assets/images/doctor3.jpeg';
import photo4 from '../public/assets/images/doctor5.jpg';
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
            <Image src={photo1}/>
          </ImageWrapper>
        </DoctorWrapper>
        <DoctorWrapper className='center'>
          <H3>Dr. Harold Cavan</H3>
          <ImageWrapper>
            <Image src={photo2}/>
          </ImageWrapper>
        </DoctorWrapper>
        <DoctorWrapper className='center'>
          <H3>Dr. Celia Morrison</H3>
          <ImageWrapper>
            <Image src={photo3}/>
          </ImageWrapper>
        </DoctorWrapper>
        <DoctorWrapper className='center'>
          <H3>Dr. Sara Gill</H3>
          <ImageWrapper>
            <Image src={photo4}/>
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