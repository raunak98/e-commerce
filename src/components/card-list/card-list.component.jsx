import React from 'react';

import {CardComponent} from '../card/card.component';


// import classes from '*.module.css';

// import classes from './card-list.component.scss';


export const CardList =(props) => {
    return(
        <div >
  {/*  <Paper elevation={3} >{props.children}</Paper> */}

      {props.monsters.map((monster) => (<CardComponent key ={monster.id} monster = {monster} />))} 

      
        </div>);
    }