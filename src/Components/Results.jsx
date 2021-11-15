import React from "react";
import { Grid } from "@mui/material";
import Product from "./Product";

export default function Results(props) {
    // Renders product data
    function renderProduct(product, index) {
        return <Product product={product} key={index} />
    }

    return <Grid container 
            rowSpacing={4} 
            columnSpacing={{xs:2, sm:4, md:8}} 
            alignItems="center" 
            justifyContent="center" 
            className="results-section"
            >
                {props.results.map(renderProduct)}
            </Grid>
}