import React from 'react';
import '../App.css';
import 'bulma/css/bulma.css';
import productDataObject from '../data.json';
import ProductRow from './ProductRow';


class ProductTable extends React.Component {
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

    render() {

        let filteredProducts = this.state.products.filter((product) => product.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))


        return (
            <div className="box">
                <article className="media">
                    <div className="media-left">
                        Name
                    </div>
                    <div className="media-right">
                        Price
                    </div>
                </article>
                <div>
                    {filteredProducts.map((p) => <ProductRow key={p.name} product={p} />)}
                </div>
            </div>
        )
    }
}

export default ProductTable;