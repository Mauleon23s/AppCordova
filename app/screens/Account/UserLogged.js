
import React from "react";
import QRCode from 'react-native-qrcode-svg';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Button } from "react-native-elements";
import * as firebase from "firebase";

export default function UserLogged() {

  return (
    <ScrollView>

    <Image
        source={require("../../../assets/images/benny.png")}
        resizeMode="contain"
        style={{  height: 80, position:'absolute',marginLeft:200, marginTop:10 }}
      />
      <Image
        source={require("../../../assets/images/logo.png")}
        resizeMode="contain"
        style={{  height: 100, width: 140, marginLeft:10}}
    />
 
  <Card style={styles.containerStyle}>
  <Text style={styles.welcome} ></Text>
  <QRCode outerEyeStyle='circle'
      value="nss del trabajador"
      size={250}
      marginTop = {12}
      padding={30}
      logoMargin={20}
      logoBorderRadius={15}
    />
    <CardAction style={styles.container} >
      <CardButton
        onPress={() => {}}
        title="Generar QR"
        color="#FEB557"
        justifyContent="center"
      />
    </CardAction>
  </Card>
  <TouchableOpacity
        style={styles.btnEnter}
        onPress={() => firebase.auth().signOut()}
        >
        <Text style={styles.btnEntertext}>Registrar Asistencia</Text>
    </TouchableOpacity>
 
</ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center', 
    justifyContent:"center"
  },
  containerStyle: {
    borderWidth: 5,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 2,
    shadowColor: '#000',
    shadowOpacity: 1.8,
    shadowRadius: 2,
    elevation: 10,
    marginLeft: 15,
    marginRight: 10,
    marginTop: 5,
    alignItems: 'center', 
  },
  welcome: {
    fontSize: 17,
    marginTop: 10,
    margin: 10,
  },
  usuario: {
    fontSize: 17,
    marginTop: -10,
    margin: 10,
  },
  btnEnter: {
    justifyContent:'center',
    flexDirection:'row',
    backgroundColor:'#6bc263',
    alignItems:'center',
    marginTop:80,
    marginLeft:95,
    marginRight:95,
    padding:10
  },
  btnEntertext: {
    color:'#ffffff',
    fontWeight:'700',
    
  }
});
