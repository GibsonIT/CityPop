import React from 'react'
import {View, Modal, ActivityIndicator} from 'react-native'
import {loadingStyle} from '../../modules/ModalStyles'
import PropTypes from 'prop-types'

/**
 * Modal that covers the screen and shows a loading animation based on the parameter loading
 * @param {bool} loading - show modal
 */
const LoadingModal = ({loading}) => {

    return (
        <Modal
        transparent={true}
        animationType={'none'}
        visible={loading}
        onRequestClose={() => {console.log('close modal')}}
        >
            <View style = {loadingStyle.modalBackground}>
                <ActivityIndicator
                style = {loadingStyle.activityInicator}
                animating={loading} 
                />
            </View>
        </Modal>
        )
}

LoadingModal.propTypes = {

    /**
     * Shows the loading animation if true
     */
    loading: PropTypes.bool.isRequired
}

export default LoadingModal;