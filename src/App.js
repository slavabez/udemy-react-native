import React from 'react';
import {StyleSheet, View} from 'react-native';
import { connect } from 'react-redux';

import PlaceInput from './components/PlaceInput/PlaceInput';
import PlaceList from "./components/PlaceList/PlaceList";
import PlaceDetail from './components/PlaceDetail/PlaceDetail';
import { addPlace, deletePlace, selectPlace, deselectPlace } from './store/actions';

import placeImage from './assets/london.png';

class App extends React.Component {

    placeNameHandler = (value) => {
        this.setState({
            placeName: value
        });
    };

    placeSubmitHandler = () => {
        this.props.onAddPlace();
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

const mapStateToProps = state => {
    return {
        places: state.places.places,
        selectedPlace: state.places.selectedPlace
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddPlace: (name) => dispatch(addPlace(name)),
        onDeletePlace: () => dispatch(deletePlace()),
        onSelectPlace: (key) => dispatch(selectPlace(key)),
        onDeselectPlace: () => dispatch(deselectPlace())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);