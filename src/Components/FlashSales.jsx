import DescriptionLabel from "./Layouts/DescriptionLabel";
import ProductCard from "./Layouts/ProductCard";
import TitleLabel from "./Layouts/TitleLabel";
import { Button } from "@mui/material";
import shoes from "../json/Home.json";

export default function FlashSales({ titleLabel, descriptionLabel, count }) {
  return (
    <>
      <main className="flex flex-col gap-10">
        <div>
          <TitleLabel>{titleLabel}</TitleLabel>
        </div>
        <div>
          <DescriptionLabel> {descriptionLabel} </DescriptionLabel>
        </div>
        <div className="grid grid-cols-5">
          {count === 1
            ? shoes.flashSales.map((items) => (
                <div key={items.id}>
                  <ProductCard
                    name={items.name}
                    price={items.price}
                    brand={items.brand}
                    discount={items.discount}
                    gender={items.gender}
                    image={items.imageURL}
                  />
                </div>
              ))
            : count === 2
            ? shoes.sellingProducts.map((items) => (
                <div key={items.id}>
                  <ProductCard
                    name={items.name}
                    price={items.price}
                    brand={items.brand}
                    discount={items.discount}
                    gender={items.gender}
                    image={items.imageURL}
                  />
                </div>
              ))
            : shoes.exploreProduct.map((items) => (
                <div key={items.id}>
                  <ProductCard
                    name={items.name}
                    price={items.price}
                    brand={items.brand}
                    discount={items.discount}
                    gender={items.gender}
                    image={items.imageURL}
                  />
                </div>
              ))}
        </div>

        <div className="flex justify-center">
          <Button
            sx={{
              backgroundColor: "#DB4444",
              width: "234px",
              height: "56px",
              color: "white",
            }}
          >
            View All Products
          </Button>
        </div>
      </main>
    </>
  );
}
