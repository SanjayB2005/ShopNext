import React, {useState} from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import "../media_query_css/Home.css";

const ProductDetails = ({ cart, setCart }) => {
  const Details = useLoaderData();
  const [qty, setQty] = useState(1);

  function addToCart() {
    const existingItm = cart.find((item) => item.id === Details.id);
    if(!existingItm) {
      const cartItem = {
        id: Details.id,
        name: Details.name,
        price: Details.price,
        image: Details.image,
        qty: qty
        
      };
      setCart([...cart, cartItem]);
      toast.success("Product added to cart");
    }
    else {
      toast.error("Product already in cart");
    }
    
  }

  function increaseItem() {
    if(Details.stock == qty) {
      toast.error("Product out of stock");
      return ;
    }
    setQty((state)=> state + 1);
  }

  function decreaseItem() {
    if(qty > 1) {
      setQty((state)=> state - 1);
    }
    else {
      toast.error("Quantity cannot be less than 1");
    }
    
  }

  function  checkStock() {
    if(Details.stock >  5){
      return <b className='instock'>In Stock</b>;
    }
    else if(Details.stock > 0 && Details.stock <= 5) {
      return <b className='lowstock'>Low Stock</b>;
    }
    else {
      return <b className='outofstock'>Out Of Stock</b>;
    }
  }

  return (
    <div className="product-main-container">
      <div className="product-thumbnail-container">
        <img className="product-thumbnail" src={Details.image} alt={Details.name} />
      </div>
      <div className="product-detail-block">
        <div className="product-product-title">
          <h2>{Details.name}</h2>
        </div>
        <div className="product-product-id">
          <p>Product # {Details.id}</p>
        </div>
        <hr />
        <div className="product-star-rating">
          <p>{Details.rating}</p>
        </div>
        <hr />
        <div className="product-price">
          <h1>${Details.price}</h1>
        </div>
        <div className="product-no-of-items">
          <button className="product-decrease-btn" onClick={decreaseItem}>-</button>
          <input type="number" value={qty} readOnly />
          <button className="product-increase-btn" onClick={increaseItem}>+</button>
          <button className="product-add-to-cart-btn" onClick={addToCart}>Add to Cart</button>
        </div>
        <hr />
        <div className="product-stock-states">
          <p>status:&nbsp;{checkStock()}</p>
        </div>
        <hr />
        <div className="product-description">
          <b>Description:</b>
          <p>{Details.description}</p>
        </div>
        <hr />
        <div>
          <p>Sold by:<b>Amazon</b></p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

export const ProductDetailsLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`http://localhost:5000/Product/${id}`);
  if (!res.ok) {
    throw Error("Could not find the Product Details");
  }
  return res.json();
};