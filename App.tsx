import * as React from 'react'
import {NativeBaseProvider} from 'native-base'
import {generateRouting} from './Routing'

function App() {
  return (
    <NativeBaseProvider>
      {generateRouting()}
    </NativeBaseProvider>)
}

export default App