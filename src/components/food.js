import React from "react";
import { foodData } from "../data/food";
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from "@material-ui/core";
import {NavLink} from "react-router-dom";

export const Food = () => {
    return (
        <div className="m-3 cards-grid">
            {
                foodData.map( food => (
                        <>
                            <Card>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Contemplative Reptile"
                                        height="250"
                                        image={food.img}
                                        title={food.name}
                                    />
                                    <CardContent style={{height:"125px"}}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {food.name}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {food.text}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button component={NavLink} to={`/${food.url}`} size="small" color="primary">
                                        {food.name} <i className="mx-2 far fa-hand-point-right"/>
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