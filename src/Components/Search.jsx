import React from "react";
import { TextField, IconButton, Grid } from "@mui/material";
import { InputAdornment } from "@mui/material";
import { useState } from "react/cjs/react.development";
import SearchIcon from '@mui/icons-material/Search';

export default function Search(props) {
    // query starts out empty
    const [query, setQuery] = useState("");
    // dynamically changes TextField value
    function handleChange(event) {
        const { value } = event.target;
        setQuery(value);
    }

    function handleKeyDown(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            props.onClick(query);
        }
    }

    function handleClick(event) {
        event.preventDefault();
        props.onClick(query);
    }

    return <Grid item sm={12} md={6}>
        <form>
            <TextField fullwidth="true"
            id="search" 
            label="Search" 
            size="small"
            type="search" 
            variant="outlined"
            className="search-bar"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            value={query}
            InputProps={{
                endAdornment: <InputAdornment position="end">
                    <IconButton onClick={handleClick} size="small">
                        <SearchIcon className="search-button" />
                    </IconButton>
                </InputAdornment>
            }}
            />
        </form>
    </Grid>
}