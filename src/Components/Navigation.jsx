import React from "react";
import { Grid } from "@mui/material";
import { Pagination } from "@mui/material";

function Navigation(props) {
    let currentPage = parseInt(props.pages.currentPage);
    // Calculates how many products are displayed
    function countProducts() {
        let num1 = props.pages.begin;
        let num2 = props.pages.end;
        if (currentPage === 1) {
            return `1 - ${num2 - num1}`;
        } else {
            num1 = num1 - 1;
            num2 = num2 - 1;
            return `${num1} - ${num2}`;
        }
    }
    // Checks if this is the first page of results
    function isOnFirstPage() {
        return (currentPage === 1);
    }
    // Checks if this is the last page of results
    function isOnLastPage() {
        return (currentPage === parseInt(props.pages.totalPages));
    }
    // Checks if results limited by query
    function hasQuery() {
        if (props.query != "") {
            return `for "${props.query}"`
        }
    }

    return <Grid container 
            spacing={8} 
            alignItems="center" 
            justifyContent="space-between" 
            className="nav-section"
            >
                <Grid item sm={12} md={9}>
                    <h2>Showing <strong>{countProducts()}</strong> of <strong>{`${props.pages.totalResults - 1}`}</strong> results {hasQuery()}</h2>
                </Grid>
                <Grid item sm={12} md={3}>
                    <Pagination 
                        count={props.pages.totalPages} 
                        page={currentPage}
                        hidePrevButton={isOnFirstPage()} 
                        hideNextButton={isOnLastPage()} 
                        onChange={props.onChange} 
                    />
                </Grid>
            </Grid>
}

export default Navigation;