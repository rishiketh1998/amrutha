import React from "react";
import { detailsData } from "../data/details";
import { NavLink } from "react-router-dom";
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from "@material-ui/core"

export const Cards = () => {
    return (
        <div className="m-3 cards-grid">
            {
                detailsData.map( detail => (
                        <>
                            <Card>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Contemplative Reptile"
                                        height="250"
                                        image={detail.img}
                                        title={detail.name}
                                    />
                                    <CardContent style={{height:"125px"}}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {detail.name}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {detail.text}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button component={NavLink} to={`/${detail.name.toLowerCase()}`} size="small" color="primary">
                                        {detail.name} <i className="mx-2 far fa-hand-point-right"/>
                                    </Button>
                                </CardActions>
                            </Card>
                        </>
                    )
                )
            }
        </div>
    )
}