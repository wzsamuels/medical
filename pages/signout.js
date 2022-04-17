import {useEffect, useState} from 'react';
import { useRouter } from 'next/router'
import {Auth} from 'aws-amplify';
import Modal from '../components/molecules/Modal';

const Signout = () => {
  const [signingOut, setSigningOut] = useState(true)
  const router = useRouter()

  useEffect(() => {
    Auth.signOut()
      .then(() => setSigningOut(false))
      .catch((error) =>
        console.log('Error signing out:', error))

  }, [])

  if(!signingOut) {
    router.push('/')
  }

  return (
    <Modal animate='false ' title='Signing Out...'/>
  )
}

export default Signout