import * as React from 'react'
import {Button, View, Text, StyleProp} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {EnthusiasmScreen} from './screens/EnthusiasmScreen'
import {DetailsScreen} from './screens/DetailsScreen'

export {Routes, Styles}

const Routes = {
  Home: 'Home',
  Details: 'Details',
  Enthusiasm: 'Enthusiasm',
} as const


const Styles: Record<string, StyleProp<any>> = {
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
} as const


function HomeScreen<iHomeScreenProps, iHomeScreenState>({ navigation, extraData }: { navigation: any, extraData: string }) {
  return (
    <View style={Styles.center}>
      <Text>Home Screen typescript</Text>
      <Button title="Go to Details"
              onPress={() => navigation.navigate(Routes.Details, {
                randomNumber: Math.floor(Math.random() * 100),
              })}/>

      <Button title="Go to Enthusiasm Recorder"
              onPress={() => { navigation.navigate(Routes.Enthusiasm) }}/>

    </View>)
}


type RootStackParamList = {
  Home: undefined;
  Details: { userId: string };
  Enthusiasm: { sort: 'latest' | 'top' } | undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>()


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">

        {/*<Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Overview' }}/>*/}
        <Stack.Screen name={Routes.Home}>
          {(props) =>
            <HomeScreen {...props} extraData={'someData'}/>}
        </Stack.Screen>

        <Stack.Screen name={Routes.Details} component={DetailsScreen}/>

        <Stack.Screen name={Routes.Enthusiasm}>
          {(props) =>
            <EnthusiasmScreen {...props} name={'name'} baseEnthusiasmLevel={2}/>}
        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>)
}

export default App