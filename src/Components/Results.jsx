import React from "react";
import { Grid } from "@mui/material";
import { Pagination } from "@mui/material";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { CardMedia } from "@mui/material";
import Search from "./Search";

function Results(props) {
    // Renders product data as cards and sets class for if product is on sale
    function renderProduct(product, index) {
        let isOnSale=false;
        if (parseFloat(product.msrp) > parseFloat(product.price)) {
            isOnSale=true;
        };
        return  <Grid item xs="auto">
                    <Card key={index} className="product">
                        <img 
                            src={product.thumbnailImageUrl}
                            alt="product image"
                        />
                        <Grid container spacing={0.5}>
                            <Grid item xs={12} sx={{ height: 60 }}>
                            <h3>{product.name}</h3>
                            </Grid>
                            <Grid container item spacing={0.5} justifyContent="center">
                                <Grid item>
                                <p className={isOnSale ? "on-sale" : "no-sale"}>${product.msrp}</p>
                                </Grid>
                                <Grid item>
                                <p className={isOnSale ? "sale-price" : "reg-price"}>${product.price}</p>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Card>
               </Grid>
    }

    return <Grid container rowSpacing={4} columnSpacing={{xs:2, sm:4, md:8}} alignItems="center" justifyContent="center" className="results-section">
            {props.results.map(renderProduct)}
        </Grid>
}

export default Results;