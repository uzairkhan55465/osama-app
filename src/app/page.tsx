"use client";
import Image from "next/image";
import { Products } from "../components/products/products";
import "react-multi-carousel/lib/styles.css";
import Card1 from "../../public/home/leftcandle.jpg";
import Card2 from "../../public/home/centervase.jpg";
import Card3 from "../../public/home/rightbucet.jpg";
export default function Home() {
  const Images = [
    {
      id: 1,
      img: Card1,
      title: "Scented Candles",
      btn: "Order Now",
    },
    {
      id: 2,
      img: Card2,
      title: "Vases",
      btn: "Order Now",
    },
    {
      id: 3,
      img: Card3,
      title: "Candle Buckets",
      btn: "Order Now",
    },
  ];
  return (
    <div className="w-full  overflow-hidden">
      <div className="flex  items-center justify-start  bg-cover bg-center slide1">
        {/* <div className="ms-0 sm:ms-12 mt-8 text-left px-2 sm:px-8 py-12 bg-white bg-opacity-75 w-full sm:w-[30%] h-[180px]">
          <h2 className="text-xl sm:text-4xl font-bold mb-4">Candles</h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Shop Now
          </button>
        </div> */}
      </div>
      <div className="container mx-auto gap-5 my-8 md:my-0 px-3 md:px-28 py-2 md:py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {Images?.map((cards) => (
          <div>
            {/* <Image src={cards.img} alt="" /> */}
            <div
              className={` h-[350px] ${
                cards.id === 1
                  ? "bg-[#e18c91] rounded-tl-[50px] rounded-br-[160px]"
                  : cards.id === 2
                  ? "bg-gradient-to-r from-[#F7C101] to-[#F78E16] rounded-tl-[150px]  rounded-br-[150px]"
                  : cards.id === 3
                  ? "bg-gradient-to-r from-[#8BDC7D] to-[#A2E297]  rounded-tl-[150px] rounded-br-[50px]"
                  : ""
              }`}
            ></div>

            <h3 className="text-2xl py-2 font-semibold text-center text-[#f08e8e]">
              {cards.title}
            </h3>
            <button className="text-white bg-[#f08e8e] font-bold rounded-lg py-3 w-full mt-2">
              {cards.btn}
            </button>
          </div>
        ))}
      </div>
      <div>
        <Products />
      </div>
    </div>
  );
}
