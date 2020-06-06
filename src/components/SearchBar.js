import React from 'react';


// controlled component 
function SearchBar(props) {

  let searchHandler = (event) => {
    let inputValue = event.target.value

    props.onSearchCallback(inputValue) // lifting the state up ..
  }

  return (

    <input className="input" max-width="40%" placeholder="Search ..." onChange={searchHandler} value={props.currentSearchTerm}/>

  )

}

export default SearchBar;