import React, { useState } from 'react';
import './Sidebar.css'; // Import CSS for styling

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('home'); // State to manage active menu item

  const handleItemClick = (itemName) => {
    setActiveItem(itemName); // Set the active item when clicked
  };

  return (
    <>
    <div className="main-section">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />

        <div className="sidebar">
          <h2>Cloud Rasoi</h2>
          <ul>
              <li className={activeItem === 'home' ? 'active' : ''} onClick={() => handleItemClick('home')}>
              <i class="fa-solid fa-location-pin">&nbsp;</i>Dashboard
              </li>
              <li className={activeItem === 'about' ? 'active' : ''} onClick={() => handleItemClick('about')}>
              <i class="fa-solid fa-burger"></i>&nbsp;Food Order
              </li>
              <li className={activeItem === 'services' ? 'active' : ''} onClick={() => handleItemClick('services')}>
              <i class="fa-solid fa-star"></i>&nbsp;Favourite
              </li>
              <li className={activeItem === 'contact' ? 'active' : ''} onClick={() => handleItemClick('Messages')}>
              <i class="fa-solid fa-message"></i>&nbsp;Messages
              </li>
              <li className={activeItem === 'contact' ? 'active' : ''} onClick={() => handleItemClick('history')}>
              <i class="fa-solid fa-clock-rotate-left">&nbsp;</i>Order History
              </li>
              <li className={activeItem === 'contact' ? 'active' : ''} onClick={() => handleItemClick('bills')}>
              <i class="fa-solid fa-money-bill">&nbsp;</i>Bills
              </li>
          </ul>
      </div>
    </div>  
      </>
  );
};

export default Sidebar;
