import {React, useState} from "react";
import { Image, Container, Row, Col, Card } from 'react-bootstrap'
import { FaMinus, FaPlus, FaShoppingBag, FaShoppingCart,FaStar,FaShippingFast } from 'react-icons/fa'

export default function ProductShowDetails() {

    return (
        <>     
         <div className="container">
            <div className="box">
            <figure><img src={'images/product/marijuana_01.png'} className='img-detail' alt="imgProduct" /></figure>
             <div className="product-detail">
                <h2>Name</h2>
                <h5>Description</h5>
                <h3>Price</h3>
                <div className="stars-rating">
                        <span>Rating</span>
                        <span> <FaStar className="sart-icon"/> </span>
                        <span> <FaStar className="sart-icon"/> </span>
                        <span> <FaStar className="sart-icon"/> </span>
                        <span> <FaStar className="sart-icon"/> </span>
                        <span> <FaStar className="sart-icon"/> </span>
                    </div>
                    <div className="shipping-rates">
                        <span> <FaShippingFast className="shipping-icon"/>Standard Delivery</span>
                    </div>

                    <span className="foot"><FaShoppingBag className='icon' />Buy Now</span>
                    <span className="foot"><FaShoppingCart className='icon' />Add TO Cart</span>
             </div>
            </div>
         </div>
        
        </>
    )
}