import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Modal,
  ActivityIndicator
} from 'react-native';

const LoadingModal = props => {
    const {
        loading,
        ...attributes
    } = props;
    return (
        <Modal
        transparent={true}
        animationType={'none'}
        visible={loading}
        onRequestClose={() => {console.log('close modal')}}>
        <View >
            <ActivityIndicator
            animating={loading} />
        </View>
    </Modal>
    )
}


export default LoadingModal;