import React from 'react';
import '../App.css';
import productDataObject from '../data.json';

import ProductTable from './ProductTable.js';
import SearchBar from './SearchBar.js';


class FilterableProductTable extends React.Component {
    /* 
        state = {
            category: "",
            price: "",
            stocked: true,
            name: ""
        } */


    state = {
        products: productDataObject.data,
        searchTerm: "",
    }

    searchHandler = (searchTerm) => {
        this.setState({
            searchTerm: searchTerm,
        })
    }

    render() {

        let filteredProducts = this.state.products.filter((product) => product.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))


        return (
            <div>
                <h2 class="title is-2">Iron Shop</h2>
                <div>
                <SearchBar onSearchCallback={this.searchHandler} currentSearchTerm={this.state.searchTerm} />
                </div>
                <div>
                 <ProductTable products={filteredProducts} />
                </div>
            </div>
        )
    }
}

export default FilterableProductTable;