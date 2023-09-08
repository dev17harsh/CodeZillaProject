import { View, Text , StyleSheet } from 'react-native'
import React  ,{useState , useEffect}from 'react'
import axios from 'axios'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FlatList } from 'react-native-gesture-handler'
import { Header } from '../../common/components/Header'
import normalize from 'react-native-normalize'
import ListView from '../../common/components/ListView'

const TaskScreen = () => {

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

  const renderitem = (item) => {
    return (
        <ListView item={item?.item} type={'list'} />
    )
}

  return (
    <SafeAreaView
    style={styles.mainConatiner}
>
    <Header Heading={'All List'} />

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

export default TaskScreen


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