import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import normalize from 'react-native-normalize'
import Icon from 'react-native-vector-icons/Ionicons';

export const Header = (props) => {
    const { Heading,  onPressMenu} = props
    return (
        <View style={styles.mainContainer} >
            <View style={styles.leftView}>
                <TouchableOpacity onPress={onPressMenu}>
                <Icon name={'menu'} size={30} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.centerView}>
                <Text style={styles.headingText}> {Heading}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        height: normalize(60),
        flexDirection: 'row'
    },
    leftView: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    centerView: {
        flex: 0.6,
        justifyContent: 'center',
    },
    rowDirection:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    headingText:{
        color:'#FF8C00',
        fontSize: normalize(22),
        fontWeight: '600'
    }
})