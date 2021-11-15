import React from "react";
import { Grid, Pagination } from "@mui/material";

export default function Navigation(props) {
    let currentPage = parseInt(props.pages.currentPage) || 0;
    // Calculates how many products are displayed
    // The first page only contains 23 products, unlike subsequent pages
    function getRange() {
        let begin = props.pages.begin;
        let end = props.pages.end;
        if (currentPage === 1) {
            return `1 - ${(end - begin) || ""}`;
        } else {
            begin -= 1;
            end -= 1;
            return `${begin || ""} - ${end || ""}`;
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
                <Grid item sm="auto">
                    {/* Calculated total results based on results per page because the actual total is one less */}
                    <h2>
                        Showing <strong>{getRange()}</strong> of <strong>{`${(props.pages.totalResults - 1) || ""}`}</strong> results {hasQuery()}
                    </h2>
                </Grid>
                <Grid item sm="auto">
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