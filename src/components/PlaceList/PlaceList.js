import React from 'react';
import {StyleSheet, View, TextInput, Button} from 'react-native';

import ListItem from '../ListItem/ListItem';

const styles = StyleSheet.create({
    placesView: {
        width: '100%'
    }
});

export default class PlaceList extends React.Component {
    render(){
        const placesOutput = this.props.places.map(
            (place, position) => {
                return <ListItem key={position} placeName={place} />;
            }
        );

        return (placesOutput);
    }
}