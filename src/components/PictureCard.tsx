import React from "react";

import card1 from "../assets/images/card1.jpg";
import card2 from "../assets/images/card2.jpg";
import card3 from "../assets/images/card3.jpg";
import card4 from "../assets/images/card4.jpg";
import card5 from "../assets/images/card5.jpg";

const PictureCard = () => {
  return (
    <div className="w-full hidden md:flex justify-between  px-10   ">
      <div className="   image-card">
        <img
          src={card1}
          alt=""
          className=" object-cover h-96 w-full hover:scale-150  transition-all"
        />
        <div className="absolute bottom-10 text-lg font-serif font-bold text-white  w-full ">
          <div className="w-full flex justify-center">Pacific Rim</div>
        </div>
      </div>
      <div className=" image-card">
        <img
          src={card2}
          alt=""
          className=" object-cover h-96 w-full hover:scale-150  transition-all"
        />
        <div className="absolute bottom-10 text-lg font-serif font-bold text-white w-full ">
          <div className="w-full flex justify-center ">Vancouver</div>
        </div>
      </div>
      <div className="image-card">
        <img
          src={card3}
          alt=""
          className=" object-cover h-96 w-full hover:scale-150  transition-all"
        />
        <div className="absolute bottom-10 text-lg font-serif font-bold text-white  w-full ">
          <div className="w-full flex justify-center">Victoria</div>
        </div>
      </div>
      <div className="image-card">
        <img
          src={card4}
          alt=""
          className=" object-cover h-96 w-full hover:scale-150  transition-all"
        />
        <div className="absolute bottom-10 text-lg font-serif font-bold text-white  w-full ">
          <div className="w-full flex justify-center">Calgary</div>
        </div>
      </div>
      <div className=" image-card hidden lg:flex">
        <img
          src={card5}
          alt=""
          className=" object-cover h-96 w-full hover:scale-150  transition-all"
        />
        <div className="absolute bottom-10 text-lg font-serif font-bold text-white  w-full ">
          <div className="w-full flex justify-center">Whistler</div>
        </div>
      </div>
    </div>
  );
};

export default PictureCard;
