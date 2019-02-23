import {colors, fonts, padding, dimensions, margins} from './StyleBase.js'
import {StyleSheet} from 'react-native'


const panelStyles = StyleSheet.create({
  container: {
    paddingHorizontal: padding.sm,
    paddingVertical: padding.lg,
    width: (dimensions.fullWidth * 0.95)
  },

  header: {
    fontSize: fonts.lg,
    fontFamily: fonts.primary
  },

  section: {
    paddingVertical: padding.lg,
    paddingHorizontal: padding.xl
  },

  button:{
      borderColor: colors.primary,
      borderWidth: 3,
      margin: margins.md
  },

  standardAlignment: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    textAlignVertical: 'center'
  },

  standardText:{
      color: colors.primary,
      fontFamily: fonts.primary,
      fontSize: fonts.sm
  }
})

export default panelStyles;