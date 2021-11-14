import React from "react";
import { Grid } from "@mui/material";
import { Pagination } from "@mui/material";

function Navigation() {
    return <Grid container spacing={4} alignItems="center" justifyContent="space-between" className="results-section">
            <Grid item xs={10}>
                <h2>Showing <strong>number</strong> of <strong>number</strong> results for "query"</h2>
            </Grid>
            <Grid item xs={2}>
                <Pagination count={3} hidePrevButton />
            </Grid>
        </Grid>
}

export default Navigation;