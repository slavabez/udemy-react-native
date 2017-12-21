import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';

const ListItem = (props) => (
    <TouchableNativeFeedback onPress={props.handlePressedItem} >
        <View style={styles.listItem} >
            <Text>{props.placeName.value}</Text>
        </View>
    </TouchableNativeFeedback>
);

const styles = StyleSheet.create({
    listItem: {
        width: '100%',
        padding: 10,
        backgroundColor: '#eee',
        marginBottom: 5
    }
});

ListItem.propTypes = {
    placeName: PropTypes.string,
    handlePressedItem: PropTypes.func
};

export default ListItem;