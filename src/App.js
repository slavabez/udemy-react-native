import React from 'react';
import {StyleSheet, View} from 'react-native';

import PlaceInput from './components/PlaceInput/PlaceInput';
import PlaceList from "./components/PlaceList/PlaceList";
import PlaceDetail from './components/PlaceDetail/PlaceDetail';

import placeImage from './assets/london.png';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            placeName: '',
            places: [],
            selectedPlace: null
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
                    image: {
                        uri: 'https://london.ac.uk/sites/default/files/styles/promo_mobile/public/2017-08/Study%20in%20london.png?itok=cVAL8iOT'
                    }
                })
            }
        });
    };

    placeSelectedHandler = (key) => {
        this.setState(
            (prevState) => {
                return {
                    selectedPlace: prevState.places.find(
                        (place) => {
                            return place.key === key;
                        }
                    )
                };
            }
        );
    };

    placeDeletedHandler = () => {
        this.setState(
            (prevState) => {
                return {
                    places: prevState.places.filter(
                        (place) => {
                            return place.key !== prevState.selectedPlace.key;
                        }
                    ),
                    selectedPlace: null
                };
            }
        );
    };

    modalClosedHandler = () => {
        this.setState({ selectedPlace: null });
    };

    render() {

        return (
            <View style={styles.container}>
                <PlaceDetail
                    selectedPlace={this.state.selectedPlace}
                    onItemDeleted={this.placeDeletedHandler}
                    onModalClose={this.modalClosedHandler}
                />
                <PlaceInput
                    placeName={this.state.placeName}
                    handleTextChange={this.placeNameHandler}
                    handleButtonPress={this.placeSubmitHandler}
                    placeholderText="Type here..."
                    buttonText="Add"

                />

                <PlaceList
                    places={this.state.places}
                    handlePressed={this.placeSelectedHandler}
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
