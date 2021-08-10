import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import {Grid,GridList,GridListTile} from '@material-ui/core';

const NewGrid =({items,children}) => (
    <div style={{display:"flex",justifyContent:"space-evenly"}}>
    {/*
    <Grid container spacing={3}>
            // .filter((val)=> val<4)
    <Grid item xs={3} >{ React.cloneElement(children, { id:id,...otherItemProps })}</Grid> ))
    { */}

        <GridList cellHeight={20} spacing={2} style={{width:"", height:"",marginLeft:"5%", overflow:"hidden",backgroundColor:""}} cols={12}> 
        {items.map(({id, ...otherItemProps } )=> (
                <GridListTile key="Subheader" cols={3} style={{height: '400px' }}> {
                React.cloneElement(children, { id:id,...otherItemProps }) }
                
                </GridListTile>
) )}
                </GridList>
    
   
    
    </div>
);

export default NewGrid;