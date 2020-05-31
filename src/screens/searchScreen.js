import React, {useState}                        from "react"
import SearchBar                                from "../components/searchBar"
import {View, Text, StyleSheet, ScrollView }    from "react-native"
import useRestaurants                           from "../hooks/useRestaurants"
import ResultsList                              from "../components/resultsList"

const SearchScreen = ( { navigation } ) => {

    const [term, setTerm]  = useState('');
    const [searchAPI, results, errMessage] = useRestaurants();

    const priceFilter = (price) =>  {

        return results.filter( result => {
            return result.price === price
        })


    }

    console.log( "These are the results", results)

    return (

        <>
            <SearchBar 
                term={term} 
                onTermChange={setTerm} 
                onTermSubmit= {() => searchAPI(term)}
            />
            {errMessage ? <Text style={styles.text} >{errMessage}</Text> : <Text style={styles.text}>We have found {results.length} results</Text> }

            <ScrollView>
                <ResultsList title="Cost Effective" results={priceFilter("$")}      navigation={navigation} />
                <ResultsList title="Bit Pricier"    results={priceFilter("$$")}     navigation={navigation} />
                <ResultsList title="Big Spender"    results={priceFilter("$$$")}    navigation={navigation} />
                <ResultsList title="For Zucks"      results={priceFilter("$$$$")}   navigation={navigation} />
            </ScrollView>

        </>

    )
}

const styles  = StyleSheet.create({
    text: {
        marginLeft: 15
    }
});

export default SearchScreen; 