import React, {useEffect, useState} from 'react';
import Flex from '../atoms/Flex';
import {Drawer, DrawerContent, DrawerFooter, DrawerHeader, DrawerItem} from '../organisms/Drawer';
import {Icon} from '@iconify/react';
import {Auth, Hub} from "aws-amplify";
import tsImage from '../../public/assets/images/logos/ts-text.svg'
import TopNav from '../organisms/NavBar';
import Link from 'next/link'
import Image from 'next/image'

export default function NavBar({links, position}) {
  const [drawerClosing, setDrawerClosing] = useState(false);
  const [drawerOpen, setDrawer] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    Hub.listen('auth', ({ payload: { event, data } }) => {
      switch (event) {
        case 'signIn':
        case 'cognitoHostedUI':
          getUser().then(userData => setUser(userData));
          break;
        case 'signOut':
          setUser(null);
          break;
        case 'signIn_failure':
        case 'cognitoHostedUI_failure':
          console.log('Sign in failure', data);
          break;
        default:
          console.log(`Unexpected Hub event: ${JSON.stringify(event)}`)
      }
    });

    getUser().then(userData => setUser(userData));
  }, []);

  function getUser() {
    return Auth.currentAuthenticatedUser()
      .then(userData => userData)
      .catch(() => console.log('Not signed in'));
  }


  const toggleDrawer = () => { setDrawer(!drawerOpen) };
  const callback = () => e => {
    if(e.animationName === 'SlideOut') {
      setDrawer(false);
      setDrawerClosing(false);
    }
  }

  return (
    <>
      <TopNav position={position}>
        <Flex>
          <button onClick={toggleDrawer} className="icon menu"><Icon height={18} icon="ic:baseline-menu" /></button>
          <Link href='/' passHref style={{height: '50px', padding: '0'}}>
            <Flex className='logo' height='100%'>
              <Image height={50} width={150} style={{padding: '2px 1em'}} src={tsImage} alt='Twin Silver Logo'/>
            </Flex>
          </Link>
        </Flex>
        <div className ='hide'>
          <Flex style={{flexWrap:'no-wrap'}}>
            {
              links.map((link, i) =>
                <Link key={i} href={link.url}>{link.text}</Link>)
            }
          </Flex>
        </div>
        <div style={{flexBasis: 'auto'}}/>
      </TopNav>

      <Drawer onClick={() => setDrawerClosing(true)} open={drawerOpen} closing={drawerClosing}>
        <DrawerContent onClick={() => setDrawerClosing(true)}
                       className = {`${drawerClosing ? 'ClosedDrawer' : 'OpenDrawer'}`}
                       onAnimationEnd={callback()}>
          <DrawerHeader>
            <button><Icon height={18} icon="ic:baseline-menu" /></button>
            <Link
              href='/'
              passHref
              style={{height: '50px', padding: '0'}}
            >
              <Flex style={{height:'100%', padding: '2px 1em'}}>
                <Image src={tsImage} alt='Twin Silver Logo'/>
              </Flex>
            </Link>
          </DrawerHeader>
          {
            links.map(link =>
              <Link
                href={link.url}
                passHref
                style={{height: '50px', padding: '0'}}
                key={link.text}
              >
                <DrawerItem>
                  {link.text}
                </DrawerItem>
              </Link>
            )
          }
          <DrawerFooter>
            <div>© 2022 Twin Silver Web Design LLC</div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

/*
<div>
              <Link t>Terms</Link>
              <Link>Privacy Policy</Link>
            </div>
 */