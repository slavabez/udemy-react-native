import React from 'react';
import {StyleSheet, View, TextInput, Button} from 'react-native';

import ListItem from './src/components/ListItem/ListItem';

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
        const placesOutput = this.state.places.map(
            (place, position) => {
                return <ListItem key={position} placeName={place} />;
            }
        );

        return (
            <View style={styles.container}>
                <View style={styles.headerInput}>
                    <TextInput
                        style={styles.placeInput}
                        value={this.state.placeName}
                        onChangeText={this.placeNameHandler}
                        placeholder="Type here...."
                    />

                    <Button
                        style={styles.placeButton}
                        title="Add"
                        onPress={this.placeSubmitHandler} />
                </View>

                <View style={styles.placesView}>
                    {placesOutput}
                </View>


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
    },
    headerInput: {
        // flex: 1,
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
    },
    placesView: {
        width: '100%'
    }
});
