import {colors} from './StyleBase'
import panelStyles from './Styles'

/** Standard style for the loading modal */
export const loadingStyle = {
    /** Background style */
      modalBackground: [
          panelStyles.align,
          {
            flex:1,
            backgroundColor: '#00000040'
        }
      ],
      /** Box for the activity indicator */
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