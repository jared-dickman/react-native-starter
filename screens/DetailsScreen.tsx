import React from 'react'
import {Button, Text, View } from 'react-native'
import {Routes, Styles } from '../App'

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

      <Button
        title="Go to Details... again"
        onPress={() => navigation.push(Routes.Details, {
          randomNumber: Math.floor(Math.random() * 100),
        })}/>

      <Button title="Go to Home" onPress={() => navigation.navigate(Routes.Home, { /* params go here */ })}/>
      <Button title="Go back" onPress={() => navigation.goBack()}/>
    </View>)
}