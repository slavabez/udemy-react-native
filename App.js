import React from 'react';
import {StyleSheet, View} from 'react-native';

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
                places: prevState.places.concat({
                    key: Math.random(),
                    value: this.state.placeName
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
