import React, { useRef } from "react";
import { StyleSheet, View, ScrollView, Text, Image } from "react-native";
import LoginForm from "../../components/Accounts/LoginForm";
import Toast from "react-native-easy-toast";

export default function Login(props) {
  const { navigation } = props;
  const toastRef = useRef();

  return (
    <ScrollView>
      
      <Image
        source={require("../../../assets/images/logo.png")}
        resizeMode="contain"
        
        style={{ marginLeft:50, width: "70%" ,height: 100, marginTop: 70 }}
      />
      <View style={{ marginRight: 40, marginLeft: 40, marginTop:30 }}>
        <LoginForm toastRef={toastRef} />
        
      </View>
     
      <Toast ref={toastRef} position="center" opacity={0.5} />
    </ScrollView>
  );
}
/*
function CreateAccount(props) {
  const {} = props;

  return (
    <Text style={{ marginTop: 15, marginLeft: 10, marginRight: 10 }}>
      ¿Aún no tienes una cuenta ?{" "}
      <Text
        styles={{ color: "#00a680", fontWeight: "bold" }}
        onPress={console.log("Navegando al formulario de registro")}
      >
        Régistrarte
      </Text>
    </Text>
  );
} */

const styles = StyleSheet.create({
  viewContainer: {
    marginRight: 40,
    marginLeft: 40
  },
  textRegister: {
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10
  },
  btnRegister: {
    color: "#00a680",
    fontWeight: "bold"
  }
});
