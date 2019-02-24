import {colors, fonts, padding, dimensions, margins} from './StyleBase.js'
import {StyleSheet} from 'react-native'

/** Collection of general style settings */

const panelStyles = StyleSheet.create({

    /** Style setting for containers */
  container: {
    paddingHorizontal: padding.sm,
    paddingVertical: padding.md,
    width: (dimensions.fullWidth * 0.95)
  },

  /** Style settings for components with borders */
  border:{
      borderColor: colors.primary,
      borderWidth: 3,
      margin: margins.sm,
  },

  /** Standard alignment of components */
  standardAlignment: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    textAlignVertical: 'center'
  },

  /** Standard align without text aligning */
  align: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  /** The standard for text */
  standardText: {
      color: colors.primary,
      fontFamily: fonts.primary,
      fontSize: fonts.md
  },

  /** Style specifically for a title */
  title: {
    paddingHorizontal: padding.sm,
    paddingVertical: padding.lg,
    width: (dimensions.fullWidth * 0.7),
    color: colors.primary,
    fontFamily: fonts.primary,
    fontSize: fonts.lg
  },

  /** Style for a searchbutton */
  searchbutton: {
    width:50,
    height:50, 
    borderRadius:50,
    margin: margins.md
  },

  /** Style for error messages */
  errorText: {
      color: colors.error,
      fontFamily: fonts.primary,
      fontSize: fonts.sm
  }

  
})

export default panelStyles;