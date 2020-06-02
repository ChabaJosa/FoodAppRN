import React, {useState, useEffect}                 from 'react';
import {Image, Text, StyleSheet, FlatList, View }   from "react-native"
import yelp                                         from "../API/Yelp"


const resultsShowScreen = ({ navigation }) => {

    const [result, setResult ] = useState(null)
    const id = navigation.getParam("id")

    // console.log("This is the result of the business you taped", result)

    const getBusiness = async ( id ) => {
        const reponse = await yelp.get(`${id}`)
        setResult(reponse.data)
        console.log("You tapped on ------------------------------------------------", reponse)
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



        <Text style={styles.title} >{result.name}</Text> 
        <View style={styles.view}>
            <FlatList
                horizontal={true} 
                showsHorizontalScrollIndicator={false} // Removes horizontal scrollar
                data={result.photos}
                keyExtractor= {photo => photo}
                renderItem = { ({ item }) => {
                    return <Image style={styles.image} source={{ uri: item }} />
                }}
            />
        </View>

        <View style={styles.card}>

            <FlatList 
                style={styles.cardContent}
                horizontal={true} 
                data={result.categories}
                keyExtractor= {category => category.title }
                renderItem = { ({ item }) => { return <Text>Categories: {item.title}</Text> }}
            />
            <Text style={styles.cardContent} >Phone: {result.display_phone}</Text>
            <Text style={styles.cardContent} >Open Now?: {result.display_phone == false ? "Nope" : "Yeah"}</Text>
            {result.location.display_address ? <Text style={styles.cardContent} >{result.location.display_address}</Text> : null }

        </View>
        

        </>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    image: {
        height: 200,
        width: 300,
        borderRadius: 10,
        margin: 10,
        
    },
    view: {
        display: 'flex',
        flexDirection: 'row',
        alignContent:"center"
    },
    card: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: "#fff",
        shadowOffset: {width: 1, height: 1},
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 2,
        margin: 10
        // marginHorizontal: 4,
        // marginVertical: 6
    },
    cardContent: {
        margin: 18
    }
    // Card styling from https://www.youtube.com/watch?v=5NewXsBnoKw

});

export default resultsShowScreen;