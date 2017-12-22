import React from 'react';
import PropTypes from 'prop-types';
import {Modal, View, Image, Text, Button, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    modalContainer: {
        margin: 22
    },
    deleteButton: {
        marginBottom: 4
    },
    placeImage: {
        width: '100%',
        height: 250
    },
    placeName: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
        margin: 5
    }
});

const placeDetail = props => {

    let modalContent = null;

    if (props.selectedPlace) {
        modalContent = (
            <View>
                <Image
                    source={props.selectedPlace.image}
                    style={styles.placeImage}
                />
                <Text
                    style={styles.placeName}
                >
                    {props.selectedPlace.name}
                </Text>
            </View>
        );
    }


    return (
        <Modal
            visible={props.selectedPlace !== null}
            animationType='slide'
            onRequestClose={props.onModalClose}
        >
            <View style={styles.modalContainer}>
                {modalContent}
                <View>
                    <Button
                        title="Delete"
                        color="red"
                        style={styles.deleteButton}
                        onPress={props.onItemDeleted}
                    />
                    <Button
                        title="Close"
                        onPress={props.onModalClose}
                    />
                </View>
            </View>
        </Modal>
    );
};

placeDetail.propTypes = {
    selectedPlace: PropTypes.object,
    onItemDeleted: PropTypes.func,
    onModalClose: PropTypes.func
};

export default placeDetail;