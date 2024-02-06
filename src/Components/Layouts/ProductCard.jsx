import { useState } from "react";
import controller from "../../assets/controller.png";
import heart from "../../assets/heart.png";
import view from "../../assets/view.png";
import yellow from "../../assets/heart - Copy.png";
import { IconButton } from "@mui/material";

export default function ProductCard() {
  const [isLiked, setLiked] = useState(false);
  const product = {
    name: "HAVIT HV-G92 Gamepad",
    price: "$120",
    oldPrice: "$160",
    discount: "-40%",
    rating: "(88)",
    image: controller,
  };
  const handleLikeClick = () => {
    setLiked(!isLiked);
  };

  return (
    <div className="flex flex-col  mb-20 w-[270px] h-[350px] relative">
      <div className="absolute top-1 left-1 bg-[#DB4444] text-white p-2 rounded">
        {product.discount}
      </div>

      <div className="flex justify-center bg-[#F5F5F5] p-12 mb-2">
        <img className="h-36" src={product.image} alt="" />
      </div>

      <div className="flex justify-between items-center px-4">
        <div>
          <p className="font-semibold">{product.name}</p>
          <p className="text-[#DB4444] font-medium">
            {product.price}
            <span className="pl-2 line-through">{product.oldPrice}</span>
          </p>
          <p>{product.rating}</p>
        </div>

        <div className="flex flex-col absolute top-0 right-0 mt-2 mr-2">
          <IconButton
            onClick={handleLikeClick}
            style={{ backgroundColor: "white" }}
          >
            <img src={isLiked ? yellow : heart} alt="Heart Logo" />
          </IconButton>
          <IconButton style={{ backgroundColor: "white" }}>
            <img src={view} alt="View Logo" />
          </IconButton>
        </div>
      </div>
    </div>
  );
}