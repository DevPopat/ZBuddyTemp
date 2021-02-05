import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../Home';
import BarcodeScanner from '../BarcodeScanner';

const screens = {
    Home: {
        screen: Home
    },
    BarcodeScanner: {
        screen: BarcodeScanner
    }
}
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
