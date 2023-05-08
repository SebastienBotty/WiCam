import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import MainContainer from './navigation/MainContainer'
import SignUp from './navigation/screens/SignUp'


export default function App() {

  const [isLogged,setLogged] = useState(false)
  const updateIsLogged = newValue => {
    setLogged(newValue);
  };
  return (
    isLogged ? (
      <SignUp updateIsLogged={updateIsLogged}/>
    ) : (
      <MainContainer />
    )
  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
