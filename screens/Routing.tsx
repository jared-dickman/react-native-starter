import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {DetailsScreen} from './DetailsScreen'
import {EnthusiasmScreen} from './EnthusiasmScreen'
import {TableScreen} from './TableScreen'
import {OtherScreen} from './OtherScreen'
import {HomeScreen} from './HomeScreen'
import {SplashScreen} from './SplashScreen'
import {SignInScreen} from './SignInScreen'
import { useAuthStore } from '../stores/AuthStore'

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
  SignIn: 'SignIn',
  Splash: 'Signin',
} as const


function generateRouting() {
  const userToken = useAuthStore(state => state.userToken)

  const isSignedIn = !!userToken  // If userToken exists, we assume the user is logged in

  // This can usually be done by checking if we have a token in SecureStore and validating the token.
  // isLoading - We set this to true when we're trying to check if we already have a token saved in SecureStore
  const isLoadingApp = false

  let isSignOut = false //state.isSignout // isSignout - We set this to true when user is signing out, otherwise set it to false


  if (isLoadingApp) return <SplashScreen/>// We haven't finished checking for the token yet

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
             {props => <EnthusiasmScreen {...props} name={'exclemation world'} baseEnthusiasmLevel={3}/>}
           </Stack.Screen>

           <Stack.Screen name={Routes.Table}>
             {props => <TableScreen {...props}/>}
           </Stack.Screen>

           <Stack.Screen name={Routes.Other}>
             {props => <OtherScreen {...props}/>}
           </Stack.Screen>
         </>)
                    :

         (<>
           <Stack.Screen name="Signin"
                         component={SignInScreen}
                         options={{
                           title: 'Sign in',
                           // When logging out, a pop animation feels intuitive
                           // You can remove this if you want the default 'push' animation
                           animationTypeForReplace: isSignOut ? 'pop' : 'push',
                         }}/>
         </>)}

      </Stack.Navigator>
    </NavigationContainer>)
}