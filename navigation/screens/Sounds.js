import React,{useState} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
//import Video from 'react-native-video';
import { Col, Row, Grid } from "react-native-easy-grid";
import Ionicons from 'react-native-vector-icons/Ionicons';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Sounds() {
  const videoSource = {uri:'https://www.youtube.com/watch?v=Sa94TmknHaU'};
  const logo1Source = {uri:'https://fastly.picsum.photos/id/875/200/300.jpg?hmac=9NSoqXHP89pGlq4Sz3OgGxjx5c91YHJkcIOBFgNJ8xA'};
  const logo2Source = {uri:'https://fastly.picsum.photos/id/875/200/300.jpg?hmac=9NSoqXHP89pGlq4Sz3OgGxjx5c91YHJkcIOBFgNJ8xA'};
  const logo3Source = {uri:'https://fastly.picsum.photos/id/875/200/300.jpg?hmac=9NSoqXHP89pGlq4Sz3OgGxjx5c91YHJkcIOBFgNJ8xA'};
  const logo4Source = {uri:'https://fastly.picsum.photos/id/875/200/300.jpg?hmac=9NSoqXHP89pGlq4Sz3OgGxjx5c91YHJkcIOBFgNJ8xA'};
  const logo5Source = {uri:'https://fastly.picsum.photos/id/875/200/300.jpg?hmac=9NSoqXHP89pGlq4Sz3OgGxjx5c91YHJkcIOBFgNJ8xA'};
  const logo6Source = {uri:'https://fastly.picsum.photos/id/875/200/300.jpg?hmac=9NSoqXHP89pGlq4Sz3OgGxjx5c91YHJkcIOBFgNJ8xA'};

  const [isMuted,setIsMuted]= useState(true)
  const [isNotified,setIsNotified]= useState(false)
  const [isRinging, setIsRinging] = useState(false)

  const switchMic = ()=>{
    setIsMuted(!isMuted)
  }

  const switchNotif =()=>{
    setIsNotified(!isNotified)
    console.log(isNotified)
  }

  const switchRinging = ()=>{
    setIsRinging(!isRinging)
    if (isRinging){
      //joue le son
    }
  }


  return (
    <View style={styles.container}>
      <p style={styles.video}> Vidéo soon</p>
      <Grid style={styles.grid}>
        <Row>
          <Col>
          <TouchableOpacity onPress={switchMic}   style={styles.ionIcons}
>
              <Ionicons
                name={isMuted ? 'mic-off-outline' : 'mic'}
                size={50}
                color={isMuted ? '' : 'green'}
              />
              <Text style= {isMuted? styles.logoDescOFF: styles.logoDescON} >Micro</Text>

          </TouchableOpacity>
          </Col>
          <Col>
            <TouchableOpacity onPress={switchNotif}  style={styles.ionIcons}
>
              <Ionicons
                  name={isNotified ? 'notifications' : 'notifications-off-outline'}
                  size={50}
                  color='black'

                />
                <Text style= {isNotified? styles.logoDescON: styles.logoDescOFF} >Notifications</Text>
            </TouchableOpacity>
          </Col>
          <Col>
          <TouchableOpacity onPress={switchRinging}  style={styles.ionIcons}>
              <Ionicons
                name={isRinging? 'volume-high' : 'volume-mute-outline'}
                size={50}
                color="black"
               
              />
              <Text style= {isRinging? styles.logoDescON: styles.logoDescOFF}>Sirène</Text>

          </TouchableOpacity>
          </Col>
        </Row>
        <Row>
          <Col>
            <TouchableOpacity onPress={() => onPressLogo('Logo 4')}>
              <Image source={logo4Source} style={styles.logo} />
            </TouchableOpacity>
          </Col>
          <Col>
            <TouchableOpacity onPress={() => onPressLogo('Logo 5')}>
              <Image source={logo5Source} style={styles.logo} />
            </TouchableOpacity>
          </Col>
          <Col>
            <TouchableOpacity onPress={() => onPressLogo('Logo 6')}>
              <Image source={logo6Source} style={styles.logo} />
            </TouchableOpacity>
          </Col>
        </Row>
      </Grid>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {
    width: windowWidth,
    height: windowHeight / 2,
    backgroundColor:"black",
    color:'white'
  },
  grid: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ionIcons: {
    alignItems:'center',
    width: windowWidth / 4,
    height: windowWidth / 4,
    marginLeft: 10,
    marginRight:10,
  },
  logoDescOFF:{
    textAlign:"center",
  }, logoDescON:{
    textAlign:"center",
    fontWeight:'bold',
  },

});
