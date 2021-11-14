import React from "react";
import { Grid } from "@mui/material";
import { Pagination } from "@mui/material";
import { useState } from "react/cjs/react.development";

function Navigation(props) {
    let currentPage = parseInt(props.pages.currentPage);
    // Calculates how many products are displayed
    function countProducts() {
        let num1 = props.pages.begin;
        let num2 = props.pages.end;
        return (num2 - num1 + 1)
    }
    // Checks if this is the first page of results
    function isOnFirstPage() {
        return (currentPage === 1);
    }
    // Checks if this is the last page of results
    function isOnLastPage() {
        return (currentPage === parseInt(props.pages.totalPages));
    }

    return <Grid container spacing={8} alignItems="center" justifyContent="space-between" className="nav-section">
            <Grid item xs={9}>
                <h2>Showing <strong>{countProducts()}</strong> of <strong>{props.pages.totalResults}</strong> results for "{props.query}"</h2>
            </Grid>
            <Grid item xs={3}>
                <Pagination 
                    count={props.pages.totalPages} 
                    hidePrevButton={isOnFirstPage()} 
                    hideNextButton={isOnLastPage()} 
                    onChange={props.onChange} 
                />
            </Grid>
        </Grid>
}

export default Navigation;