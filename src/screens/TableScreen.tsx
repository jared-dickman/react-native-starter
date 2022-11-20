import React from 'react'
import {StyleSheet, View, Text, TouchableOpacity, Alert} from 'react-native'
import {Table, TableWrapper, Col, Cols, Cell} from 'react-native-table-component'

export {TableScreen}

type tableData = ((JSX.Element | string)[][])

interface iTableScreenProps {

}

const TableScreen: React.FC<iTableScreenProps> = ({}) => {
  const elementButton = (value: string) => (
    <TouchableOpacity onPress={() => _alertIndex(value)}>
      <View style={styles.btn}>
        <Text style={styles.btnText}>button</Text>
      </View>
    </TouchableOpacity>)


  let initialTableData = [
    [elementButton('1'), 'at', 'b', 'c', 'd'],
    [elementButton('2'), '1', '2', '3', '4'],
    [elementButton('3'), 'a', 'b', 'c', 'd'],
  ]

  const [tableData, setTableData] = React.useState<tableData>(initialTableData)

  const [tableTitle, setTableTaitle] = React.useState<string[]>(['Title', 'Title2', 'Title3', 'Title4'])
  

  return (
    <View style={styles.container}>
      <Table style={{ flexDirection: 'row' }} borderStyle={{ borderWidth: 1 }}>
        {/* Left Wrapper */}
        <TableWrapper style={{ width: 80 }}>
          <Cell data="" style={styles.singleHead}/>
          <TableWrapper style={{ flexDirection: 'row' }}>
            <Col data={['H1', 'H2']} style={styles.head} heightArr={[60, 60]} textStyle={styles.text}/>
            <Col data={tableTitle} style={styles.title} heightArr={[30, 30, 30, 30]} textStyle={styles.titleText}></Col>
          </TableWrapper>
        </TableWrapper>

        {/* Right Wrapper */}
        <TableWrapper style={{ flex: 1 }}>
          <Cols data={tableData} heightArr={[40, 30, 30, 30, 30]} textStyle={styles.text}/>
        </TableWrapper>
      </Table>
    </View>)
  
  function _alertIndex(value: string): void {
    Alert.alert(`This is column ${value}`)
  }

}


const styles = StyleSheet.create({
                                   container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
                                   singleHead: { width: 80, height: 40, backgroundColor: '#c8e1ff' },
                                   head: { flex: 1, backgroundColor: '#c8e1ff' },
                                   title: { flex: 2, backgroundColor: '#f6f8fa' },
                                   titleText: { marginRight: 6, textAlign: 'right' },
                                   text: { textAlign: 'center' },
                                   btn: { width: 58, height: 18, marginLeft: 15, backgroundColor: '#c8e1ff', borderRadius: 2 },
                                   btnText: { textAlign: 'center' },
                                 })