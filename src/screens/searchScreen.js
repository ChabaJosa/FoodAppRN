import React, {useState}                        from "react"
import SearchBar                                from "../components/searchBar"
import {View, Text, StyleSheet, ScrollView }    from "react-native"
import useRestaurants                           from "../hooks/useRestaurants"
import ResultsList                              from "../components/resultsList"

const SearchScreen = () => {

    const [term, setTerm]  = useState('');
    const [searchAPI, results, errMessage] = useRestaurants();

    const priceFilter = (price) =>  {

        return results.filter( result => {
            return result.price === price
        })


    }

    console.log(results)

    return (

        <View>
            <SearchBar 
                term={term} 
                onTermChange={setTerm} 
                onTermSubmit= {() => searchAPI(term)}
            />
            <Text style={styles.text}>We have found {results.length} results</Text>
            {errMessage ? <Text>{errMessage}</Text> : null}
            
            <ScrollView>
                <ResultsList title="Cost Effective" results={priceFilter("$")}  />
                <ResultsList title="Bit Pricier"    results={priceFilter("$$")} />
                <ResultsList title="Big Spender"    results={priceFilter("$$$")} />
                <ResultsList title="For Zucks"      results={priceFilter("$$$$")} />
            </ScrollView>

        </View>

    )
}

const styles  = StyleSheet.create({
    text: {
        marginLeft: 15
    }
});

export default SearchScreen; 