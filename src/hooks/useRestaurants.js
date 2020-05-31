import React, {useState, useEffect} from "react"
import yelp                         from "../API/Yelp"

export default () => {

    const [results, setResults]         = useState([]);
    const [errMessage, setErrMessage ]  = useState("");

    const searchAPI = async (searchTerm) => {

        try {

            const response = await yelp.get("/search", {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: "Pembroke Pines"

                }
            }) // Once the data is brought back it'll be stored in the variable
            console.log("Response data is", response.data)
            setResults(response.data.businesses)

        } catch (error) {
            setErrMessage("Something's not right :( Try again later...")
        }

        if (results.length > 0 ) {
            setErrMessage("")
        }
            
    }

    useEffect(() => {
        searchAPI('pasta')
    }, []) // AKA ComponentDidMount()

    return [searchAPI, results, errMessage]


}