import React from 'react';
import {StyleSheet, View, TextInput, Button} from 'react-native';

const styles = StyleSheet.create({
    headerInput: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    placeInput: {
        width: '70%'
    },
    placeButton: {
        width: '30%'
    }
});

export default class PlaceInput extends React.Component {

    render(){
        return (
            <View style={styles.headerInput}>
                <TextInput
                    style={styles.placeInput}
                    value={this.props.placeName}
                    onChangeText={this.props.handleTextChange}
                    placeholder={this.props.placeholderText}
                />

                <Button
                    style={styles.placeButton}
                    title={this.props.buttonText}
                    onPress={this.props.handleButtonPress} />
            </View>
        );
    }
}
