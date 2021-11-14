import React from "react";
import { TextField } from "@mui/material";
import { Fab } from "@mui/material";
import { Grid } from "@mui/material";
import { useState } from "react/cjs/react.development";
import SearchIcon from '@mui/icons-material/Search';

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
            onKeyDown={(event) => {
                if (event.key === "Enter") {
                    event.preventDefault();
                    props.onClick(query);
                }
            }}
            value={query}
            />
            <Fab onClick={(event) => {
                event.preventDefault();
                props.onClick(query);
                }} 
            size="small"
            >
                <SearchIcon className="search-button" />
            </Fab>
        </form>
    </Grid>
}

export default Search;