import React from 'react';
import {View, Text, StyleSheet }    from "react-native"


const resultsList = ({title, results}) => {
    return (
        <View>
            <Text style={styles.titleStyle}>{title}</Text>
            <Text > Results: {results.length}</Text>
            
        </View>
    );
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: "bold"
    }
})

export default resultsList;