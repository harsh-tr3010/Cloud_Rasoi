import React, { useState } from 'react';
import './Cart.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.name === item.name);

    if (existingItem) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.name === item.name ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
    console.log(cartItems);
    // localStorage.setItem("h1",llll);


  };

  const handleRemoveFromCart = (item) => {
    const updatedCartItems = cartItems.filter((cartItem) => cartItem.name !== item.name);
    setCartItems(updatedCartItems);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Sri Dauji Chatpataa</h1>
        <p>40-45 mins</p>
        <div className="tags">
          <span className="pure-veg">Pure Veg</span>
          <span className="bestseller">Bestseller</span>
        </div>
      </div>

      <div className="top-picks">
        <h2>Top Picks</h2>
        <div className="items">
          <div className="item">
            <img src="https://images.unsplash.com/photo-1565958002586-1f879a046991?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="Papdi Chaat" />
            <h3>Papdi Chaat</h3>
            <p>₹90</p>
            <button onClick={() => handleAddToCart({ name: 'Papdi Chaat', price: 90 })}>
              {cartItems.find((item) => item.name === 'Papdi Chaat')?.quantity || 'ADD'}
            </button>
          </div>
          <div className="item">
            <img src="https://images.unsplash.com/photo-1550983700-32df0758c6b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="Dahi Bhalla" />
            <h3>Dahi Bhalla</h3>
            <p>₹130</p>
            <button onClick={() => handleAddToCart({ name: 'Dahi Bhalla', price: 130 })}>
              {cartItems.find((item) => item.name === 'Dahi Bhalla')?.quantity || 'ADD'}
            </button>
          </div>
          <div className="item">
            <img src="https://images.unsplash.com/photo-1525414328727-5b3a69600189?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="Raj Kachori" />
            <h3>Raj Kachori</h3>
            <p>₹130</p>
            <button onClick={() => handleAddToCart({ name: 'Raj Kachori', price: 130 })}>
              {cartItems.find((item) => item.name === 'Raj Kachori')?.quantity || 'ADD'}
            </button>
          </div>
        </div>
      </div>

      <div className="recommended">
        <h2>Recommended (2)</h2>
        <div className="item">
          <img src="https://images.unsplash.com/photo-1505929708627-9d543981c963?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="Chilli Paneer+ Fried Rice Combo" />
          <h3>Chilli Paneer+ Fried Rice Combo</h3>
          <p>₹275</p>
          <button onClick={() => handleAddToCart({ name: 'Chilli Paneer+ Fried Rice Combo', price: 275 })}>
            {cartItems.find((item) => item.name === 'Chilli Paneer+ Fried Rice Combo')?.quantity || 'ADD'}
          </button>
        </div>
      </div>

      <div className="cart">
        <h2>Cart</h2>
        <ul>
          {cartItems.map((item) => (
            <li key={item.name}>
              {item.name} - {item.quantity} x ₹{item.price} = ₹{item.quantity * item.price}
              <button onClick={() => handleRemoveFromCart(item)}>Remove</button>
            </li>
          ))}
        </ul>
        <h3>Total: ₹{cartItems.reduce((total, item) => total + item.quantity * item.price, 0)}</h3>
      </div>
    </div>
  );
}

export default App;