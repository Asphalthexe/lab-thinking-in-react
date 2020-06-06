import React from 'react';
import './App.css';

import productDataObject from './data.json';
import FilterableProductTable from './components/FilterableProductTable';


function App() {
  return (
    <div className="App">
      <FilterableProductTable products={productDataObject.data} />
    </div>
  );
}

export default App;
