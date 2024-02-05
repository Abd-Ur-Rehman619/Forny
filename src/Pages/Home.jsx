import BrowseCatagories from "../Components/BrowseCatagories";
import Catagories from "../Components/Catagories";
import FlashSales from "../Components/FlashSales";
import { ImageCarousel } from "../Components/ImageCarousel";
// import styles from "../Components/StylingFiles/Home.module.css";
export default function Home() {
  return (
    <>
      <div className="flex items-center flex-col gap-32">
        <div className="container flex justify-between">
          <Catagories />
          <ImageCarousel />
        </div>
        <div className="container">
          <FlashSales />
        </div>
        <div className="container">
          <BrowseCatagories />
        </div>
        <div>asdf</div>
      </div>
    </>
  );
}
