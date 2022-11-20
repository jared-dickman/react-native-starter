import * as React from 'react'
import {NativeBaseProvider} from 'native-base'
import {generateRouting} from './screens/Routing'

function App() {
  return (
    <NativeBaseProvider>
      {generateRouting()}
    </NativeBaseProvider>)
}


export default App