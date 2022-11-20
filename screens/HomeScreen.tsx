import * as React from 'react'
import {View} from 'react-native'
import {Box, Button} from 'native-base'
import {Routes} from './Routing'
import { Styles } from '../Styles'

export {HomeScreen}

interface iHomeScreenProps {
}

function HomeScreen<iHomeScreenProps>({ navigation, extraData }: { navigation: any, extraData: string }) {
  return (
    <View style={Styles.center}>
      <Box>Hello Home Screen</Box>

      <Button onPress={() => navigation.navigate(Routes.Details, { randomNumber: Math.floor(Math.random() * 100) })}>Go to Details</Button>
      <Button onPress={() => { navigation.navigate(Routes.Enthusiasm) }}>Go to Enthusiasm Recorder</Button>
      <Button onPress={() => { navigation.navigate(Routes.Table) }}>Go to Table</Button>
      <Button onPress={() => { navigation.navigate(Routes.Other) }}>Go to Other</Button>
    </View>)
}