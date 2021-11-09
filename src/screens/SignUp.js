import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Button from '../components/Button'
const SignUp = ({ navigation }) => {
    const _onPressSignUp = () => {
        navigation.navigate('Home')
    }
    return (
        <View style={styles.container}>

            <Button title="Signup" onBtnPress={() => _onPressSignUp()} />

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
        color: '#101010',
        fontSize: 24,
        fontWeight: 'bold'
    },

    btn: {
        backgroundColor: "#043c75",
        width: 150,
        height: 30,
        alignItems: 'center',
        borderRadius: 20,
        justifyContent: 'center'
    }
})

export default SignUp
