import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const HomeScreen = () => {
  const [ssid, setSsid] = useState('');
  const [password, setPassword] = useState('');
  const [qrValue, setQRValue] = useState('');

  const generateQRCode = () => {
    const qrString = `WIFI:S:${ssid};T:WPA;P:${password};;`;
    setQRValue(qrString);
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TextInput
        style={{ height: 40, width: '80%', borderWidth: 1, marginBottom: 20,textAlign:'center' }}
        placeholder="Nom du réseau WiFi "
        onChangeText={text => setSsid(text)}
        value={ssid}
      />
      <TextInput
        style={{ height: 40, width: '80%', borderWidth: 1, marginBottom: 20, textAlign:'center' }}
        placeholder="Mot de passe"
        onChangeText={text => setPassword(text)}
        value={password}
      />
      <Button title="Générer le QR code" onPress={generateQRCode}/>
      {qrValue !== '' && (
        <QRCode
          value={qrValue}
          size={200}
          color="black"
          backgroundColor="white"
          style={{padding:50}}
        />
      )}
    </View>
  );
};

export default HomeScreen;
