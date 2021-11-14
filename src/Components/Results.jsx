import React from "react";
import { Grid } from "@mui/material";
import { Pagination } from "@mui/material";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { CardMedia } from "@mui/material";
import Search from "./Search";

function Results(props) {
    console.log(props.results);
    function createCard(product, index, products) {
        let isOnSale=false;

        if (parseFloat(product.msrp) > parseFloat(product.price)) {
            isOnSale=true;
        }

        return  <Card key={index}>
                    <CardMedia 
                        component="img"
                        height={200}
                        image={product.thumbnailImageUrl}
                        alt="product image"
                    />
                    <CardContent>
                        <h3>{product.name}</h3>
                        <p className={isOnSale ? "on-sale" : "no-sale"}>${product.msrp}</p>
                        <p>${product.price}</p>
                    </CardContent>
                </Card>
    }

    return <Grid container rowSpacing={1} columnSpacing={{xs:1, sm:2, md:3}} alignItems="center" justifyContent="center" className="results-section">
            <Grid item xs="auto">
                {props.results.map(createCard)}
            </Grid>
        </Grid>
}

export default Results;