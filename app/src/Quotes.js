import React from 'react'
import {View,Text,StyleSheet} from 'react-native';

const Quotes= () =>{
    return(
        <View style={style.container}>
          <Text> Quotes </Text>
        </View>
    )
}


const style =StyleSheet.create({
  container:{
    flex:1, backgroundColor:'#ebebeb',
    alignItems:'center',justifyContent:'center'
  }
})

export default  Quotes;