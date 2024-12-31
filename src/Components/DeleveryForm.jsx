import React from 'react';

const DeliveryForm = ({ onClose }) => {
  return (
    <div className="delivery-form-modal">
      <div className="delivery-form-content">
        <h2>Delivery Form</h2>
        <form>
        <div>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="First Name"
                        required
                    />
                </div>
                <div>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder="Last Name"
                        required
                    />
                </div>
                <div>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        required
                    />
                </div>
                <div>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Phone"
                        required
                    />
                </div>
                <div>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Your Address"
                        required
                    />
                </div>
                <div>
                    <select
                        id="city"
                        name="city"
                        required
                    >
                        <option value="1">Chennai</option>
                        <option value="2">Bangalore</option>
                        <option value="3">Mumbai</option>
                    </select>
                </div>
                <div>
                    <select
                        id="payment"
                        name="payment"
                        required
                    >
                        <option value="1">Cash on Delivery</option>
                        <option value="2">UPI Payment</option>
                        <option value="3">Net Banking</option>
                    </select>
                </div>
          <div className="delivery-btn">
              <button type="submit">Submit</button>
              <button type="button" onClick={onClose}>Close</button>
          </div>
         
        </form>
      </div>
    </div>
  );
};

export default DeliveryForm;