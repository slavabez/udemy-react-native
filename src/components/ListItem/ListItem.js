import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, StyleSheet, TouchableNativeFeedback, Image} from 'react-native';

const ListItem = (props) => (
    <TouchableNativeFeedback onPress={props.handlePressedItem} >
        <View style={styles.listItem} >
            <Image style={styles.placeImage} source={this.props.imgSrc} />
            <Text>{props.placeName}</Text>
        </View>
    </TouchableNativeFeedback>
);

const styles = StyleSheet.create({
    listItem: {
        width: '100%',
        padding: 10,
        backgroundColor: '#eee',
        marginBottom: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    placeImage: {
        marginRight: '8'
    }
});

ListItem.propTypes = {
    placeName: PropTypes.string,
    handlePressedItem: PropTypes.func,
    imgSrc: PropTypes.string
};

export default ListItem;