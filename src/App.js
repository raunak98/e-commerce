import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import HatPage from './pages/hatpage/hatpage.component';
import Test from './test';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';
import SignInAndSignUpPage from './pages/signin-and-signup/signin-and-signup.component.jsx';
import SignIn from './components/sign-in/sign-in.component.jsx';
import { Switch, Route ,Link, BrowserRouter } from "react-router-dom";
import addProduct from './pages/products/addproducts.jsx';

{/*
const Home =(props) => {
  console.log(props);
  return(
    <div>
    <h1>HOOOOOMMMEEEEEEEEEEEEEEEEEE</h1>
    </div>
  );
};

const TopicsList = props => {
 
  return (
    <div>
      <h1>TOPIC LIST PAGE</h1>
      <Link to={`${props.match.url}/13`}>TO TOPIC 13</Link>
      <Link to={`${props.match.url}/17`}>TO TOPIC 17</Link>
      <Link to={`${props.match.url}/21`}>TO TOPIC 21</Link>
    </div>
  );
};
const TopicDetail = props => {
  console.log(props);
  return (
    <div>
      <h1>TOPIC DETAIL PAGE: {props.match.params.topicId}</h1>
    </div>
  );
};
*/}

function App() {
  return (
    <div>
    <BrowserRouter>
    <Header/>
        <switch> {/*control over the code as it breakes as soon as it matches the path value  */}
          <Route exact path = "/" component = {HomePage} />
        
          <Route exact  path = "/hats" component = {HatPage} />  

          <Route exact  path = "/shop" component = {ShopPage} />  

          <Route exact  path = "/signin" component = {SignIn} /> 
          
          <Route exact path ="/add" component = {addProduct}/>

          <Route exact  path = "/test" component = {Test} />
{/*
          <Route   path = '/' component = {Home}/>
          <Route exact path ='/Home/:id' component ={Home}/>
          <Route exact path='/topics' component={TopicsList} />
          <Route exact path='/topics/:topicId' component={TopicDetail} />

         
*/}
        </switch>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
