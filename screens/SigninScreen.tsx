import {Input, Text, Button} from 'native-base'
import React from 'react'

export {SigninScreen}

interface iSigninScreenProps {
}

const SigninScreen: React.FC<iSigninScreenProps> = ({}) => {
  return (<>
    
    <Text>Signin</Text>
    <Input placeholder="Signin"></Input>
    
    <Button> Submit</Button>

  </>)

}