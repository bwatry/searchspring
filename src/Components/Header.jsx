import React from "react";
import { Grid } from "@mui/material";
import Search from "./Search";

function Header() {
    return <Grid container spacing={8} alignItems="center" justifyContent="space-between">
        <Grid item xs={6}>
            <h1>Brenna's Boutique</h1>
        </Grid>
        <Grid item xs={6}>
            <Search />
        </Grid>
    </Grid>
}

export default Header;