import React from 'react';

import NewGrid from '../grid/grid.component';

 import CollectionItem from '../collection-item/collection-item.component';
// import Grid from '@material-ui/core/Grid';

const CollectionPreview = ({title,...otherItems}) => (
    <div className='collection-preview'>
    <h1 className='title' style={{marginLeft:"5%"}}>{title.toUpperCase()}</h1>
    <NewGrid {...otherItems}>
        <CollectionItem/>
    </NewGrid>
    {/*
<div className='preview'>
    <Grid container spacing={3}>
    <Grid item xs={12} >
    {
        items
        .filter((item,val)=> val<4)
        .map(({id, ...otherItemProps } )=> (
        <CollectionItem key={id} {...otherItemProps}/>))
    }
    </Grid>
    </Grid>
     */}
    </div>
    // </div>
);

export default CollectionPreview;