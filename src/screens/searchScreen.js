import React, {useState}            from "react"
import SearchBar                    from "../components/searchBar"
import {View, Text, StyleSheet }    from "react-native"
import yelp                         from "../API/Yelp"

const SearchScreen = () => {

    const [term, setTerm]       = useState('');
    const [results, setResults] = useState([]);

    const searchAPI = async () => {
        const response = await yelp.get("/search", {
            params: {
                limit: 50,
                term,
                location: "Palo Alto"

            }
        }) // Once the data is brought back it'll be stored in the variable
        console.log(response.data)
        setResults(response.data.businesses)
            
    }

    return (

        <View>
            <SearchBar 
                term={term} 
                onTermChange={setTerm} 
                onTermSubmit= {searchAPI}
            />
            <Text>We have found {results.length} results</Text>
        </View>

    )
}

const styles  = StyleSheet.create({

});

export default SearchScreen; 