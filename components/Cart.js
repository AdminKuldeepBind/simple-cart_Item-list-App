import React from 'react';
import CartItem from './CartItem';

function Cart({ items, onRemove }) {
  return (
    <ul className="cart-list">
      {items.map(product => (
        <CartItem key={product.id} product={product} onRemove={onRemove} />
      ))}
    </ul>
  );
}

export default Cart;
