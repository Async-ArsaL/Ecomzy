import React from "react";
import { MdDeleteSweep } from "react-icons/md";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { remove } from "../redux/slices/CartSlice";

const CardItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeItem = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed Successfully");
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-4 bg-gray-100 p-4 rounded-lg shadow-md border border-gray-300 hover:shadow-lg transition duration-200">
      {/* Product Image */}
      <img
        src={item.image}
        alt={item.title}
        className="w-24 h-24 object-contain rounded-lg bg-white p-2"
      />

      {/* Product Info */}
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-lg font-bold text-gray-800">{item.title}</h2>
        <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
        <span className="text-green-600 font-semibold text-lg">${item.price}</span>
      </div>

      {/* Remove Button */}
      <button
        onClick={removeItem}
        className="flex items-center justify-center gap-1 text-red-500 hover:text-red-700 bg-white p-2 rounded-full shadow-md hover:shadow-lg transition duration-200"
      >
        <MdDeleteSweep className="text-2xl" />
      </button>
    </div>
  );
};

export default CardItem;
