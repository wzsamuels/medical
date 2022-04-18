import {H1} from '../components/atoms/Typography';
import ImageWrapper from '../components/atoms/ImageStyled';
import office from '../public/assets/images/office.jpg'
import FlexColumn from '../components/atoms/FlexColumn';
import Image from 'next/image'

const About = () => {
  return (
    <FlexColumn className='center'>
      <H1>About Us</H1>
      <ImageWrapper>
        <Image src={office}/>
      </ImageWrapper>
    </FlexColumn>
  )
}

export default About