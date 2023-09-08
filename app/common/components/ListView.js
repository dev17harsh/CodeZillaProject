import { StyleSheet, Text, View , Switch} from 'react-native'
import React from 'react'
import normalize from 'react-native-normalize'

const ListView = (props) => {
    const { item , toggleSwitch , type } = props
    return (
        <View style={styles.container}>
            <View style={styles.styleDescription} >
                <View style= {styles.textArea}>
                <Text style={styles.titletext} > {`${item.title.slice(0, 200)}... `}</Text>
                </View>
                {type != 'list' ? (
                <View>
                <Switch
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={item?.completed ? '#f5dd4b' : '#f4f3f4'}
                    value={item?.completed}
                    onValueChange={()=>{toggleSwitch(item?.id)}}
                />
                </View>
                ) : null}
            </View>
        </View>
    )
}

export default ListView

const styles = StyleSheet.create({
    container: {
        flex: 1,
        elevation: 10,
        backgroundColor: 'white',
        margin: normalize(10),
        justifyContent: 'center',
        borderRadius: normalize(10),
        padding: normalize(10)
    },
    titletext: {
        fontSize: normalize(15),
        color: 'gray',
        fontWeight: '600'
    },
    dectext: {
        fontSize: normalize(14),
        color: 'gray',
        fontWeight: '400'
    },
    styleDescription: {
        margin: normalize(5),
        flexDirection: 'row'
    },
    textArea:{
        width: '85%'
    }
})