import React from 'react'
import {Button, Text} from 'native-base'
import {View} from 'react-native'
import {Styles} from '../Styles'
import {Routes} from '../Routing'
import {useAuthStore} from '../stores/AuthStore'

export {DetailsScreen}

interface iDetailsScreenProps {
  navigation: any
  route: any
}

const DetailsScreen: React.FC<iDetailsScreenProps> = ({ navigation, route }) => {
  const { randomNumber } = route.params
  return (
    <View style={Styles.center}>

      <Text>Details Screen</Text>
      <Text>randomNumber: {JSON.stringify(randomNumber)}</Text>
      
      <Button onPress={() => navigation.push(Routes.Details, {
        randomNumber: Math.floor(Math.random() * 100),
      })}>Go to Details... again</Button>

      <Button onPress={() => navigation.navigate(Routes.Home, { /* params go here */ })}>Go to Home</Button>
      <Button onPress={() => navigation.goBack()}>Go back</Button>
    </View>)
}