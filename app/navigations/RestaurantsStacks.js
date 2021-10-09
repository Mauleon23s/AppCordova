import { createStackNavigator } from "react-navigation-stack";
import RestaurantsScreens from "../screens/Restaurants";

const RestaurantsScreenStacks = createStackNavigator({
  Restaurants: {
    screen: RestaurantsScreens,
    navigationOptions : {
      title: "Mi perfil",
      headerTitleStyle: { textAlign: 'center', flex: 1 },
    },
  }, 
});
 

export default RestaurantsScreenStacks;

