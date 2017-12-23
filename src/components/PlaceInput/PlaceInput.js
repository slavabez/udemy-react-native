import React from 'react';
import PropTypes from 'prop-types';
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

    constructor(props) {
        super(props);
        this.state = {
            placeName: ""
        };
    }

    placeNameChangeHandler = val => {
        this.setState({
            placeName: val
        });
    };

    placeSubmitHandler = () => {
        if (this.state.placeName.trim() === "") {
            return;
        }
        this.props.handleButtonPress(this.state.placeName);
    };

    render(){
        return (
            <View style={styles.headerInput}>
                <TextInput
                    style={styles.placeInput}
                    value={this.state.placeName}
                    onChangeText={this.placeNameChangeHandler}
                    placeholder="Type a place here..."
                />

                <Button
                    style={styles.placeButton}
                    title="Submit"
                    onPress={this.placeSubmitHandler} />
            </View>
        );
    }
}

PlaceInput.propTypes = {
    handleButtonPress: PropTypes.func
};
