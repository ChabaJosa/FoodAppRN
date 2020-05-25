import React from 'react';
import {View, Text, StyleSheet, FlatList } from "react-native"
import ResultsDetail from "./resultsDetail"


const resultsList = ({title, results}) => {
    return (
        <View style={styles.view} >
            <Text style={styles.titleStyle}>{title}</Text>
            <Text > Results: {results.length}</Text>
            <FlatList 
                horizontal={true}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return <ResultsDetail APIresult={item} />
                }}
                // renderItem has multiple props but item is the actual object we are iterating over
            />
            
        </View>
    );
};

const styles = StyleSheet.create({

    view:{
        margin: 10,
        padding: 10
    },
    titleStyle: {
        fontSize: 18,
        fontWeight: "bold"
    }
})

export default resultsList;