import React from 'react'
import {View,Text,StyleSheet} from 'react-native';

const Episodes= () =>{
    return(
        <View style={style.container}>
          <Text>Episodes</Text>
        </View>
    )
}


const style =StyleSheet.create({
  container:{
    flex:1, backgroundColor:'#ebebeb',
    alignItems:'center',justifyContent:'center'
  }
})

export default Episodes;