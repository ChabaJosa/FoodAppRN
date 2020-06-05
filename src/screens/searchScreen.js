import React, {useState}                        from "react"
import SearchBar                                from "../components/searchBar"
import {View, Text, StyleSheet, ScrollView }    from "react-native"
import useRestaurants                           from "../hooks/useRestaurants"
import ResultsList                              from "../components/resultsList"

const SearchScreen = ( ) => {

    const [term, setTerm]  = useState('');
    const [location, setLocation]  = useState('');

    const [searchAPI, results, errMessage, ] = useRestaurants();

    const priceFilter = (price) =>  {

        return results.filter( result => {
            return result.price === price
        })


    }

    console.log( "These are the results $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$", results)

    return (

        <>
            <SearchBar 
                input={term} 
                hook={setTerm} 
                onSubmit= {() => searchAPI(term, location)}
                placeholder="Search"
            />
            <SearchBar 
                input={location} 
                hook={setLocation} 
                onSubmit= {() => searchAPI(term, location)}
                placeholder="Location"
            />
            {errMessage || results.length === 0 ? <Text style={styles.text} >{errMessage}</Text> : <Text style={styles.text}>We have found {results.length} results of {
            `"${results[0].categories[0].alias}"`
            } in {results[0].location.city}</Text> }

            <ScrollView>
                <ResultsList title="Cost Effective" results={priceFilter("$")}     />
                <ResultsList title="Bit Pricier"    results={priceFilter("$$")}    />
                <ResultsList title="Big Spender"    results={priceFilter("$$$")}   />
                <ResultsList title="For Zucks"      results={priceFilter("$$$$")}  />
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