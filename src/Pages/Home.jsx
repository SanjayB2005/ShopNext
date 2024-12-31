import React from 'react';
import { Link } from 'react-router-dom';
import "../media_query_css/Home.css";
import productsData from '../assets/data.json';

const Home = ({ searchQuery }) => {
  const filteredProducts = productsData.Product.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="home-main-container">
        {filteredProducts.map((product) => (
          <div className="home-product-container" key={product.id}>
            <div className="home-image-container">
              <img className="home-thumbnail" src={product.image} alt={product.name} />
            </div>
            <div className="home-detail-container">
              <Link to={product.id.toString()} key={product.id} id="act"><p className="home-detail">{product.name}</p></Link>
            </div>
            <div className="home-rating-container">
              <p className="home-rating">{product.rating}<span>(69 reviews)</span></p>
              <p className="home-price">${product.price}</p>
            </div>
            <div className="home-view_btn-cont">
              <Link to={product.id.toString()} key={product.id}><button className="home-view_btn">View Details</button></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;