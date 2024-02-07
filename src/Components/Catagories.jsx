import { Link } from "react-router-dom";

export default function Catagories() {
  const catagories = [
    {
      id: 1,
      title: "Woman’s Fashion",
    },
    {
      id: 2,
      title: "Men’s Fashion",
    },
    {
      id: 3,
      title: "Electronics",
    },
    {
      id: 4,
      title: "Home & Lifestyle",
    },
    {
      id: 5,
      title: "Medicine",
    },
    {
      id: 6,
      title: "Sports & Outdoor",
    },
    {
      id: 7,
      title: "Baby’s & Toys",
    },
    {
      id: 8,
      title: "Groceries & Pets",
    },
    {
      id: 9,
      title: "Health & Beauty",
    },
  ];
  return (
    <>
      <div className="pt-10 pr-10 font-light border-r">
        <ul className="flex flex-col ">
          {catagories.map((item) => (
            <Link key={item.id} className="mb-2">
              {item.title}
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
}
