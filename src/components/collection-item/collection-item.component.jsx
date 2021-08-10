import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import { Grid } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


const useStyles = makeStyles({
    root: {
      maxWidth: 200,
    //   maxHeight:350,
      height:"auto"
    },
  });
  


const CollectionItem = ({id,name,price,imageUrl}) => {
    const classes = useStyles();

    
  return (   
    
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={name}
          height="200px"
          image= {imageUrl}
          title={name}
          style={{objectFit: "fill"}}
        />
        <CardContent style={{height:"50px", marginBottom:"8px"}}>
          <Typography gutterBottom  component= "p" style={{display:"flex" , flexwrap  : "wrap"}}>
            {name.toUpperCase()}
          </Typography>
          <Typography variant="subtitle1">${price}</Typography>
        
      
          </CardContent>
          <CardActions >
            <Button size="small" color="primary" >
            <ShoppingCartIcon style={{marginRight:15}}/> ADD TO CART
            </Button>
            </CardActions>
          </CardActionArea>
          
    </Card>
    
  );
    
  };

  export default CollectionItem;
  


  

