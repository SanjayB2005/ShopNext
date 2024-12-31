import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import "../media_query_css/Home.css";

const Home = ({ searchQuery }) => {
  const productsData = useLoaderData();

  const filteredProducts = productsData.filter(product =>
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

export const productsLoader = async () => {
  const res = await fetch('http://localhost:5000/Product');
  return res.json();
};