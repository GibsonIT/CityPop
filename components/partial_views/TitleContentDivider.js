import React, {Component} from 'react'
import {View, Text} from 'react-native'
import Title from '../../components/Title';
import PropTypes from 'prop-types'

/**
 * TitleContentDivider is a component that is divided into a title part and a content part.
 * The content is the children of the component.
 * The title to content division can be adjusted using the contentFlex and titleFlex values (used as normal flex values in style).
 */

 class TitleContentDivider extends Component{
    constructor(props){
        super(props);
    }

    /** Renders the component */
    render(){
        let p = this.props;
        return(
            <View style = {{flex: 1}}>
                <View style = {{flex: p.titleFlex}}>
                    <Title title = {p.title}/>
                </View>
                <View style = {{flex: p.contentFlex,  alignItems: p.contentAlignment}}>
                    {p.children}
                </View>
            </View> 
        )
    }
}

TitleContentDivider.propTypes = {
    /** The title that will be presented*/
    title: PropTypes.string.isRequired,

    /** The flex value the title part will have
     * Shares space with the contentFlex value
     * Shared space will be divided proportional to titleFlex:contentFlex
    */
    titleFlex: PropTypes.number,

    /** The flex value the content part will have*/
    contentFlex: PropTypes.number,

    /** The typical options for alignment applied to the content part of the component*/
    contentAlignment: PropTypes.oneOf(['flex-start', 'center', 'flex-end', 'stretch']),
}

TitleContentDivider.defaultProps = {
    /** Default title to content division is 3:5  with alignment 'stretch'*/
    titleFlex: 3,
    contentFlex: 5,
    contentAlignment: 'stretch'
}



export default TitleContentDivider;