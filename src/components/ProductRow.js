import React from 'react';
import 'bulma/css/bulma.css';

// function component - no state - only props
function ProductRow(props) {

  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <p>
            <strong>{props.product.name}</strong> <br />
          </p>
        </div>
        <div className="media-right">
            <p>
              <strong>{props.product.price}</strong> <br />
            </p>
        </div>
      </article>
    </div>
  )
}


export default ProductRow;