import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectProduct,
  fetchDetails,
} from '../../redux/actions/productActions';

export default function ProductDetails() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { selectedProduct } = useSelector((state) => state.allProducts);

  useEffect(() => {
    if (productId && productId !== '') dispatch(fetchDetails(productId));
  }, [productId]);

  return (
    <div style={{ marginTop: '5rem' }}>
      <div className="ui grid container">
        {Object.keys(selectedProduct).length === 0 ? (
          <div>...Loading</div>
        ) : (
          <div className="ui placeholder segment">
            <div className="ui two column stackable center aligned grid">
              <div className="ui vertical divider">AND</div>
              <div className="middle aligned row">
                <div className="column lp">
                  <img className="ui fluid image" src={selectedProduct.image} />
                </div>
                <div className="column rp">
                  <h1>{selectedProduct.title}</h1>
                  <h2>
                    <a className="ui teal tag label">
                      ${selectedProduct.price}
                    </a>
                  </h2>
                  <h3 className="ui brown block header">
                    {selectedProduct.category}
                  </h3>
                  <p>{selectedProduct.description}</p>
                  <div className="ui vertical animated button" tabIndex="0">
                    <div className="hidden content">
                      <i className="shop icon"></i>
                    </div>
                    <div className="visible content">Add to Cart</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
