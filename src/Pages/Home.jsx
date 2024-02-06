import BrowseCatagories from "../Components/BrowseCatagories";
import Catagories from "../Components/Catagories";
import FlashSales from "../Components/FlashSales";
import { ImageCarousel } from "../Components/ImageCarousel";
import NewArrivals from "../Components/NewArrivals";
import SellingProducts from "../Components/SellingProducts";
import ServicesComponent from "../Components/ServicesComponent";
// import styles from "../Components/StylingFiles/Home.module.css";
export default function Home() {
  return (
    <>
      <div className="flex items-center flex-col gap-32">
        <div className="container flex justify-between">
          <Catagories />
          <ImageCarousel />
        </div>
        <div className="container border-b pb-10">
          <FlashSales titleLabel="Today's" descriptionLabel="Flash Sales" />
        </div>
        <div className="container border-b pb-10">
          <BrowseCatagories />
        </div>
        <div className="container border-b pb-10">
          <SellingProducts />
        </div>
        <div className="container border-b pb-10">
          <FlashSales
            titleLabel="Our Products"
            descriptionLabel="Explore Our Products"
          />
        </div>
        <div className="container border-b pb-10">
          <NewArrivals />
        </div>
        <div className="container flex justify-center  pb-40">
          <ServicesComponent />
        </div>
      </div>
    </>
  );
}
