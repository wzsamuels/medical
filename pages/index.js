import styled from 'styled-components';
import {useState} from 'react';
import Flex from '../components/atoms/Flex';
import Card from '../components/atoms/Card';
import {H1} from '../components/atoms/Typography';
import {Icon} from '@iconify/react';
import Image from 'next/image'
import FlexColumn from '../components/atoms/FlexColumn';
import logo from '../public/assets/images/medical_logo.svg'
import ChatBot from '../components/ChatBot';

const ChatBotWrapper = styled.div`

  position: fixed;
  bottom: 15px;
  right: 5px;
  transition: height 0.5s linear;
  max-width: 75vw;
  width: 400px;
  max-height: 500px;
  height: 500px;
  &.closed {
    height: 2.5em;
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
  
  max-width: 900px;
`

export default function Home() {
  const [botOpen, setBotOpen] = useState(false)

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
            <FlexColumn style={{flex: 1, justifyContent:'center'}}>
              <H1 style={{margin: '0 0 0 .25em', textAlign: 'center'}}>Nightwell Medical Center</H1>
              <p style={{textAlign:'center'}}>801 E 2nd Ave, Anchorage, AK 99501</p>
              <p style={{textAlign:'center', margin: 0}}>1-800-GET-WELL</p>
            </FlexColumn>
          </Flex>
        </HomeCard>
        <Card style={{maxWidth:'900px', padding: 0}}>
          <FlexColumn className='center'>
            <H1 style={{textAlign: "center",  padding: "0 1em"}}>Cutting Edge Medical Technology</H1>
            <Image width="900px" height="600px" src="https://twinsilver.mo.cloudinary.net/medical/science.jpg?tx=q_auto,f_auto"/>
          </FlexColumn>
        </Card>
        <Card style={{maxWidth:'900px', padding: 0}}>
          <FlexColumn className='center'>
            <H1 style={{textAlign: "center", padding: "0 1em"}}>In a Welcoming Environment</H1>
            <Image width="900px" height="600px" src="https://twinsilver.mo.cloudinary.net/medical/office.jpg?tx=q_auto,f_auto"/>
          </FlexColumn>
        </Card>
      </FlexColumn>
      <ChatBotWrapper className={botOpen ? '' : 'closed'}>
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