import { createStackNavigator } from "react-navigation-stack";
import MyAccountScreen from "../screens/Account/MyAccount";
import LoginScreen from "../screens/Account/Login";

const AccountScreenStacks = createStackNavigator({
  MyAccount: {
    screen: MyAccountScreen,
    navigationOptions: () => ({
      title: "Servicios SURO",
      headerTitleStyle: { textAlign: 'center', color:"#fff" , flex: 1, backgroundColor:"#75a614", marginEnd:0,marginLeft:0, marginTop:-30,marginStart:0 },
    })
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: () => ({
      title: "Login",
      headerTitleStyle: { textAlign: 'center', flex: 1 },
    })
  }
});

export default AccountScreenStacks;
