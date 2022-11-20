import React from 'react'
import {Input, Text, Button} from 'native-base'
import {GestureResponderEvent} from 'react-native'
import {useAuthStore} from '../stores/AuthStore'

export {SignInScreen}

interface iSignInScreenProps {
}

const SignInScreen: React.FC<iSignInScreenProps> = ({}) => {
  const setUserToken = useAuthStore(state => state.setUserToken)

  return (<>

    <Text>Sign In</Text>
    <Input placeholder="SignIn"></Input>

    <Button onPress={submit}> Submit</Button>

  </>)

  function submit(e: GestureResponderEvent): void {
    setUserToken(7)
  }

}