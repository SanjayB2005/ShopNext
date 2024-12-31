import React, {useState} from 'react';
import { toast } from 'react-toastify';
import data from '../assets/data.json';
import DeliveryForm from '../Components/DeleveryForm';

const Cart = ({ cart, setCart }) => {

  const [showDeliveryForm, setShowDeliveryForm] = useState(false);

  const increaseQty = (id) => {
    const product = data.Product.find((item) => item.id === id);
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        if (item.qty >= product.stock) {
          toast.error("Product out of stock");
          return item;
        }
        return { ...item, qty: item.qty + 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const decreaseQty = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        if (item.qty <= 1) {
          toast.error("Quantity cannot be less than 1");
          return item;
        }
        return { ...item, qty: item.qty - 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      toast.error("Your cart is empty");
      return;
    } else {
      setShowDeliveryForm(true);
    }
  };

  const handleCloseForm = () => {
    setShowDeliveryForm(false);
  };


  return (
    <div>
      {cart.length === 0 ? (
        <div className="container container-fluid">
          <h2 className="mt-5">Your Cart: <b>{cart.length} items</b></h2>
          <div className="row d-flex justify-content-between">
            <div className="col-12 col-lg-8">
              <hr />
              <p className='no-cart-itm'>Your cart is Empty</p>
            </div>
            <div className="col-12 col-lg-3 my-4">
              <div id="order_summary">
                <h4>Order Summary</h4>
                <hr />
                <p>Subtotal: <span className="order-summary-values">{cart.reduce((acc, item) => acc + item.qty, 0)} (Units)</span></p>
                <p>Total: <span className="order-summary-values">${cart.reduce((acc, item) => acc + item.price * item.qty, 0)}</span></p>
                <hr />
                <button id="checkout_btn" className="btn btn-primary btn-block" onClick={handleCheckout} >Check out</button>
              </div>
            </div>
          </div>
        </div>
        
      ) : (
        <div>
          {<div className="container container-fluid">
                <h2 className="mt-5">Your Cart: <b>{cart.length} items</b></h2>

                <div className="row d-flex justify-content-between">
                  <div className="col-12 col-lg-8">
                    <hr />
                    {cart.map((item, index) => (
                      <div className="cart-item" key={index}>
                        <div className="row">
                          <div className="col-4 col-lg-3">
                            <img src={item.image} alt={item.name} height="90" width="115" />
                          </div>

                          <div className="col-5 col-lg-3">
                            <a href="#">{item.name}</a>
                          </div>

                          <div className="col-4 col-lg-2 mt-4 mt-lg-0">
                            <p id="card_item_price">${item.price}</p>
                          </div>

                          <div className="col-4 col-lg-3 mt-4 mt-lg-0">
                            <div className="stockCounter d-inline">
                              <span className="btn btn-danger minus" onClick={() => decreaseQty(item.id)}>-</span>
                              <input type="number" className="form-control count d-inline" value={item.qty} readOnly />
                              <span className="btn btn-primary plus" onClick={() => increaseQty(item.id)}>+</span>
                            </div>
                          </div>

                          <div className="col-4 col-lg-1 mt-4 mt-lg-0">
                            <i id="delete_cart_item" className="fa fa-trash btn btn-danger" onClick={() => removeItem(item.id)}></i>
                          </div>
                        </div>
                      </div>
                    ))}
                    
                  </div>

                  <div className="col-12 col-lg-3 my-4">
                    <div id="order_summary">
                      <h4>Order Summary</h4>
                      <hr />
                      <p>Subtotal: <span className="order-summary-values">{cart.reduce((acc, item) => acc + item.qty, 0)} (Units)</span></p>
                      <p>Total: <span className="order-summary-values">${cart.reduce((acc, item) => acc + item.price * item.qty, 0)}</span></p>
                      <hr />
                      <button id="checkout_btn" className="btn btn-primary btn-block" onClick={handleCheckout} >Check out</button>
                    </div>
                  </div>
                </div>
    </div>
    }
        </div>
      )}
       {showDeliveryForm && <DeliveryForm onClose={handleCloseForm} />}
    </div>
  );
};

export default Cart;

