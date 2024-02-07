import Carousel from "react-material-ui-carousel";
import Paper from "@mui/material/Paper";
import shoesImg from "../json/Carousel_Imgs.json";

export const ImageCarousel = () => {
  return (
    <Carousel className="w-[50rem] pt-20 ">
      {shoesImg.map((item) => (
        <Paper className="flex justify-center" key={item.id}>
          <img
            className=" h-[20rem]"
            src={item.imageURL}
            alt={`Slide ${item.id}`}
          />
        </Paper>
      ))}
    </Carousel>
  );
};
