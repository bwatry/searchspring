import React from "react";
import { Grid, Card } from "@mui/material";

export default function Product(props) {
    // standardizes price appearance to dollars only
    let msrp = `$${parseInt(props.product.msrp)}`;
    let price = `$${parseInt(props.product.price)}`;
    // checks if price is less than msrp
    let isOnSale = false;
    if (props.product.msrp > props.product.price) {
        isOnSale = true;
    };
    // checks if there is a price for the item
    if (props.product.price === undefined) {
        price = "Out of Stock";
    }
    // Creates a card with the product data
    return <Grid item xs="auto">
                <Card className="product">
                    <img 
                        src={props.product.thumbnailImageUrl}
                        alt="product image"
                    />
                    <Grid container spacing={0.5}>
                        <Grid item xs={12} sx={{ height: 60 }}>
                        <h3>{props.product.name}</h3>
                        </Grid>
                        <Grid container item spacing={1} justifyContent="center">
                            <Grid item>
                            {/* sets styling based on sale status */}
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