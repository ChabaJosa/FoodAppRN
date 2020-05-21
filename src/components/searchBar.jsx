import React, {useReducer}  from "react"
import { Feather }          from '@expo/vector-icons'
import {View, TextInput , Text, StyleSheet } from "react-native"

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.background}>
            <Feather
                name="search" 
                style={styles.iconStyle}
            />
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Search"
                style={styles.inputStyle}
                value={term}
                onChangeText={ onTermChange } // No parenthesis will invoke the function whenever onChangeText
                onEndEditing={ onTermSubmit } // or onEndEditing takes place
            />
        </View>
    )
}

const styles  = StyleSheet.create({
    background:{
        backgroundColor: "#F0EEEE",
        marginTop:15,
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection:"row",
        alignItems: "center"
    },
    inputStyle:{
        // borderColor: "black",
        // borderWidth:1,
        flex: 1,
        fontSize: 18
    },
    iconStyle:{
        fontSize: 35,
        alignSelf: "center",
        marginHorizontal: 15
    }
});

export default SearchBar; 