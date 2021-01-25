import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import home from '../home';
import barCodeScanner from '../barCodeScanner';

const screens = {
    home: {
        screen: home
    },
    barCodeScanner: {
        screen: barCodeScanner
    }
}
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
