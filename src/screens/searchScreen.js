import React, {useState}            from "react"
import SearchBar                    from "../components/searchBar"
import {View, Text, StyleSheet }    from "react-native"

const SearchScreen = () => {

    const [term, setTerm] = useState('');

    return (

        <View>
            <SearchBar 
                term={term} 
                onTermChange={newTerm => setTerm(newTerm)} 
                onTermSubmit= {() => console.log("This term was submitted")}
            />
            <Text>Search Screen</Text>
        </View>

    )
}

const styles  = StyleSheet.create({

});

export default SearchScreen; 