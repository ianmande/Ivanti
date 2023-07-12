import {Dimensions, Platform} from 'react-native';

const IS_ANDROID = Platform.OS === 'android';
export const SCREEN = Dimensions.get('window');
export const SCREEN_DIMENSION = Dimensions.get('screen');

const {height, width} = SCREEN;
export const DEVICE_HEIGHT = IS_ANDROID ? height - 24 : height;
export const DEVICE_WIDTH = width;
