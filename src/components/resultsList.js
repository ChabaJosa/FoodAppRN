import React from 'react';
import {View, Text, StyleSheet, FlatList } from "react-native"
import ResultsDetail from "./resultsDetail"


const resultsList = ({title, results}) => {
    return (
        <View >
            <Text style={styles.titleStyle}>{title}</Text>
            <Text style={styles.text} >Results: {results.length}</Text>
            <FlatList 
                horizontal={true} 
                showsHorizontalScrollIndicator={false} // Removes horizontal scrollar
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

    text:{
        marginLeft: 15
    },
    titleStyle: {
        marginLeft: 15,
        marginTop: 15,
        fontSize: 18,
        fontWeight: "bold"
    }
})

export default resultsList;