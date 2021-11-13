import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Results from "./Results";

function App() {
    // starts out as an empty array, will later contain API data
    const [results, setResults]=useState([]);

    // Fetches API data, converts response to JSON
    function getResults(q, page) {
        const siteId="scmq7n";
        const resultsFormat="native";
        const url=`http://api.searchspring.net/api/search/search.json?siteId=${siteId}&q=${q}&resultsFormat=${resultsFormat}&page=${page}`;
        fetch(url).then( (response) => {
            response.json().then( (json) => {
                setResults(json.results);
            })
        })
    }

    // calls getResults to start with default data
    useEffect(() => {
        getResults("jeans", "2")
    }, []);
    
    return <div>
        <Header />
        <div className="divider"></div>
        <Results results={results} />
        <Footer />
    </div>
}

export default App;