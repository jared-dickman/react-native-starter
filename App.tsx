import * as React from 'react'
import {View, StyleProp} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {EnthusiasmScreen} from './screens/EnthusiasmScreen'
import {DetailsScreen} from './screens/DetailsScreen'
import {TableScreen} from './screens/TableScreen'
import {OtherScreen} from './screens/OtherScreen'
import {Box, Button, NativeBaseProvider} from 'native-base'

export {Routes, Styles}

const Routes = {
  Home: 'Home',
  Details: 'Details',
  Enthusiasm: 'Enthusiasm',
  Table: 'Table',
  Other: 'Other',
} as const


const Styles: Record<string, StyleProp<any>> = {
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
} as const


function HomeScreen<iHomeScreenProps, iHomeScreenState>({ navigation, extraData }: { navigation: any, extraData: string }) {
  return (
    <View style={Styles.center}>
      <Box>Hello Home Screen</Box>

      <Button onPress={() => navigation.navigate(Routes.Details, { randomNumber: Math.floor(Math.random() * 100) })}>Go to Details</Button>
      <Button onPress={() => { navigation.navigate(Routes.Enthusiasm) }}>Go to Enthusiasm Recorder</Button>
      <Button onPress={() => { navigation.navigate(Routes.Table) }}>Go to Table</Button>
      <Button onPress={() => { navigation.navigate(Routes.Other) }}>Go to Other</Button>
    </View>)
}


// Specifying undefined means that the route doesn't have params. A union type with undefined (e.g. SomeType | undefined) means that params are optional.
type RootStackParamList = {
  Home: undefined;
  Details: undefined
  Enthusiasm: undefined
  Table: undefined
  Other: undefined
};
const Stack = createNativeStackNavigator<RootStackParamList>()


function App() {
  return (
    <NativeBaseProvider>

      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">

          <Stack.Screen name={Routes.Home}>
            {props => <HomeScreen {...props} extraData={'someData'}/>}
          </Stack.Screen>

          <Stack.Screen name={Routes.Details} component={DetailsScreen}/>

          <Stack.Screen name={Routes.Enthusiasm}>
            {props => <EnthusiasmScreen {...props} name={'money'} baseEnthusiasmLevel={2}/>}
          </Stack.Screen>

          <Stack.Screen name={Routes.Table}>
            {props => <TableScreen {...props}/>}
          </Stack.Screen>

          <Stack.Screen name={Routes.Other}>
            {props => <OtherScreen {...props}/>}
          </Stack.Screen>

        </Stack.Navigator>
      </NavigationContainer>

    </NativeBaseProvider>

  )
}

export default App