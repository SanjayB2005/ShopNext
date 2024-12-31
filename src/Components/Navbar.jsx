import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = ({ cart, setSearchQuery }) => {
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(searchInput);
    navigate('/');
  };

  return (
    <nav>
      <div className="nav-left">
        <NavLink to={"/"}><h1>ShopNest</h1></NavLink>
      </div>
      <div className="nav-middle">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Enter product name..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button type="submit" className="fa fa-search"></button>
        </form>
      </div>
      <div className="nav-right">
        <ul>
          <NavLink to={"/"}><li>Home</li></NavLink>
          <NavLink to={"/contact"}><li>Contact</li></NavLink>
          <NavLink to={"/about"}><li>About</li></NavLink>
          <NavLink to={"/cart"}><li><span className="nav-cart">Cart <span className="nav-cart-item">{cart.length}</span> </span></li></NavLink>
          <NavLink to={"/login"}><li><button>Get started</button></li></NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;