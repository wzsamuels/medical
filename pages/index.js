import styled from 'styled-components';
import {AmplifyChatbot} from '@aws-amplify/ui-react/legacy';
import {useState} from 'react';
import Flex from '../components/atoms/Flex';
import Card from '../components/atoms/Card';
import {H1} from '../components/atoms/Typography';
import ImageStyled, {ImageWrapper} from '../components/atoms/ImageStyled';
import {Icon} from '@iconify/react';
import Image from 'next/image'
import FlexColumn from '../components/atoms/FlexColumn';
import logo from '../public/assets/images/medical_logo.svg'
import photo1 from '../public/assets/images/pexels-photo-5215017.jpeg'

const ChatBotWrapper = styled.div`
  // Don't show on mobile
  position: fixed;
  bottom: -15px;
  right: 1px;
  transition: height 0.5s linear;
  max-width: 75vw;
`

const CloseButton = styled.div`
  position: absolute;
  top: 15px;
  right: 5px;
  font-size: 2em;
  cursor: pointer;
  color: black;
`

const StyledAmplifyChatbot = styled(AmplifyChatbot)`
  --background-color: white;
  --header-color: ${props => props.theme.colors.chatBotHeader};
  transition: --height 0.5s linear;
  --height: 300px;

  &.closed {
    --height: 4em;
  }
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
      <FlexColumn className='center'>
        <HomeCard>
          <Flex>
            <Image width='80' height='80' src={logo} alt='Nightwell Logo'/>
            <Flex style={{flex: 1, justifyContent:'center'}}>
              <H1 style={{margin: '0 0 0 .25em' }}>Nightwell Medical Center</H1>
              <p style={{textAlign:'center'}}>801 E 2nd Ave, Anchorage, AK 99501</p>
            </Flex>
          </Flex>
        </HomeCard>
        <ImageWrapper>
          <ImageStyled src={photo1}/>
        </ImageWrapper>
        {/*
        <ImageWrapper>
          <ImageStyled layout='fill' src='https://images.pexels.com/photos/5215013/pexels-photo-5215013.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1000&w=1500'/>
        </ImageWrapper>
        <ImageWrapper>
          <ImageStyled layout='fill' src='https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1000&w=1500'/>
        </ImageWrapper>
        <ImageWrapper>
          <ImageStyled layout='fill' src='https://images.pexels.com/photos/3259629/pexels-photo-3259629.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1000&w=1500'/>
        </ImageWrapper>
        <ImageWrapper>
          <ImageStyled layout='fill' src='https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1000&w=1500'/>
        </ImageWrapper>
        */}
      </FlexColumn>

    </>
  )
}

/*
<ChatBotWrapper >
        <CloseButton onClick={() => setBotOpen(!botOpen)} >
          {botOpen ? <Icon icon="ic:baseline-expand-more" /> : <Icon icon="ic:baseline-expand-less" /> }
        </CloseButton>
        <StyledAmplifyChatbot
          //style={{backgroundColor: 'white'}}
          className={botOpen ? '' : 'closed'}
          botTitle="Need help?"
          botName="ScheduleAppointment_dev"
          welcomeMessage="Welcome, how can I help you today?"
          onComplete={handleComplete}
          clearOnComplete={false}
          conversationModeOn={false}
        />
      </ChatBotWrapper>
 */