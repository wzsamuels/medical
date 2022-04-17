import Footer from '../atoms/Footer';
import React, {useState} from 'react';
import styled from 'styled-components';
import fbLogoImg from '../../public/assets/images/logos/facebook.svg'
import twitterLogoImg from '../../public/assets/images/logos/twitter.svg'
import instaLogoImg from '../../public/assets/images/logos/instagram.png'
import Button from '../atoms/Button';
import {API, graphqlOperation} from 'aws-amplify';
import * as mutations from '../../graphql/mutations';
import Image from 'next/image'
import FlexColumn from '../atoms/FlexColumn';
import Flex from '../atoms/Flex';
import Input from '../atoms/Input';

const FooterHeader = styled.div`
  font-weight: bold;
  margin-bottom: 1em;
`

const FooterColumn = styled(Flex)`
  flex: 1;
  flex-direction: column;
  align-items: center;
  text-align: center;
  
  p {
    margin: .2em;
  }
  
  margin: 0 .5em 1em;

  .center-on-mobile {
    align-items: center;
  }
  
  @media screen and (min-width: 550px) {  
    align-items: normal;
    text-align: left;
    .center-on-mobile {
      align-items: flex-start;
    }
  }
`

const InputStyled = styled(Input)`
  margin: 1em 0 0 0;
  border-color: ${props => props.theme.colors.text};
  border-width: 0 0 1px 0;
  box-shadow: none;
  
  &:focus {
    outline: none !important;
    border-color: ${props => props.theme.colors.text};
  }
`

const SocialIcons = styled(Flex) `
  * + * {
    //margin: .5em;
  }
  * {
    margin: .2em;
  }
`

const FootWrapper = styled(Flex)`
  flex-wrap: wrap;
  
  @media screen and (min-width: 550px) {
    flex-direction: row;
  }
`

const FooterContent = ({links}) => {

  const [emailForm, setEmailForm] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    const response = await API.graphql(graphqlOperation(mutations.createEmail, {input: {email: emailForm, marketing: true, sales: true, newsletter: true}}))
    window.alert(JSON.stringify(response.data.createEmail))
  }

  return (
    <Footer>
      <FlexColumn style={{marginTop: '1em'}}>
        <FootWrapper>
          <FooterColumn>
            <FooterHeader>Twin Silver</FooterHeader>
            <SocialIcons>
              <a href='https://www.facebook.com/twinsilverdesign'><Image height={20} width={20} src={fbLogoImg} alt='Facebook logo'/></a>
              <a href='https://twitter.com/twinsilverweb'><Image height={20} width={20} src={twitterLogoImg} alt='Twitter logo'/></a>
              <a href='components/templates/FooterContent'><Image height={20} width={20} src={instaLogoImg} alt='Instagram logo'/></a>
            </SocialIcons>
          </FooterColumn>
          <FooterColumn>
            <FooterHeader>Site</FooterHeader>
            {links.map(link =>
              <p key={link.text}><a href={link.url}>{link.text}</a></p>)}
          </FooterColumn>
          <FooterColumn>
            <FooterHeader>Legal</FooterHeader>
            <p><a href='https://www.termsfeed.com/live/2517a2ba-4b56-47a1-8a99-aeb8e52931d8'>Terms & Conditions</a></p>
            <p><a href='https://www.termsfeed.com/live/caf8a38e-a6e6-4a73-abc8-02b9957ab594'>Privacy Policy</a></p>
          </FooterColumn>
          <FooterColumn>
            <FooterHeader marginBottom='0'>Sign Up for Updates</FooterHeader>
            <form onSubmit={handleSubmit}>
              <Flex className='center-on-mobile' flexDirection='column'>
              <InputStyled
                type='email'
                placeholder='Please enter your email'
                value={emailForm}
                onChange={e => setEmailForm(e.target.value)}
              />
                <Button type='submit' margin='1em 0 0 0'>Sign Up</Button>
              </Flex>
            </form>
          </FooterColumn>
        </FootWrapper>
        <small style={{marginBottom: '1em'}}>Copyright 2021 Twin Silver Web Design, LLC</small>
      </FlexColumn>
    </Footer>
  )
}

export default FooterContent