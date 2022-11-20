import React, {useState} from 'react'
import {StyleSheet} from 'react-native'
import {Button, Text, View} from 'native-base'

export {EnthusiasmScreen}

export type iEnthusiasmScreenProps = {
  name: string
  baseEnthusiasmLevel?: number
}

const EnthusiasmScreen: React.FC<iEnthusiasmScreenProps> = ({
                                                              name,
                                                              baseEnthusiasmLevel = 0,
                                                            }) => {

  const [enthusiasmLevel, setEnthusiasmLevel] = useState(baseEnthusiasmLevel)

  const onIncrement = () => setEnthusiasmLevel(enthusiasmLevel + 1)
  const onDecrement = () => setEnthusiasmLevel(enthusiasmLevel > 0 ? enthusiasmLevel - 1 : 0)

  const getExclamationPoints = (numChars: number) => numChars > 0 ? Array(numChars + 1).join('!') : ''

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>
        Hello {name}
        {getExclamationPoints(enthusiasmLevel)}
      </Text>
      <View>
        <Button
          accessibilityLabel="increment"
          onPress={onIncrement}
          color="blue">
          Increase enthusiasm
        </Button>
        <Button
          accessibilityLabel="decrement"
          onPress={onDecrement}
          color="red">
          Decrease enthusiasm
        </Button>
      </View>
    </View>)
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    greeting: {
      fontSize: 20,
      fontWeight: 'bold',
      margin: 16,
    },
  })