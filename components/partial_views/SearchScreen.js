import React, {Component} from 'react';
import {TextInput} from 'react-native';
import PropTypes from 'prop-types'
import Button from '../stateless-components/Button'
import TitleContentDivider from './TitleContentDivider';
import LoadingModal from '../modals/LoadingModal'

/**
 * Meant to be used over the whole screen. Presents a screen with a title, a search bar and a search button.
 * Will return the text to the callback function in the input field when search button is pressed.
 */

class SearchScreen extends Component{

    /** initializes the the state text and binds the setText function to this component */
    constructor(props){
        super(props);
        this.state = {text: ''}
        this.setText = this.setText.bind(this)
    }

    /** 
     * Stores the newText parameter in the state, used for the text input
     * @param {string} newtext - text to be stored
     */
    setText(newtext){
        this.setState({ text: newtext });
    }

    /** Renders the component */
    render(){
        let {title,
            placeholder,
            onPress} = this.props;

        return(
                <TitleContentDivider title = {title}>

                    <LoadingModal loading = {this.props.loading}/>
                        
                    <TextInput placeholder = {placeholder} onChangeText = {this.setText}/>

                        <Button title = "Search" onPress = {() => onPress(this.state.text)}/>

                    {this.props.children}

                </TitleContentDivider> 
        )
    }
}

SearchScreen.propTypes = {
    /** Title of the screen, preferably what to be searched */
    title: PropTypes.string.isRequired,

    /** Placeholder text of the input field*/
    placeholder: PropTypes.string,

    /** 
     * Callback function to be called when the search button is pressed
     * Need to accept a parameter of type string
    */
    onPress: PropTypes.func.isRequired,

    /** If the current state is in a loading state */
    loading: PropTypes.bool
}

/** Default values of the props */
SearchScreen.defaultProps = { 
    placeholder: 'Enter text',
    loading: false
}

export default SearchScreen;