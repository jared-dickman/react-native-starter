import * as React from 'react'
import { Button, View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Routes = {
  home: 'home',
  details: 'details',
}

const center = { flex: 1, alignItems: 'center', justifyContent: 'center' }

function HomeScreen({ navigation, extraData }) {
  return (
    <View style={center}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate(Routes.details, {
          randomNumber: Math.floor(Math.random() * 100),
        })}/>
    </View>)
}

const Stack = createNativeStackNavigator()

function DetailsScreen({ navigation, route }) {
  const { randomNumber } = route.params

  return (
    <View style={center}>

      <Text>Details Screen</Text>
      <Text>randomNumber: {JSON.stringify(randomNumber)}</Text>

      <Button
        title="Go to Details... again"
        onPress={() => navigation.push(Routes.details, {
          randomNumber: Math.floor(Math.random() * 100),
        })}/>

      <Button title="Go to Home" onPress={() => navigation.navigate(Routes.home, { /* params go here */ })}/>
      <Button title="Go back" onPress={() => navigation.goBack()}/>
    </View>)
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">

        {/*<Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Overview' }}/>*/}
        <Stack.Screen name={Routes.home}>
          {(props) =>
            <HomeScreen {...props} extraData={'someData'}/>}
        </Stack.Screen>

        <Stack.Screen name={Routes.details} component={DetailsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>)
}

export default App