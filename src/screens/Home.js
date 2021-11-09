
import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

function Home(props) {
  const {navigation} = props
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>HOME</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebebeb'
  },
  text: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold'
  },
  btn:{
    backgroundColor: "#043c75", 
    width: 150, 
    height: 30,
    alignItems:'center',
    borderRadius:20,
    justifyContent:'center'
  }
})

export default Home