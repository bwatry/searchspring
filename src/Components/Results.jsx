import React from "react";
import { Grid } from "@mui/material";
import { Card } from "@mui/material";

function Results(props) {
    // Renders product data as cards and sets class for if product is on sale
    function renderProduct(product, index) {
        let msrp = `$${parseInt(product.msrp)}`;
        let price = `$${parseInt(product.price)}`;
        let isOnSale = false;
        if (product.msrp > product.price) {
            isOnSale = true;
        };
        if (product.price === undefined) {
            price = "Out of Stock";
        }
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
                            <Grid container item spacing={1} justifyContent="center">
                                <Grid item>
                                <p className={isOnSale ? "on-sale" : "no-sale"}>{msrp}</p>
                                </Grid>
                                <Grid item>
                                <p className={isOnSale ? "sale-price" : "reg-price"}>{price}</p>
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