import React from 'react';

const About = () => {
    return (
        <>
            <div className="about-container">
                <h1>About Us</h1>
                <p>Welcome to our e-commerce store! We offer a wide range of products to meet your needs.</p>
                <p>Our mission is to provide high-quality products at affordable prices, with excellent customer service.</p>
                <p>Thank you for shopping with us!</p>
            </div>
            <div className="qualities">
                <div className="quality">
                <h2>Quality Products</h2>
                <p>We source our products from reputable suppliers to ensure quality and customer satisfaction.</p>
            </div>
            <div className="quality">
                <h2>Affordable Prices</h2>
                <p>We strive to offer competitive prices on all our products, ensuring you get the best value for your money.</p>
            </div>
            <div className="quality">
                <h2>Excellent Customer Service</h2>
                <p>Our dedicated support team is here to assist you with any questions or concerns you may have.</p>
            </div>
            <div className="quality">
                <h2>Fast Shipping</h2>
                <p>We provide quick and reliable shipping to ensure your orders arrive on time.</p>
            </div>
            </div>
            
        </>
    );
};

export default About;