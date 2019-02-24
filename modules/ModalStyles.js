import {colors} from './StyleBase'
import panelStyles from './Styles'

export const loadingStyle = {
      modalBackground: [
          panelStyles.align,
          {
            flex:1,
            backgroundColor: '#00000040'
        }
      ],
      activityInicator: [
          panelStyles.align,
          {
            height: 100,
            width: 100,
            borderRadius: 10,
            backgroundColor: colors.background
        }
      ]
}