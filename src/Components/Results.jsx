import React from "react";
import { Grid } from "@mui/material";
import { Pagination } from "@mui/material";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { CardMedia } from "@mui/material";
import Search from "./Search";

function Results() {
    return <Grid container spacing={4} alignItems="center" justifyContent="space-between" className="results-section">
        <Grid item xs={10}>
            <h2>Showing <strong>number</strong> of <strong>number</strong> results for "query"</h2>
        </Grid>
        <Grid item xs={2}>
            <Pagination count={3} hidePrevButton />
        </Grid>
        <Grid container item rowSpacing={1} columnSpacing={{xs:1, sm:2, md:3}} alignItems="center" justifyContent="center">
            <Grid item xs="auto">
                <Card>
                    <CardMedia 
                        component="img"
                        image="thumbnailImageUrl"
                        alt="see if there is alt text in json file"
                    />
                    <CardContent>
                        <h3>name</h3>
                        <p id="msrp">msrp</p>
                        <p>price</p>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </Grid>
}

export default Results;