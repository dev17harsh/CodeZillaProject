import { View, Text , StyleSheet } from 'react-native'
import React from 'react'
import { Header } from '../../common/components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import normalize from 'react-native-normalize';

const ProfileScreen = ({navigation}) => {
  return (
    <SafeAreaView
    style={styles.mainConatiner}
>
    <Header Heading={'Profile Screen'} onPressMenu={()=>{
        navigation.toggleDrawer();
    }}/>

    <View style={styles.component}>
      <Text style={styles.text} >Profile screen </Text> 
    </View>

</SafeAreaView>
  )
}

export default ProfileScreen


const styles = StyleSheet.create({
  mainConatiner: {
      flex: 1,
      backgroundColor: 'white'
  },
  component: {
      flex: 1,
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
  },
  text: {
      fontSize: normalize(18),
      fontWeight: '500',
      color: 'gray'
  }
})