import TitleLabel from "./Layouts/TitleLabel";
import DescriptionLabel from "./Layouts/DescriptionLabel";
import womensCollection from "../assets/attractive-woman-wearing-hat-posing-black-background.png";
import playStation from "../assets/playstation.png";
import woffers from "../assets/woffers.png";
import Gucciperfume from "../assets/Gucciperfume.png";
import NewArrivedDetails from "./Layouts/NewArrivedDetails";

export default function NewArrivals() {
  return (
    <>
      <main className="flex flex-col gap-10">
        <div>
          <TitleLabel>{["This Month"]}</TitleLabel>
        </div>
        <div>
          <DescriptionLabel>Best Selling Products</DescriptionLabel>
        </div>
        <div className="flex flex-row gap-10">
          <div className="relative border border-black bg-black h-[37.5rem] w-[52rem]">
            <div className="flex justify-center items-end h-full">
              <img src={playStation} alt="playStation" />
            </div>
            <NewArrivedDetails
              Title={"PlayStation 5"}
              Description={
                "Black and White version of the PS5 coming out on sale."
              }
            />
          </div>

          <div className="flex flex-col h-[37.5rem] w-[52rem] gap-8">
            <div className="relative flex justify-end border border-black bg-black w-[52rem] h-[17.75rem]">
              <img src={womensCollection} alt="womensCollection" />
              <NewArrivedDetails
                Title={"Women’s Collections"}
                Description={
                  "Featured woman collections that give you another vibe."
                }
              />
            </div>
            <div className="flex flex-row gap-10 w-[52rem]">
              <div className="relative border border-black bg-black w-[25rem] h-[17.75rem]">
                <div className="flex justify-center items-center h-full">
                  <img src={woffers} alt="woffers" />
                </div>
                <NewArrivedDetails
                  Title={"Speakers"}
                  Description={"Amazon wireless speakers"}
                />
              </div>
              <div className="relative border border-black bg-black w-[25rem] h-[17.75rem]">
                <div className="flex justify-center items-center h-full">
                  <img src={Gucciperfume} alt="Gucciperfume" />
                </div>

                <NewArrivedDetails
                  Title={"Perfume"}
                  Description={"GUCCI INTENSE OUD EDP"}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
