import panelStyles from './Styles'
import {colors, fonts} from './StyleBase'

/** Collection of global styles for stateless components */

/** Style for the  Button component*/
export const button = {
    container: [
        panelStyles.container,
        panelStyles.border
    ],
    textStyle: [
        panelStyles.standardText,
        panelStyles.standardAlignment
    ]
} 


/** Style for the TextField component*/
export const textField = [
        panelStyles.standardText,
        panelStyles.border,
        panelStyles.container,
        panelStyles.standardAlignment
]


/** Style for the Title component*/
export const titleStyle = {
    container:[
        panelStyles.container,
        panelStyles.standardAlignment
    ],
    text: [
        panelStyles.title,
        panelStyles.standardAlignment
    ]
}

/** Style for the SearchButton component*/
export const searchButton = {
    container: [
        panelStyles.border,
        panelStyles.align,
        panelStyles.searchbutton
    ],
    color: colors.primary
}

/** Style for the DisplayBox component*/
export const displayBox = {
    container: [
        panelStyles.container,
        panelStyles.border
    ],
    titleText: [
        panelStyles.standardText,
        panelStyles.standardAlignment
    ],
    contentText: [
        panelStyles.standardText,
        panelStyles.standardAlignment,
        { fontSize: fonts.lg }
    ] 
}

/** Style for the ErrorText component*/
export const errorText = [
    panelStyles.errorText,
    panelStyles.standardAlignment
]

