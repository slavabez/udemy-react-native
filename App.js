import React from 'react';
import {StyleSheet, View, TextInput, Button} from 'react-native';

import ListItem from './src/components/ListItem/ListItem';
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from "./src/components/PlaceList/PlaceList";

export default class App extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            placeName: '',
            places: []
        };
    }

    placeNameHandler = (value) => {
        this.setState({
            placeName: value
        });
    };

    placeSubmitHandler = () => {
        if (this.state.placeName.trim() === ''){
            return;
        }

        this.setState(prevState => {
            return {
                places: prevState.places.concat(prevState.placeName)
            }
        });
    };

    render() {

        return (
            <View style={styles.container}>
                <PlaceInput
                    placeName={this.state.placeName}
                    handleTextChange={this.placeNameHandler}
                    handleButtonPress={this.placeSubmitHandler}
                    placeholderText="Type here..."
                    buttonText="Add"
                />

                <PlaceList
                    places={this.state.places}
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 26,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    }
});
