import React from 'react';

const ProductList = ({ products, addToCart, removeFromCart, cart }) => {
  return (
    <div className="product-list">
      <h2>Products</h2>
      <ul>
        {products.map((product) => {
          const cartItem = cart.find((item) => item.id === product.id);
          return (
            <li key={product.id}>
              {product.name} - ${product.price}
              <button onClick={() => addToCart(product)}>+</button>
              <span>{cartItem ? cartItem.quantity : 0}</span>
              <button onClick={() => removeFromCart(product)} disabled={!cartItem}>-</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductList;
