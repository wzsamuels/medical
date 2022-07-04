import {useEffect, useReducer, useRef, useState} from 'react';
import styled from 'styled-components';
import Flex from './atoms/Flex';
import Button from './atoms/Button';
import Input from './atoms/Input';
import FlexColumn from './atoms/FlexColumn';
import {H1, H2} from './atoms/Typography';
import { Icon } from '@iconify/react';
import {
  PostTextCommand
} from "@aws-sdk/client-lex-runtime-service";
import lexClient from '../lib/lexClient';
import {RecognizeTextCommand, StartConversationCommand} from '@aws-sdk/client-lex-runtime-v2';



const init = (initialMessage) => {
  return {}
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'message':
      return [...state, {type: 'message', value: action.payload}]
    case 'reply':
      return [...state, {type: 'reply', value: action.payload}]
    default:
      return [...state, {type: 'reply', value: 'ERROR'}]
  }
}

const ConversationRow = styled(Flex)`
  &.message {
    justify-content: right;  
  }
  
  &.reply {
    justify-content: left;
  }
  width: 100%;

`

const Message = styled.div`
  max-width: fit-content;
  padding: .5em;
  border-radius: 8px;
  margin: .5em 1em;

  &.message {
 
        background-color: ${props => props.theme.colors.lightAccent};
        color: ${props => props.theme.colors.text};
    //background-color: cadetblue;
    border-radius: 1.5rem 1.5rem 0px;
  }

  &.reply {
    background-color: lightcyan;

    border-radius: 1.5rem 1.5rem 1.5rem 0px;
  }
`

const Conversation = styled.div`
  background-color: white;
  overflow-y: scroll;
  height: 100%;
  scroll-snap-type: y mandatory;
`

const ChatbotWrapper = styled(FlexColumn)`
  //border-radius: 13px;
  width: 100%;
  height: 510px;
  display: grid;
  grid-template-rows: 60px auto 50px;
`

const ChatBotHeader = styled(Flex)`
  border-radius: 1em 1em 0 0;
  justify-content: center;
  align-content: center;
  height: 100%;
  background-color: ${props => props.theme.colors.chatBotHeader};
  color: ${props => props.theme.colors.textOnDark};
`

const ChatBotFooter = styled(Flex)`
  border-radius: 0 0 1em 1em;
  height: 100%;
  width: 100%;
  background-color: white;

  ${Icon} {
    cursor: pointer;
  }
  
  form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  
  input {

    padding: .5em;
    border: none;
  }

  input:focus {
    outline: none !important;
  }
  
  Button {
    margin: .5em
  }
`

const useFocus = () => {
  const htmlElRef = useRef(null)
  const setFocus = () => {htmlElRef.current &&  htmlElRef.current.focus()}

  return [ htmlElRef, setFocus ]
}

const ChatBot = ({welcomeMessage = "Hello"}) => {
  const [conversation, dispatch] = useReducer(reducer, [{type: 'reply', value: welcomeMessage}])
  const [message, setMessage] = useState("")
  const [userID, setUserID] = useState(null)
  const [sessionAttributes, setSessionAttributes] = useState({})
  const [inputRef, setInputFocus] = useFocus()

  useEffect(() => {
    setUserID('chatbot-demo' + Date.now())
    }, [])

  console.log(conversation)

  const handleSubmit = async e => {
    e.preventDefault()

    if (!(message || message.trim().length > 0)) {
      return;
    }

    dispatch({type: 'message', payload: message})

    const lexparams = {
        botAlias: '$LATEST',
        botName: 'ScheduleAppointment_dev',
        inputText: message,
        userId: userID,
        sessionAttributes: sessionAttributes
      }

    const callback = (err, data) => {
      if(err) {
        console.log(err, err.stack);
      }
      if(data) {
        console.log("Success. Response is: ", data.message);
        dispatch({type: 'reply', payload: data.message})
      }
    }

    lexClient.postText(lexparams, callback);
    setMessage("")
    setInputFocus()
  }

  return (
     <ChatbotWrapper>
       <ChatBotHeader>
         <H2 style={{margin: '.25em'}}>Need help?</H2>
       </ChatBotHeader>
       <Conversation>
         {conversation.map((item, index) =>
           <ConversationRow key={index} className={item.type}>
             <Message className={item.type}>
               {item.value}
               <AlwaysScrollToBottom/>
             </Message>
           </ConversationRow>
         )}
       </Conversation>
       <ChatBotFooter>
         <form onSubmit={handleSubmit}>
           <input
             type='text'
             value={message}
             onChange={e => setMessage(e.target.value)}
             placeholder="Write a message"
             ref={inputRef}
           />
           <Icon icon="bi:send-fill" style={{fontSize: '1.5em', marginRight: '1em'}} onClick={e => handleSubmit(e)}/>
         </form>
       </ChatBotFooter>
     </ChatbotWrapper>
  )
}

export default ChatBot

const AlwaysScrollToBottom = () => {
  const elementRef = useRef();
  useEffect(() => elementRef.current.scrollIntoView());
  return <div ref={elementRef} />;
};