import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Header from "./Header";
import Search from "./Search";
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
        const url=`https://api.searchspring.net/api/search/search.json?siteId=${siteId}&q=${q}&resultsFormat=${resultsFormat}&page=${page}`;
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

    // searches for the query string
    function handleClick(q) {
        console.log(q);
        setQuery(q);
        getResults(q, 1);
    }
    
    // changes page number and calls getResults with new data
    function handleChange(event, value) {
        setPage(value);
        getResults(query, value);
    }

    return <div>
        <Grid container spacing={8} alignItems="center" justifyContent="space-between" className="header-section">
            <Header />
            <Search onClick={handleClick} />
        </Grid>
        <div className="divider" />
        <Navigation pages={navPages} query={query} onChange={handleChange} />
        <Results results={results} />
        <Footer />
    </div>
}

export default App;