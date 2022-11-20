import {Input, Text, Button} from 'native-base'
import React from 'react'

export {SignInScreen}

interface iSignInScreenProps {
}

const SignInScreen: React.FC<iSignInScreenProps> = ({}) => {
  return (<>
    
    <Text>SignIn</Text>
    <Input placeholder="SignIn"></Input>
    
    <Button> Submit</Button>

  </>)

}