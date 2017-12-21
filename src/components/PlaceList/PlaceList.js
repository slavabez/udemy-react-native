import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, FlatList} from 'react-native';

import ListItem from '../ListItem/ListItem';

const styles = StyleSheet.create({
    placesView: {
        width: '100%'
    }
});

export default class PlaceList extends React.Component {
    render() {

        return (
            <FlatList
                style={styles.placesView}
                data={this.props.places}
                renderItem={(info) => (
                    <ListItem
                        placeName={info.item.value}
                        handlePressedItem={
                            () => this.props.handlePressed(info.item.key)
                        }
                    />
                )
                }

            />
        )
            ;
    }
}

PlaceList.propTypes = {
    handlePressed: PropTypes.func,
    places: PropTypes.array,

};