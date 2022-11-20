import * as React from 'react'
import {StyleProp} from 'react-native'
import {NativeBaseProvider} from 'native-base'
import {generateRouting} from './screens/Routing'

export {Styles}

const Styles: Record<string, StyleProp<any>> = {
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
} as const


function App() {
  return (
    <NativeBaseProvider>
      {generateRouting()}
    </NativeBaseProvider>)
}


export default App