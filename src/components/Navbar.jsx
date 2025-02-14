import React from "react";
import { RiShoppingCartFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
// import Cart from "../pages/Cart";
import { useSelector } from "react-redux";

const Navbar = () => {
  const {cart} =useSelector((state)=>state)
  return (
    <div className="bg-blue-300">
      <nav className="flex justify-between max-w-6xl items-center h-16  mx-auto  w-full shadow-sm font-mono ">
       <NavLink to="/">
     <div className="ml-5"> 
        <img
          className="h-15 w-15"
          src="https://imgs.search.brave.com/x-pEcp7Kw0Z6cqLf-bguU4ssnlBwLB3OYm9l0qbd4s0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzQxLzQwLzc2/LzM2MF9GXzE0MTQw/NzY4M19BbU91QnRJ/SDU5enZ5aTFUOXQw/WnFaYU15WUwwWUdG/WS5qcGc"
          alt=""
        />
        </div>
       </NavLink>
        <div className="flex justify-between font-medium mr-5 space-x-6  items-center">
          <NavLink to="/">
          <p className="text-xl font-semibold">Home</p>
          </NavLink>
            <NavLink to="/cart">
            <div className="relative">
            <RiShoppingCartFill className="text-2xl"/>
            <span>
              {
                cart.length > 0 && <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs font-bold w-5 h-5 text-center flex justify-center items-center rounded-full animate-bounce">{cart.length}</span>
              }
            </span>
            </div>
            </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
