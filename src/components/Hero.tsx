import heroImage from "../assets/images/HeroSect.png";
import { FaInstagram, FaTwitter } from "react-icons/fa";

const Hero = () => {
  return (
    <div>
      <div className="w-full h-screen image-container  absolute z-0">
        <img src={heroImage} alt="" className=" object-cover w-full h-full  " />
      </div>
      <div className="w-full h-screen  relative  ">
        <div className="w-full h-screen flex flex-row items-center  ">
          <div className="  md:w-1/5 w-1/6  h-96  pl-5 md:pl-16">
            <div className="h-full w-full flex flex-col justify-center space-y-5  ">
              <p className="left-hero-text w-max text-white text-sm md:text-xl">
                Follow us
              </p>
              <FaInstagram
                color="white"
                className="  size-5 md:size-5 lg:size-7"
              />

              <FaTwitter size={25} color="white" />
            </div>
          </div>
          <div className="w-4/6 h-96  flex flex-col justify-center items-center  space-y-4  md:space-y-7 lg:space-y-10 ">
            <div className=" w-full justify-center flex items-center space-x-2">
              <div className="h-0.5 w-1/2 bg-primary"></div>
              <p className=" lg:text-xl text-xs sm:text-base md:text-lg  w-max text-nowrap text-primary">
                JOIN US ON THE BIG CANADA ROAD TRIP
              </p>
              <div className=" h-0.5 w-1/2 bg-primary"></div>
            </div>
            <div className="   text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white w-full  flex-col items-center flex font-serif">
              <p>It's Great Time</p>
              <p>To Start Living Now</p>
            </div>
            <div className="w-full flex justify-center ">
              <button className=" btn-primary px-6 py-2 font-serif">
                Know More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
