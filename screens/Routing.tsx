import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {DetailsScreen} from './DetailsScreen'
import {SigninScreen} from './SigninScreen'
import {EnthusiasmScreen} from './EnthusiasmScreen'
import {TableScreen} from './TableScreen'
import {OtherScreen} from './OtherScreen'
import {HomeScreen} from './HomeScreen'
import {SplashScreen} from './SplashScreen'

export {generateRouting, Routes}

// Specifying undefined means that the route doesn't have params. A union type with undefined (e.g. SomeType | undefined) means that params are optional.
type RootStackParamList = {
  Home: undefined;
  Details: undefined
  Enthusiasm: undefined
  Table: undefined
  Other: undefined
  Signin: undefined
  Splash: undefined
}
const Stack = createNativeStackNavigator<RootStackParamList>()

const Routes = {
  Home: 'Home',
  Details: 'Details',
  Enthusiasm: 'Enthusiasm',
  Table: 'Table',
  Other: 'Other',
  Signin: 'Signin',
  Splash: 'Signin',
} as const


function generateRouting() {
  const isSignedIn = true

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {isSignedIn ?
         (<>
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

         </>) :
         (<>
           <Stack.Screen name="Signin" component={SigninScreen}/>
           <Stack.Screen name="Splash" component={SplashScreen}/>
         </>)
        }

      </Stack.Navigator>
    </NavigationContainer>)
}