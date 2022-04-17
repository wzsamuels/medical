import React, {useEffect, useState} from 'react';
import {Auth} from 'aws-amplify'
import { useRouter } from 'next/router'

// eslint-disable-next-line react/display-name
const protectedRoute = (Comp, route = '/signin') => (props) => {
  const navigate = useRouter()
  const [checkingAuth, setCheckingAuth] = useState(true)

  useEffect(() => {
    async function checkAuthState() {
      try {
        await Auth.currentAuthenticatedUser()
        setCheckingAuth(false)
      } catch (err) {
        navigate.push(route)
      }
    }

    checkAuthState().then(userData => console.log(userData))
  }, [navigate])

  if(checkingAuth)
    return null

  return <Comp {...props} />
}

export default protectedRoute