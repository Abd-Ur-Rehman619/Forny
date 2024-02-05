import Catagories from "../Components/Catagories";
import { ImageCarousel } from "../Components/ImageCarousel";
// import styles from "../Components/StylingFiles/Home.module.css";
export default function Home() {
  return (
    <>
      <div className="flex justify-center">
        <div className="container flex justify-between">
          <Catagories />
          <ImageCarousel />
        </div>
      </div>
    </>
  );
}
