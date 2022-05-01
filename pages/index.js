import styled from 'styled-components';
import {AmplifyChatbot} from '@aws-amplify/ui-react/legacy';
import {useState} from 'react';
import Flex from '../components/atoms/Flex';
import Card from '../components/atoms/Card';
import {H1, H2, H3} from '../components/atoms/Typography';
import ImageWrapper from '../components/atoms/ImageStyled';
import {Icon} from '@iconify/react';
import Image from 'next/image'
import FlexColumn from '../components/atoms/FlexColumn';
import logo from '../public/assets/images/medical_logo.svg'
import office from '../public/assets/images/office.jpg';
import science from '../public/assets/images/science.jpg'
import ChatBot from '../components/ChatBot';


const ChatBotWrapper = styled.div`

  position: fixed;
  bottom: 15px;
  right: 5px;
  transition: height 0.5s linear;
  max-width: 75vw;
  max-height: 500px;
  height: 500px;
  &.closed {
    height: 3em;
  }
`

const CloseButton = styled.div`
  position: absolute;
  top: 12px;
  right: 5px;
  font-size: 2em;
  cursor: pointer;
  color: ${props => props.theme.colors.textOnDark};
`

const HomeCard = styled(Card)`
  color: #1b2884;
  ${Flex} {
    justify-content: center; 
    align-items: center;
  }
`

export default function Home() {
  const [botOpen, setBotOpen] = useState(true)

  const handleComplete = (err, confirmation) => {
    if (err) {
      alert('Bot conversation failed')
      return;
    }

    let message;
    if (confirmation.slots.DrugType) {
      message = `Your refill request for your prescription of ${confirmation.slots.DrugType} has been submitted.`
    }

    alert('Success: ' + JSON.stringify(confirmation, null, 2));

    return message
  }

  return (
    <>
      <FlexColumn className='center margin' style={{  width:'100%'}}>
        <HomeCard>
          <Flex>
            <Image width='80' height='80' src={logo} alt='Nightwell Logo'/>
            <Flex style={{flex: 1, justifyContent:'center'}}>
              <H1 style={{margin: '0 0 0 .25em', textAlign: 'center'}}>Nightwell Medical Center</H1>
              <p style={{textAlign:'center'}}>801 E 2nd Ave, Anchorage, AK 99501</p>
            </Flex>
          </Flex>
        </HomeCard>
        <H1>Cutting Edge Medical Technology</H1>
        <ImageWrapper>
          <Image src={science}/>
        </ImageWrapper>
        <H1>In a Welcoming Environment</H1>
        <ImageWrapper>
          <Image src={office}/>
        </ImageWrapper>
      </FlexColumn>
      <ChatBotWrapper     className={botOpen ? '' : 'closed'}>
        <CloseButton onClick={() => setBotOpen(!botOpen)} >
          {botOpen ? <Icon icon="ic:baseline-expand-more" /> : <Icon icon="ic:baseline-expand-less" /> }
        </CloseButton>
        <ChatBot
          botTitle="Need help?"
          botName="ScheduleAppointment_dev"
          welcomeMessage="Welcome, would you like to schedule an appointment?"
          onComplete={handleComplete}
          clearOnComplete={false}
          conversationModeOn={false}
        />
      </ChatBotWrapper>
    </>
  )
}