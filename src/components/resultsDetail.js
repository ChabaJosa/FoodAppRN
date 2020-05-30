import React from 'react';
import {View, Text, StyleSheet, Image } from "react-native"
import resultsList from './resultsList';


const ResultsDetail = ( { APIresult }) => {
    return (
        <View style={styles.view}>
            <Image style={styles.image} source={{uri: APIresult.image_url}}/>
            <Text style={styles.name} >{APIresult.name}</Text>
            <Text> {APIresult.rating} Stars, {APIresult.review_count} Reviews</Text>
        </View>
    );
};

const styles = StyleSheet.create({

    view: {
        marginLeft: 15,
        marginTop: 10,
    },

    image: {
        width: 250,
        height: 120,
        borderRadius: 4,
        margin: 5
    },

    name: {
        fontWeight: 'bold',
        fontSize: 16
    }
})

export default ResultsDetail;