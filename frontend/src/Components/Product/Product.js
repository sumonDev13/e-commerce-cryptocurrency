import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Rating from "../Rating/Rating";
import axios from "axios";
import { Store } from "../../Store";
import { toast } from "react-toastify";

import { GiShoppingCart } from "react-icons/gi";

function Product(props) {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  const addToCartHandler = async (item) => {
    const existItem = cartItems.find((item) => item._id === product._id);

    const quantity = existItem ? existItem.quantity + 1 : 1;

    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.stock < quantity) {
      toast.error("Product is out of stock.");
      return;
    }
    ctxDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...item, quantity },
    });
  };

  const { product } = props;

  return (
    <div className="flex flex-wrap overflow-x-hidden">
      <div className="w-80 p-4">
        <div className="h-full rounded-lg overflow-hidden shadow-md border border-gray-200">
          <Link to={`/products/${product.url}`}>
            <img
              className="w-full h-64 object-contain mx-auto hover:scale-105 duration-500"
              src={product.image}
              alt={product.name}
            />
          </Link>
          <div className="p-4">
            <Link to={`/products/${product.url}`}>
              <h2 className="text-gray-900 font-medium mb-2">{product.name}</h2>
              <div className="items-center mb-4">
                <Rating rating={product.rating} reviews={product.reviews} />
              </div>
            </Link>
            <div className="flex justify-between items-center mb-4">
              <p className="text-gray-700 text-lg mt-4  transition ease-in-out delay-150 bg-gray-300 rounded-full px-4 py-1 font-extrabold">
                <span className="font-extrabold">$</span> {product.price.toLocaleString("en-IN")}
              </p>
              {product.stock === 0 ? (
                <button
                  className={`bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded-lg mt-4 ${
                    product.stock === 0 ? "opacity-50 pointer-events-none" : ""
                  }`}
                  disabled
                >
                  Out of Stock
                </button>
              ) : (
                
                <button
                  className="bg-cyan-200 hover:bg-gray-300 py-2 px-4 rounded-lg mt-4 font-Poppins font-bold flex flex-row"
                  onClick={() => addToCartHandler(product)}
                >
                  <div className="text-xl "><GiShoppingCart /></div>
                  <span className="px-2">Add to cart</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
