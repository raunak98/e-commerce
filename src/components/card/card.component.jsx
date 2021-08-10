import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';


import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 12,
  },
  media: {
    height: 140,
  },

  des:{
      color:"red",
  },
//   seperate:{
//     display: "flex",
//     justifycontent: "space-between",
//   },
   

});

export const CardComponent =(props) => {
  const classes = useStyles();

  return (
      <div >
    <Card className={classes.root}>
      
        <CardContent>
        <img alt='monster' src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} />
          <Typography gutterBottom variant="h5" component="h2">
          {props.monster.name}
          </Typography>
          <p className ={classes.des} >
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </p>
        </CardContent>
      
      <CardActions>
       { /*<Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
  </Button>       */}
      </CardActions>
    </Card>
    </div>
  );
}


//   {/* 
//     return(
//         <div className={classes.root}>

//         <img alt='monster' src={'https://robohash.org/${props.monster.id}?set=set2&size=180x180'} />


//          <Paper elevation={3} >{props.monster.name}</Paper>

//         {/*  {props.monster.map((monster) => (<img alt='monster' src={'https://robohash.org/${props.monster.id}?set=set2&size=180x180'}/>))} */}

//      {/* {props.monsters.map((monster) => (<Paper elevation={3}  key= {monster.id}>{ monster.name}</Paper>))} */}

    
//      {/*        </div>);


// }  */}