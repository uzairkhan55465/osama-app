import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Candles from "../../../public/home/candle6.jpg";
import Vases from "../../../public/home/vase11.jpeg";
interface Candle {}

const candles = [
  {
    id: 1,
    image: Candles,
    hoverImage: Vases,
    name: "Big Teddy Candle",
    price: "Rs.2,350.00 PKR",
  },
  {
    id: 2,
    image: Vases,
    hoverImage: Candles,
    name: "Book Pot Candle",
    price: "From Rs.1,850.00 PKR",
  },
  {
    id: 3,
    image: Candles,
    hoverImage: Vases,
    name: "Big Teddy Candle",
    price: "Rs.2,350.00 PKR",
  },
  {
    id: 4,
    image: Vases,
    hoverImage: Candles,
    name: "Book Pot Candle",
    price: "From Rs.1,850.00 PKR",
  },
  {
    id: 5,
    image: Candles,
    hoverImage: Vases,
    name: "Big Teddy Candle",
    price: "Rs.2,350.00 PKR",
  },
  {
    id: 6,
    image: Vases,
    hoverImage: Candles,
    name: "Book Pot Candle",
    price: "From Rs.1,850.00 PKR",
  },
  {
    id: 7,
    image: Candles,
    hoverImage: Vases,
    name: "Big Teddy Candle",
    price: "Rs.2,350.00 PKR",
  },
  {
    id: 8,
    image: Vases,
    hoverImage: Candles,
    name: "Book Pot Candle",
    price: "From Rs.1,850.00 PKR",
  },
  {
    id: 1,
    image: Candles,
    hoverImage: Vases,
    name: "Big Teddy Candle",
    price: "Rs.2,350.00 PKR",
  },
  {
    id: 2,
    image: Vases,
    hoverImage: Candles,
    name: "Book Pot Candle",
    price: "From Rs.1,850.00 PKR",
  },
  {
    id: 3,
    image: Candles,
    hoverImage: Vases,
    name: "Big Teddy Candle",
    price: "Rs.2,350.00 PKR",
  },
  {
    id: 4,
    image: Vases,
    hoverImage: Candles,
    name: "Book Pot Candle",
    price: "From Rs.1,850.00 PKR",
  },
  {
    id: 5,
    image: Candles,
    hoverImage: Vases,
    name: "Big Teddy Candle",
    price: "Rs.2,350.00 PKR",
  },
  {
    id: 6,
    image: Vases,
    hoverImage: Candles,
    name: "Book Pot Candle",
    price: "From Rs.1,850.00 PKR",
  },
  {
    id: 7,
    image: Candles,
    hoverImage: Vases,
    name: "Big Teddy Candle",
    price: "Rs.2,350.00 PKR",
  },
  {
    id: 8,
    image: Vases,
    hoverImage: Candles,
    name: "Book Pot Candle",
    price: "From Rs.1,850.00 PKR",
  },
];

export const Products = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, delay: 200, easing: "ease-in-out" });
  }, []);

  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  return (
    <div className="bg-white bg-opacity-50">
      <div className="container mx-auto px-1 md:px-28 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {candles.map((candle) => (
          <div
            key={candle.id}
            data-aos="fade-up"
            className="p-1 sm:p-2 rounded-xl  hover:shadow-xl transform transition-transform duration-300 hover:-translate-y-1"
            onMouseEnter={() => setHoveredItem(candle.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div className="overflow-hidden rounded-2xl">
              <Image
                src={
                  hoveredItem === candle.id ? candle.hoverImage : candle.image
                }
                alt={candle.name}
                className="w-full h-60 object-cover transform transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="mt-4 text-start">
              <h3 className="text-lg font-semibold text-[#F3A5A5]">
                {candle.name}
              </h3>
              <p className="text-[#F3A5A5] mt-2">{candle.price}</p>
              <button className="text-white bg-[#F3A5A5] font-bold rounded-lg py-3 w-full mt-2">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
