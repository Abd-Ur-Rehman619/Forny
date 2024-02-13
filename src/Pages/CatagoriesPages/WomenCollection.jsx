import ShowProducts from "../../Components/Layouts/ShowProducts";
import { useProductFilter } from "../../Components/Layouts/useProductFilter";
export default function WomenCollection() {
  const womenCollection = useProductFilter("WOMEN");
  return (
    <>
      {womenCollection && (
        <ShowProducts
          titleLabel={"Women's Collection"}
          descriptionLabel={"View All Women's Shoes"}
          products={womenCollection}
        />
      )}
    </>
  );
}
