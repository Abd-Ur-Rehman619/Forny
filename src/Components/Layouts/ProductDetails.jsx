import SizeButton from "./sizeButton";
import heart from "../../assets/heart.png";
import yellow from "../../assets/heart - Copy.png";
import delivery from "../../assets/icon-delivery.png";
import returnIcon from "../../assets/icon-return.png";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { addItem } from "../../store/cartSlice";

export default function ProductDetails({ product }) {
  const [count, setCount] = useState(1);
  const [favorite, setFavorite] = useState(false);

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addItem({ ...product, quantity: 1 }));
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="flex items-center w-[31.25rem] h-[37.5rem] border rounded">
        <img src={product.imageURL} alt="productImage" />
      </div>
      <div>
        <h1 className="text-2xl font-semibold leading-6 m-5">{product.name}</h1>
        <p
          className={
            product.is_in_inventory ? "text-green-400 m-5" : "text-rose-400 m-5"
          }
        >
          {product.is_in_inventory ? "In Stock" : "Not Available"}
        </p>
        <p className="text-2xl  leading-6 m-5">{`$${product.price}`}</p>
        <p className="text-sm leading-5 p-5 border-b">{`Experience limitless comfort and performance with the ${product.name}, featuring signature React foam cushioning and lightweight upper for unparalleled support and breathability.`}</p>
        <div className="m-5">
          Size:
          <SizeButton>XS</SizeButton>
          <SizeButton>S</SizeButton>
          <SizeButton>M</SizeButton>
          <SizeButton>L</SizeButton>
          <SizeButton>XL</SizeButton>
        </div>

        <div className="flex m-5">
          <div className="flex items-center h-11 w-40 border border-grey-700 rounded m-2">
            <button
              className="bg-white hover:bg-[#DB4444] hover:text-white text-gray-800 font-semibold border rounded shadow h-11 w-10"
              onClick={() => {
                if (count > 1) {
                  setCount(count - 1);
                }
              }}
            >
              -
            </button>
            <p className="text-xl font-bold border h-11 w-20  pl-3 pr-3 flex items-center justify-center">
              {count}
            </p>
            <button
              className="bg-white hover:bg-[#DB4444] hover:text-white text-gray-800 font-semibold border rounded shadow h-11 w-10"
              onClick={() => setCount(count + 1)}
            >
              +
            </button>
          </div>

          <button className="bg-[#EA4335] hover:bg-[#aa4137] hover:text-white text-white font-semibold py-2 px-4 border  rounded shadow m-2 w-36">
            Buy Now
          </button>
          <button
            onClick={addToCartHandler}
            className="bg-[#fc8941] hover:bg-[#ff7520] hover:text-white text-white font-semibold py-2 px-4 border  rounded shadow m-2 w-36"
          >
            Add to Cart
          </button>

          <button
            className="bg-white  text-gray-800 font-semibold py-2 px-4 border  rounded shadow m-2 "
            onClick={() => setFavorite(!favorite)}
          >
            <img src={favorite ? yellow : heart} alt="Heart Logo" />
          </button>
        </div>

        <div className="flex flex-col  border rounded w-[30rem] m-5 ">
          <div className="flex border-b p-5">
            <img src={delivery} alt="delivery" />
            <div className="flex flex-col gap-1 pl-5">
              <p className="text-medium font-semibold">Free Delivery</p>
              <p className="text-sm font-semibold">
                Enter your postal code for Delivery Availibility
              </p>
            </div>
          </div>
          <div className="flex p-5">
            <img src={returnIcon} alt="returnIcon" />
            <div className="flex flex-col gap-1 pl-5">
              <p className="text-medium font-semibold">Return Delivery</p>
              <p className="text-sm font-semibold">
                Free 30 Days Delivery Returns. Details
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
