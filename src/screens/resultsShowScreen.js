import React, {useState, useEffect}         from 'react';
import {Image, Text, StyleSheet, FlatList }  from "react-native"
import yelp                                 from "../API/Yelp"


const resultsShowScreen = ({ navigation }) => {

    const [result, setResult ] = useState(null)
    const id = navigation.getParam("id")

    // console.log("This is the result of the business you taped", result)

    const getBusiness = async ( id ) => {
        const reponse = await yelp.get(`${id}`)
        setResult(reponse.data)
    }

    useEffect(() => {
        getBusiness(id)
    }, [])

    // console.log("Current Business id", id)

    if (!result) {
        return <Text>Loading... </Text>
    }

    return (
        <>
           <Text>{result.name}</Text> 
           <FlatList
                data={result.photos}
                keyExtractor= {photo => photo}
                renderItem = { ({ item }) => {
                    return <Image style={styles.image} source={{ uri: item }} />
                }}
           />
        </>
    );
};

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300
    }

});

export default resultsShowScreen;