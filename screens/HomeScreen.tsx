import * as React from 'react'
import {View} from 'react-native'
import {Box, Button} from 'native-base'
import {Routes} from './Routing'
import {Styles} from '../Styles'
import {useAuthStore} from '../stores/AuthStore'

export {HomeScreen}

interface iHomeScreenProps {
}

function HomeScreen<iHomeScreenProps>({ navigation, extraData }: { navigation: any, extraData: string }) {
  const userToken = useAuthStore(state => state.userToken)
  const setUserToken = useAuthStore(state => state.setUserToken)
  return (
    <View style={Styles.center}>
      <Box>Hello Home Screen</Box>

      <Box>User Token: {userToken}</Box>

      <Button onPress={() => navigation.navigate(Routes.Details, { randomNumber: Math.floor(Math.random() * 100) })}>Go to Details</Button>
      <Button onPress={() => { navigation.navigate(Routes.Enthusiasm) }}>Go to Enthusiasm Recorder</Button>
      <Button onPress={() => { navigation.navigate(Routes.Table) }}>Go to Table</Button>
      <Button onPress={() => { navigation.navigate(Routes.Other) }}>Go to Other</Button>

      <Button onPress={e => { setUserToken(undefined) }}>Logout</Button>
    </View>)
}