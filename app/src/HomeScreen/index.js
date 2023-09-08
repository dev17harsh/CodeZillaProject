import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import axios from 'axios'
import { Header } from '../../common/components/Header'
import normalize from 'react-native-normalize'
import ListView from '../../common/components/ListView'

const HomeScreen = ({navigation}) => {
    const [data, setData] = useState([])
    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        try {
            const data = await axios.get('https://jsonplaceholder.typicode.com/todos')
            if (data?.status) {
                setData(data?.data)
            }
        } catch (err) {
            console.log('error', err)
        }

    }
    const updateValue = (val)=>{
        const dataArray = [...data]
        const updateVal =  dataArray.map((value) =>{
            if(value?.id === val){
                value.completed = !value.completed
            }
            return value
        })
        setData(updateVal)
    }

    const renderitem = (item) => {
        return (
            <ListView item={item?.item} toggleSwitch={updateValue}/>
        )
    }

    return (
        <SafeAreaView
            style={styles.mainConatiner}
        >
            <Header Heading={'List View'} onPressMenu={()=>{
                navigation.toggleDrawer();
            }}/>

            <FlatList
                data={data}
                renderItem={renderitem}
                ListEmptyComponent={() => {
                    return (
                        <View style={styles.emptyComponent}>
                            <Text style={styles.noFoundtext} >
                                NO Result Found
                            </Text>

                        </View>
                    )
                }}
            />

        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    mainConatiner: {
        flex: 1,
        backgroundColor: 'white'
    },
    emptyComponent: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    noFoundtext: {
        fontSize: normalize(18),
        fontWeight: '500',
        color: 'gray'
    }
})