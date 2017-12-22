import React from 'react';
import {StyleSheet, View} from 'react-native';

import PlaceInput from './components/PlaceInput/PlaceInput';
import PlaceList from "./components/PlaceList/PlaceList";

import placeImage from './assets/background.jpg';

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
                places: prevState.places.concat({
                    key: Math.random(),
                    name: this.state.placeName,
                    image: placeImage
                })
            }
        });
    };

    placeDeletedHandler = (key) => {
        this.setState(
            (prevState) => {
                return {
                    places: prevState.places.filter(
                        (place) => {
                            return place.key !== key;
                        }
                    )
                };
            }
        );
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
                    handlePressed={this.placeDeletedHandler}
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
