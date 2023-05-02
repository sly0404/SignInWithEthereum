/**
 * @format
 */

import "./polyfill";    //import this
import {AppRegistry} from 'react-native';
import App from './src/App';    //modify this import
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
