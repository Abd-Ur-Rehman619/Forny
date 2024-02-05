import ProductCard from "./Layouts/ProductCard";
import TitleLabel from "./Layouts/TitleLabel";
import { Button } from "@mui/material";

export default function FlashSales() {
  return (
    <>
      <main className="flex flex-col gap-10">
        <div>
          <TitleLabel>{["Today's"]}</TitleLabel>
        </div>
        <div>
          <label className="text-4xl font-bold">Flash Sales</label>
        </div>
        <div className="flex flex-row">
          <ProductCard />
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
