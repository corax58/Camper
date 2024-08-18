import section1 from "../assets/images/section1.jpg";
import section2 from "../assets/images/section2.jpg";
import section3 from "../assets/images/section3.jpg";

const Services = () => {
  return (
    <div className="space-y-20 md:space-y-32 mb-24 mt-32">
      {" "}
      <section id="about_us" className="service-container ">
        <div className=" service-text-container" id="about-us">
          <div className="flex space-x-2 items-center">
            <div className=" h-0.5 w-10 bg-primary"></div>
            <div className="text-primary">ABOUT US</div>
          </div>
          <div className="text-white space-y-1">
            <p className=" text-xl lg:text-2xl font-serif">
              Become Part of Two-Week Canada Western Conquest
            </p>
            <p className=" text-justify  text-base lg:text-lg font-light">
              Fascinating landscapes, national parks with thousand-year-old
              trees up to the sky, an Indian village with more than 80 totem
              poles. Climb the mountains, swim in the healing hot springs, spend
              the night under the starry sky with CAMPER
            </p>
          </div>
          <div className="flex space-x-2 items-center">
            {" "}
            <div className="text-primary cursor-pointer">Read more</div>
            <div className=" h-0.5 w-10 bg-primary"></div>
          </div>
        </div>
        <div className="service-image-container ">
          <img src={section1} alt="" className="  object-cover size-full   " />
        </div>
      </section>
      <section
        id="travel_map"
        className="service-container flex-col md:flex-row "
      >
        <div className=" service-image-container  md:rounded-l-none md:rounded-r-full">
          <img src={section2} alt="" className="  object-cover size-full   " />
        </div>
        <div className=" service-text-container">
          <div className="flex space-x-2 items-center">
            <div className=" h-0.5 w-10 bg-primary"></div>
            <div className="text-primary">TRAVEL MAP</div>
          </div>
          <div className="text-white space-y-1">
            <p className="text-2xl font-serif">Explore & Enjoy </p>
            <p className=" text-lg font-light">
              From Vancouver to Calgary, 2 provinces, 7 cities, 8 stops 2017 km.
              Visit the highest peak of the Canadian Rocky Mountains, enjoy the
              beauty of the Sanvapta Falls and Peyto Lake, meet the residents of
              Banff, a small mountain town at an elevation of 1380 meters
            </p>
          </div>
          <div className="flex space-x-2 items-center">
            {" "}
            <div className="text-primary cursor-pointer">Read more</div>
            <div className=" h-0.5 w-10 bg-primary"></div>
          </div>
        </div>
      </section>
      <div className="service-container ">
        <div className=" service-text-container">
          <div className="flex space-x-2 items-center">
            <div className=" h-0.5 w-10 bg-primary"></div>
            <div className="text-primary">TRANSPORT</div>
          </div>
          <div className="text-white space-y-1">
            <p className="text-2xl font-serif">How to Move Around? </p>
            <p className=" text-lg font-light">
              The CAMPER provides you with comfortable vans with all the
              amenities inside. At your disposal: consumer electronics,
              bathroom, TV, two or more beds, air conditioning, mini fridge,
              sink and stove, solar-powered electricity.
            </p>
          </div>
          <div className="flex space-x-2 items-center">
            {" "}
            <div className="text-primary cursor-pointer">Read more</div>
            <div className=" h-0.5 w-10 bg-primary"></div>
          </div>
        </div>
        <div className="service-image-container ">
          <img src={section3} alt="" className="  object-cover size-full  " />
        </div>
      </div>
      <div className="bg-[#07161f] py-10  mb-24  flex   flex-col-reverse md:flex-row  h-max  ">
        <div className=" w-full md:w-1/2 h-full mt-10 md:mt-0 flex  justify-center  ">
          <div className="w-76 font-serif  ">
            <p className="text-3xl text-white ">Lets Explore </p>
            <p className="text-3xl text-white"> The World Together</p>
            <button className="w-full py-3 bg-primary text-lg rounded mt-4">
              Let's Go
            </button>
          </div>
        </div>
        <div className="  w-full md:w-1/2 px-10  py-2  md:pr-10 lg:pr-32 space-y-3">
          <div className="text-white space-y-3 font-light">
            <p className="text-lg text-justify">
              CAMPER is an online trip planner in which you can personalize your
              100% tailor made trip to Canada{" "}
            </p>
            <p className=" text-lg text-justify ">
              Our website is the only existing platform where its possible to
              truly plan your entire road trip online, by choosing your
              desitnation and accomodation, while also having the posibility of
              adding optional activities and a rental vehicle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
``;
