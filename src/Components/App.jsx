import React, { useState, useEffect } from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Results from "./Results";

function App() {
    // Sets default page to 1
    const [page, setPage] = useState(1);
    // Set default query to null
    const [query, setQuery] = useState("");
    // starts out as empty, will later contain API data
    const [results, setResults] = useState([]);
    const [navPages, setNavPages] = useState({});

    // Fetches API data, converts response to JSON
    function getResults(q, page) {
        const siteId="scmq7n";
        const resultsFormat="native";
        const url=`http://api.searchspring.net/api/search/search.json?siteId=${siteId}&q=${q}&resultsFormat=${resultsFormat}&page=${page}`;
        fetch(url).then( (response) => {
            response.json().then( (json) => {
                setResults(json.results);
                setNavPages(json.pagination);
            })
        })
    }

    // calls getResults to start with default data
    useEffect(() => {
        getResults(query, page)
    }, []);
    
    // changes page number and calls getResults with new data
    function handleChange(event, value) {
        setPage(value);
        getResults(query, value);
    }

    return <div>
        <Header />
        <div className="divider"></div>
        <Navigation pages={navPages} query={query} onChange={handleChange} />
        <Results results={results} />
        <Footer />
    </div>
}

export default App;