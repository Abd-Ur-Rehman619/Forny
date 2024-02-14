import { useEffect, useState } from "react";
import products from "../../json/AllShoes.json";

export function useProductFilter(gender) {
  const [filteredProducts, setFilteredProducts] = useState(null);

  useEffect(() => {
    const filteredProducts = products.filter(
      (product) => product.gender === gender
    );
    setFilteredProducts(filteredProducts);
  }, [gender]);

  return filteredProducts;
}
