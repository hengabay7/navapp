import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import {View,Text,StyleSheet,Image} from 'react-native';

const Characters= (props) => {

  const [searchName, setSearchName] = useState('characters');
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);


  const doSomething = async () => {
    setIsLoading(true);
    const api = `https://www.breakingbadapi.com/api/${searchName}`;
    const response = await fetch(api, {
      method: 'get'
    });
    const data = await response.json();
    setResults(data);
    setIsLoading(false);
  } 
  const status = props.character.status;
  let bg = '#000000';
  
  switch (status) {
    case 'Alive':
       bg='#10C620';
       break;
    case 'Deceased':
       bg='#FB2D20';
       break;
  
    case 'Presumed dead':
       bg='#B20AE3';
       break;    
    default:
      break;
  } 
  
    return(
        <View style={myStyle.row_container}>
  
          <View style={{width:'3%',height:'100%',backgroundColor:bg}}></View>
  
           <View style={myStyle.image_container}>
               <Image style={myStyle.image} source={{uri: props.character.img }} />
             </View>
              <View style={myStyle.name_container}>
                  <Text style={myStyle.name}>{props.character.name}</Text>
                  <Text style={props.character.nickname}></Text>
                  <View style={myStyle.line}></View>
                  <Text style={myStyle.occupation}>{props.character.occupation}</Text>
             </View>
          </View>        
      )
}

const myStyle = StyleSheet.create( {
  row_container: {
    width: '100%', flexDirection: 'row', marginBottom: 12,
    backgroundColor: '#ffffff', borderTopLeftRadius: 0,borderTopRightRadius:12,
    borderBottomLeftRadius:0, borderBottomRightRadius:12,
   },

   image: { width: '100%', height: 120,},
   image_container:{ width:'30%'},
   line: { width:'100%',height:1,backgroundColor:'#e5383b',marginVertica:5,},
   name_container: { width: '67%', padding:10,},
   name: {fontSize:17, fontWeight:'700',color:'#e5383b'},
   occupation: {fontSize:10, fontStyle:'italic'},

});

export default Characters;