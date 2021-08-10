import React from 'react';



export const SearchBox =({placeholder , handleChange}) => (
    <input type ='search' placeholder= {placeholder} onChange={handleChange}/>
         
);

/*

 {e => {this.setState({searchField: e.target.value},()=>console.log(this.state));}}/>    */

//  export const SearchBox = ({placeholder , handleChange}) =>  (
//     <SearchBar
//       value={placeholder}
//       onChange={handleChange}
      
//     />
//   );

