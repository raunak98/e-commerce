import { Button } from '@material-ui/core';
import React from 'react';
import {Route,Link} from 'react-router-dom';

import Directory from '../../components/directory/directory.component';

import './homepage.styles.scss';


const HomePage = (props) => (
 
  <div className='homepage'>
  
      <Directory />  
      {/*
    <Link to='/hats'>HATS</Link>
    <Link to='/jacket'>jacket</Link>
    <Link tp='/sneakers'>SNEAKERS</Link>
    <Link to='/women'>women </Link>
    <Link to='/mens'>MENS</Link>
    <Button onClick={()=>props.history.push('/hats')}>Button HATS</Button>
*/}
    </div>
);

export default HomePage;

