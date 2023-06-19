import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { CardActions, Typography } from '@material-ui/core';
import { COLORS } from '../../../theme/constants';
import theme from '../../../theme/theme';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

const useStyles = makeStyles({
    root: {
        width: "358px",
        height: "90px",
        padding: theme.spacing(1, 1, 1, 8),
        borderRadius: "4px",
        boxShadow: "none",
        border:"1px solid",
        borderColor:COLORS.GREY_300,
    },
    image: {
        width: "60px",
        height: "75px",
        margin: theme.spacing(2,2),
        objectFit: "contain"
    },
    title: {
        width: "263px",
        height: "22px",
        margin: theme.spacing(1),
        color: COLORS.CHARCOAL_GREY_100,
        textAlign:"left"
    },
    author: {
        width: "14px",
        height: "18px",
        color: COLORS.ICON_500,
        textTransform: "none"
    },
    authorName: {
        width: "50px",
        height: "18px",
        color: COLORS.CHARCOAL_GREY,
        textTransform: "none",
        textAlign: "left"
    },
    field: {
        width: "32px",
        height: "18px",
        textTransform: "none",
        color: COLORS.ICON_500,
    },
    fieldName: {
        width: "55px",
        height: "18px",
        textTransform: "none",
        Color: COLORS.CHARCOAL_GREY_100
    },
    actions: {
        margin: theme.spacing(0),
        padding: theme.spacing(1)
    },
    actionArea: {
        display: "flex",
        width: "auto",
    },
    content:{
        padding: theme.spacing(0)
    }
});

export type SearchResultCardProps={
    title: string;
    authorName: string;
    field: string;
    image: string;
    id: string;
    handleClose:()=>void;
}

const SearchResultCard: React.FC<SearchResultCardProps> = ({
    title,
    field,
    authorName,
    image,
    id,
    handleClose
}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const handleOnClick=(bookId:string)=>{
        dispatch({ type: "SET_SINGLE_VIEW_ID", payload: bookId });
        history.push("/bookdetail");
        handleClose();
    }
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardActionArea className={classes.actionArea}>
                <CardMedia className={classes.image}
                    component="img"
                    image={image} onClick={()=>handleOnClick(id)} data-testid="card"/>
                <CardContent className={classes.content}>
                    <Typography className={classes.title} variant="body2">{title}</Typography>
                    <CardActions className={classes.actions}>
                        <Typography className={classes.author} variant="overline">by</Typography>
                        <Typography className={classes.authorName} variant="caption">{authorName}</Typography>
                    </CardActions>
                    <CardActions className={classes.actions}>
                        <Typography className={classes.field} variant="overline">Field :</Typography>
                        <Typography className={classes.fieldName} variant="overline">{field}</Typography>
                    </CardActions>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default SearchResultCard;