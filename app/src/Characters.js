import React from 'react'
import {View,Text,StyleSheet} from 'react-native';

const Characters= () => {
    return(
        <View style={style.container}>
          <Text>Characters</Text>
        </View>
    )
}

const style= StyleSheet.create({
  container:{
    flex:1, backgroundColor:'#ebebeb',
    alignItems:'center',justifyContent:'center'
  }

})

export default Characters;