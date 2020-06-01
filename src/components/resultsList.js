import React                from 'react';
import ResultsDetail        from "./resultsDetail"
import { withNavigation }   from "react-navigation" // This is so that we don't have to pass down the Navigation prop to search screen and then here
import {View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native"

const resultsList = ({title, results, navigation}) => {

    if (!results.length){
        return null
    } 

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

                    return (
                        <TouchableOpacity onPress={() => navigation.navigate("ResultsShow", {id: item.id}) } >
                            <ResultsDetail APIresult={item} />
                        </TouchableOpacity>
                    )
                    
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

export default withNavigation(resultsList);