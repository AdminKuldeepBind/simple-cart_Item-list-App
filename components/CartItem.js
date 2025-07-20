import React from 'react';

function CartItem({ product, onRemove }) {
  return (
    <li className="cart-item">
      {product.name}
      <button onClick={() => onRemove(product.id)} className="remove-btn">❌</button>
    </li>
  );
}

export default CartItem;
