import '../styles/normalize.css'
import theme from '../styles/theme';
import GlobalStyles from '../styles/GlobalStyles';
import {ThemeProvider} from 'styled-components';
import PageContainer from '../components/atoms/PageContainer';
import {Amplify, Auth, Hub} from 'aws-amplify';
import awsconfig from '../src/aws-exports'
import {useEffect, useState} from 'react';
import CookiePopup from '../components/organisms/CookiePopup';
import {useCookies} from 'react-cookie';
import Script from 'next/script';
import Head from 'next/head';
import Nav from '../components/Nav';
import HomeContainer from '../components/HomeContainer';
import dynamic from 'next/dynamic';
import useWindowDimensions from '../lib/useWindowDimensions';

Amplify.configure({...awsconfig, ssr: true});

const startAnalytics = () => {
  window.dataLayer = window.dataLayer || [];
  function gtag(){window.dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-217800713-1');
}

function App({ Component, pageProps }) {
  const { width } = useWindowDimensions();
  const [openNav, setOpenNav] = useState(false)
  const [cookies, setCookie] = useCookies(["ccm_accepted", "cookie_settings"])
  const [cookiePopup, setCookiePopup] = useState(() => {
    console.log(`Show popup: ${cookies.ccm_accepted !== "true"}`)
 //   return cookies.ccm_accepted !== "true";
    return false;
  })
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

  useEffect(() => {
    if(!cookiePopup) {
      const settings = cookies.cookie_settings //JSON.parse(getCookie("cookie_settings"))
      console.log(settings)
      if(settings?.analytics === 'true') {
        startAnalytics()
      }
    }
  }, [cookiePopup, cookies.cookie_settings])

  const handleAccept = () => {
    setCookie("ccm_accepted", "true", {path: '/'})
    setCookie("cookie_settings", '{"analytics": "true"}', {path: '/'})
    startAnalytics()
    setCookiePopup(false)
  }

  const handleDecline = () => {
    setCookie("ccm_accepted", "true", {path: '/'})
    setCookie("cookie_settings", '{"analytics": "false"}', {path: '/'})
    setCookiePopup(false)
  }

  return (
    <>
      <Head>
        <title>Twin Silver Web Design</title>
        <meta charSet="utf-8"/>
        <link rel="icon" href="/assets/images/medical_logo.svg"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="theme-color" content="#000000"/>
        <meta
          name="description"
          content="Full Service Website Design and Development"
        />
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=UA-217800713-1"
        strategy="afterInteractive"
      />
      <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <PageContainer>
          <HomeContainer style={{paddingLeft: (width < 600 && openNav) || width >= 600 ? '120px' : '60px'}}>
            <Nav user={user} setOpenNav={setOpenNav} />
            <Component user={user} {...pageProps} />
          </HomeContainer>
        </PageContainer>
        { cookiePopup &&
          <CookiePopup onAccept={handleAccept} onDecline={handleDecline}>
            We use cookies to provide an improved user experience and better understand our customers.
          </CookiePopup>
        }
      </ThemeProvider>
    </>
  )
}

/*
export default dynamic(() => Promise.resolve(App), {
  ssr: false,
})

 */

export default App
