import {StyleSheet, Dimensions} from 'react-native'

/** Collection of global standard sizes and colors*/

/** Screen dimensions */
export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width
}
 
/** Colors */
export const colors  = {
  primary: '#82CCDD',
  secondary: '#38ADA9',
  primary_dark: '#7BB1C5',
  secondary_dark: '#32A9A3',
  background: '#FFFFFF',
  error: '#FF0000'
}

/** Padding sizes */
export const padding = {
  sm: 10,
  md: 20,
  lg: 30,
  xl: 40
}

/** Margin sizes */
export const margins = {
    sm: 2,
    md: 5,
    lg: 10,
    xl: 15
}

/** Font styles and sizes */
export const fonts = {
  sm: 18,
  md: 22,
  lg: 38,
  xl: 50,
  primary: 'sans-serif-medium'
}