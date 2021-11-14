import React from "react";
import { Grid } from "@mui/material";
import { Card } from "@mui/material";

function Results(props) {
    // Renders product data as cards and sets class for if product is on sale
    function renderProduct(product, index) {
        // standardizes price appearance to dollars only
        let msrp = `$${parseInt(product.msrp)}`;
        let price = `$${parseInt(product.price)}`;
        // checks if price is less than msrp
        let isOnSale = false;
        if (product.msrp > product.price) {
            isOnSale = true;
        };
        // checks if there is a price for the item
        if (product.price === undefined) {
            price = "Out of Stock";
        }
        return  <Grid item xs="auto" key={index}>
                    <Card className="product">
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
                                {/* sets styling based on sale */}
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

export default Results;