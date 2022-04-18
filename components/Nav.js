import IconTab from './atoms/IconTab';
import {Icon} from '@iconify/react';
import ToolBar from '../components/ToolBar';
import {useEffect, useState} from 'react';
import Link from 'next/link';

const iconHeight = '32'

const Nav = ({user, setOpenNav}) => {
  const [openBar, setOpenBar] = useState(false)
  const toggleBar = () => setOpenBar(!openBar)

  useEffect(() => {
    setOpenNav(openBar)
  },[openBar, setOpenNav])
  
  return (
    <ToolBar side='left' className={openBar ? 'open' : 'closed'}>
      <Icon onClick={toggleBar} className='menu-icon' height='40' icon="ic:baseline-menu" />
      <Link href='/' passHref>
        <IconTab>
          <Icon height={iconHeight} icon="mdi:home" />
           <div className='label' >Home</div>
        </IconTab>
      </Link>
      <Link href='/payment' passHref>
        <IconTab>
          <Icon  height={iconHeight} icon="ic:baseline-attach-money" />
          <div className='label'>Payments</div>
        </IconTab>
      </Link>
      <Link href='/schedule' passHref>
        <IconTab>
          <Icon height={iconHeight} icon="ic:baseline-calendar-today" />
          <div className='label'>Schedule<br/>Visit</div>
        </IconTab>
      </Link>
      <Link href='/account' passHref>
        <IconTab>
          <Icon height={iconHeight} icon="ic:baseline-account-circle" />
          <div className='label'>Account</div>
        </IconTab>
      </Link>
      { user ?
        <Link href='/signout' passHref>
          <IconTab>
            <Icon height={iconHeight} icon="ic:baseline-log-out" />
            <div className='label'>Sign Out</div>
          </IconTab>
        </Link>
        :
        <Link href='/signin' passHref>
          <IconTab>
            <Icon height={iconHeight} icon="ic:baseline-log-in" />
            <div className='label'>Sign In</div>
          </IconTab>
        </Link>
      }

      <Link href='/about' passHref>
        <IconTab>
          <Icon height={iconHeight} icon="ic:baseline-help" />
          <div className='label'>About Us</div>
        </IconTab>
      </Link>
    </ToolBar>
  )
}

export default Nav