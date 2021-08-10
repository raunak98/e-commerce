import React, { Component } from 'react';

import {CardList} from './components/card-list/card-list.component';

import {SearchBox} from './components/search-box/search-box.component';

class test extends Component{
    constructor(){
        super();
        this.state={
            monsters:[],
            searchField:''
            };
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users => this.setState({monsters:users}));
    }

    handleChange=(e)=>{
        this.setState({searchField: e.target.value})
    }

    render(){
        const {monsters , searchField} = this.state;
        const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

        return(
            <div>

            <SearchBox placeholder='search monster' handleChange={this.handleChange}/>

           {/*} <input type ='search' placeholder='search monster'onChange={e => {this.setState({searchField: e.target.value},()=>console.log(this.state));}}/>  */}
          
       <CardList monsters={filteredMonsters}></CardList>

            
       { /*    {this.state.monsters.map((monster) => (<CardList key= {monster.id}>{ monster.name}</CardList>))}   */}

            </div>
        );
    }

}

//     render(){
//         return(
//             <div>
//         <h2>heeelo friends</h2> 

//         <p>{this.state.string}</p>

//         <button onClick={()=>this.setState({string:'punit is welcomed '})}>change</button>


//       </div>
//         )
//     }
// 

export default test;