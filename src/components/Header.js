// import { Icon } from 'native-base';
import React from 'react';
import { useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import colors from '../assets/colors';
const { width, height } = Dimensions.get('window');

const Header = ({ showBack, title, onBackPress }) => {
    return <View style={styles.container}>
        {/* back icon  */}
        {showBack && <View style={styles.rowView}>
            {/* <Icon type="AntDesign" name="arrowleft" style={styles.iconStyle} /> */}
            <Text style={styles.textStyle}>Back</Text>
        </View>}
        {/* title  */}
        <Text style={styles.titleStyle}>{title}</Text>

        {/* search icon  */}
        <View style={styles.rowView}>
            {/* <Icon type="EvilIcons" name="search" style={styles.searchStyle} /> */}
        </View>
    </View>
}

export default Header;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal : width * 0.05,
    },
    iconStyle: {
        color: colors.themeBlue,
        paddingRight: width * 0.02,
        fontSize: width * 0.03,
    },
    rowView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textStyle: {
        color: colors.themeBlue,
        fontWeight:'800',
        fontSize: width * 0.05,
    },
    titleStyle: {
        color: colors.themeBlue,
        fontSize: width * 0.045,
    },
    searchStyle: {
        color: 'rgba(0,0,0,0.1)',
        paddingRight: width * 0.02,
        fontSize: width * 0.03,
    }

})