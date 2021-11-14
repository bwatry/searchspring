import React from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Grid } from "@mui/material";
import { useState } from "react/cjs/react.development";

function Search(props) {
    // query starts out empty
    const [query, setQuery] = useState("");
    // dynamically changes TextField value
    function handleChange(event) {
        const { value } = event.target;
        setQuery(value);
    }

    return <Grid item xs={6}>
        <form>
            <TextField fullwidth="true"
            id="search" 
            label="Search" 
            size="small"
            type="search" 
            variant="outlined"
            className="search-bar"
            onChange={handleChange}
            value={query}
            />
            <Button onClick={(event) => {
                event.preventDefault();
                props.onClick(query);
                }} 
            size="medium" 
            variant="contained">
                Search
            </Button>
        </form>
    </Grid>
}

export default Search;