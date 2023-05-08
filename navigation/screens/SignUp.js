import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';


export default function SignUp(props) {
const test= ()=>{
    props.updateIsLogged(false)
    
}

  return (
   
      <View>
        <Button onPress={test} />
        <Text>Oé c greg et Salut c Ninho</Text>
      </View>
  )
}