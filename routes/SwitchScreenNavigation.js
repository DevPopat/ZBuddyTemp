import { createSwitchNavigator, createAppContainer } from "react-navigation";
import Home from '../Home';
import BarcodeScanner from '../BarcodeScanner';
import Signup from "../Signup";
import AboutUs from "../AboutUs";

const AppNavigator = createSwitchNavigator({
    
    route0: Signup,
    route1: Home,
    route2: BarcodeScanner,
    route3: AboutUs
  },
  {
    initialRouteName: 'route0',
  });

  export default createAppContainer(AppNavigator);