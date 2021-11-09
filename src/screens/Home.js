
import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

function Home(props) {
  const {navigation} = props
  return (
    <View style={styles.container}>
      <View>
      <TouchableOpacity style={styles.btn} 
      onPress={() => {
        props.navigation.navigate('LogIn')
        console.log("work")
      }}
      >
        <Text style={styles.text}>
          Log in
        </Text>
      </TouchableOpacity>
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
    color: 'white',
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