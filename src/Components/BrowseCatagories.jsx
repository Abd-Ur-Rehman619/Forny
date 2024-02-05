import Camera from "../assets/Category-Camera.png";
import CellPhone from "../assets/Category-CellPhone.png";
import Computer from "../assets/Category-Computer.png";
import Gamepad from "../assets/Category-Gamepad.png";
import Headphone from "../assets/Category-Headphone.png";
import SmartWatch from "../assets/Category-SmartWatch.png";
import TitleLabel from "./Layouts/TitleLabel";
import BrowseCatagory from "./Layouts/BrowseCatagory";
export default function BrowseCatagories() {
  return (
    <>
      <main className="flex flex-col gap-10">
        <TitleLabel>{["Catagories"]}</TitleLabel>
        <div>
          <label className="text-4xl font-bold">Browse By Category</label>
        </div>
        <div className="grid grid-cols-6 gap-8">
          <BrowseCatagory catagoryImg={CellPhone}>Phones</BrowseCatagory>
          <BrowseCatagory catagoryImg={Computer}>Computer</BrowseCatagory>
          <BrowseCatagory catagoryImg={SmartWatch}>Watch</BrowseCatagory>
          <BrowseCatagory catagoryImg={Camera}>Camera</BrowseCatagory>
          <BrowseCatagory catagoryImg={Headphone}>Headphone</BrowseCatagory>
          <BrowseCatagory catagoryImg={Gamepad}>Gaming</BrowseCatagory>
        </div>
      </main>
    </>
  );
}
