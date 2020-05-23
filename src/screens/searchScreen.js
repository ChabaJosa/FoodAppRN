import React, {useState}            from "react"
import SearchBar                    from "../components/searchBar"
import {View, Text, StyleSheet }    from "react-native"
import useRestaurants               from "../hooks/useRestaurants"
import ResultsList                  from "../components/resultsList"

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
            <Text>We have found {results.length} results</Text>
            {errMessage ? <Text>{errMessage}</Text> : null}

            <ResultsList title="Cost Effective" results={priceFilter("$")}  />
            <ResultsList title="Bit Pricier"    results={priceFilter("$$")} />
            <ResultsList title="Big Spender"    results={priceFilter("$$$")} />
            <ResultsList title="For Zucks"      results={priceFilter("$$$$")} />

        </View>

    )
}

const styles  = StyleSheet.create({

});

export default SearchScreen; 