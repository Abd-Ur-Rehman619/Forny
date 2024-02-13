import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import productsData from "../json/AllShoes.json";
import SizeButton from "./Layouts/sizeButton";
import heart from "../assets/heart.png";
import yellow from "../assets/heart - Copy.png";

export default function Product() {
  const { productSlug } = useParams();
  const [product, setProduct] = useState(null);
  const [count, setCount] = useState(1);
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    const foundProduct = productsData.find(
      (product) => product.slug === productSlug
    );
    setProduct(foundProduct);
  }, [productSlug]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="flex items-center flex-col gap-32 h-screens">
        <div className="container flex">
          <div>
            <img src={product.imageURL} alt="productImage" />
          </div>
          <div>
            <h1>{product.name}</h1>
            <p>{`$${product.price}`}</p>
            <p>{`Experience limitless comfort and performance with the ${product.name}, featuring signature React foam cushioning and lightweight upper for unparalleled support and breathability.`}</p>
            <div>
              Size:
              <SizeButton>XS</SizeButton>
              <SizeButton>S</SizeButton>
              <SizeButton>M</SizeButton>
              <SizeButton>L</SizeButton>
              <SizeButton>XL</SizeButton>
            </div>
            <div className="flex ">
              <div className="flex items-center p-2 h-11 border border-grey-700 rounded m-2">
                <button
                  className="bg-white hover:bg-[#DB4444] hover:text-white text-gray-800 font-semibold  border  rounded shadow "
                  onClick={() => {
                    if (count > 1) {
                      setCount(count - 1);
                    }
                  }}
                >
                  -
                </button>
                <p className="text-xl font-bold border  pl-3 pr-3">{count}</p>
                <button
                  className="bg-white hover:bg-[#DB4444] hover:text-white text-gray-800 font-semibold  border rounded shadow "
                  onClick={() => setCount(count + 1)}
                >
                  +
                </button>
              </div>
              <button className="bg-white hover:bg-[#DB4444] hover:text-white text-gray-800 font-semibold py-2 px-4 border  rounded shadow m-2 w-36">
                Buy Now
              </button>
              <button
                className="bg-white  text-gray-800 font-semibold py-2 px-4 border  rounded shadow m-2 "
                onClick={() => setFavorite(!favorite)}
              >
                <img src={favorite ? yellow : heart} alt="Heart Logo" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
