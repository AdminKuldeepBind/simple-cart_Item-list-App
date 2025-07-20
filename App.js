import React, { useState } from 'react';
import Cart from './components/Cart';

function App() {
  const [cart, setCart] = useState([]);
  const [item, setItem] = useState('');

  const addToCart = () => {
    if (item.trim() === '') return;
    setCart([...cart, { id: Date.now(), name: item }]);
    setItem('');
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(product => product.id !== id));
  };

  return (
    <div className="app-container">
      <h2>🛒 Cart List App</h2>
      <div className="input-section">
        <input
          type="text"
          placeholder="Add item"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button onClick={addToCart}>Add</button>
      </div>
      <Cart items={cart} onRemove={removeFromCart} />
    </div>
  );
}

export default App;
