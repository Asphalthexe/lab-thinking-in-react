import React from 'react';
import '../App.css';
import 'bulma/css/bulma.css';
import ProductRow from './ProductRow';

// can be function component instead of class
function ProductTable(props) {


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
                    {props.products.map((p) => <ProductRow key={p.name} product={p} />)}
                </div>
            </div>
        )
    
}

export default ProductTable;