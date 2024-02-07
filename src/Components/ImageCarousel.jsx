import Carousel from "react-material-ui-carousel";
import Paper from "@mui/material/Paper";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
export const ImageCarousel = () => {
  const items = [
    {
      id: 1,
      imageUrl: image1,
      caption: "Caption 1",
    },
    {
      id: 2,
      imageUrl: image2,
      caption: "Caption 2",
    },
  ];

  return (
    <Carousel className="w-[70rem] m-10 ">
      {items.map((item) => (
        <Paper key={item.id}>
          <img
            className="w-[70rem] h-[20rem]"
            src={item.imageUrl}
            alt={`Slide ${item.id}`}
          />
        </Paper>
      ))}
    </Carousel>
  );
};
