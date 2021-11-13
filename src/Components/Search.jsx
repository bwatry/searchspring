import React from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";

function Search() {
    return <form>
            <TextField fullwidth id="search" 
            label="Search" 
            size="small" 
            variant="outlined"
            className="search-bar"
            />
            <Button onClick={() => {
                alert("Clicked");
            }} 
            size="medium" 
            variant="contained">
                Search
            </Button>
        </form>
}

export default Search;