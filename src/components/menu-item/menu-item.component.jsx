import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { withRouter } from 'react-router-dom';//Higher Order Compontnt-is function which takes any component and modifies to new component 

// import { CenterFocusStrong } from '@material-ui/icons';

// import './menu-item.styles.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(10),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  title:{
    backgroundPosition:'centre',
    
    backgroundSize: 'cover',
  },
}));

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  const classes = useStyles();
  return (
  <div className={classes.root}>
    <Grid container spacing={2}>

   {/*}    
        <Grid item xs={12} >
        
        <div className='background-image'  style={{backgroundImage: `url(${imageUrl})` , height:150, textAlign:'center' }} >{title.toUpperCase()}</div>
        <span className='subtitle'>SHOP NOW</span>
        </Grid>
  */}
        <Grid item xs={12} >
        
        <Paper className='title' onClick={()=>history.push(`${match.url}${linkUrl}`)} style={{backgroundImage: `url(${imageUrl})` , height:150,width:100, textAlign:'center', backgroundPosition:'center',
    
        backgroundSize: 'cover' }}>{title.toUpperCase()}</Paper>
        </Grid>

    </Grid>
    

  </div>
);
};


export default withRouter(MenuItem); // -> returns super powered components eg-has location,match, history property.




