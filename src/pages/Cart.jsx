import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CardItem from "../components/CardItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const total = cart.reduce((acc, curr) => acc + curr.price, 0);
    setTotalAmount(total.toFixed(2)); 
  }, [cart]);

  return (
    <div className="container mx-auto p-4">
      {cart.length > 0 ? (
        <div className="flex flex-col md:flex-row gap-6">

          <div className="flex-1 space-y-4">
            {cart.map((item, index) => (
              <CardItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>

          <div className="w-full md:w-1/3 bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Your Cart</h3>
            <h4 className="text-lg font-semibold text-gray-700">Summary</h4>
            <p className="text-gray-600 mt-2">Total items: <span className="font-bold">{cart.length}</span></p>
            <p className="text-lg font-semibold text-green-600 mt-4">Total Amount: ${totalAmount}</p>

            <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200">
              Checkout Now
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center py-10">
          <h2 className="text-2xl font-bold text-gray-700">No items in cart</h2>
          <Link to="/">
            <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-200">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;

