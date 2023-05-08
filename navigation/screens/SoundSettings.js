import { useNavigation } from "@react-navigation/native";
import * as React from "react"
import { View,Text, StyleSheet, TextInput, Pressable, TouchableOpacity, Item } from "react-native"
import Sounds from "./Sounds";
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class SoundSettings extends React.Component{

  constructor(props){
    super(props)
    this.state={
      
    }
  }





  render(){
 <View> 
    <Text>SeoundSettings</Text>
  </View>
      
  }
}  

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 100,
    textAlign: 'center'
  },
  icons:{
    flex: 1,
    width: 50,
    height: 50,
    
  },
  item: {
    backgroundColor: '#CCD1D1',
    height: 20,
    width:'80%',
    borderRadius: 12,
    justifyContent:'space-between',
    flexDirection:'row',
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal:10,
    
    
  },
 

});




