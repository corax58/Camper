import { FaUserFriends, FaBus, FaMap } from "react-icons/fa";

const Why = () => {
  return (
    <div className="w-full pt-0 md:pt-24  text-white  space-y-16 md:space-y-24">
      <div className="w-full flex flex-col justify-center items-center space-y-5 ">
        <p className=" text-3xl font-serif">Why CAMPER</p>
        <div className=" flex flex-col items-center justify-center md:text-center text-justify font-light px-10 ">
          <p>
            {" "}
            We thoroughly take care of each of our clients and thier comfort
            during each trip.
            <br />
            Our company is a partner of more than a thousand hotels across a the
            country, <br />
            where our customers will be provided with special favorable
            conditions.
          </p>
        </div>
      </div>
      <div className=" w-full justify-center flex  flex-col md:flex-row space-y-10 md:space-y-0 space-x-5 px-5 lg:space-x-28  ">
        <div className="flex flex-col items-center space-y-4">
          <FaUserFriends size={100} />
          <div className="text-4xl font-serif">10 K+</div>
          <p className="text-2xl font-serif">Happy Customers</p>
          <div className="flex flex-col items-center  font-light">
            {" "}
            <p className=" text-center">
              We have over 10000 happy customers Who have already used the
              services of CAMPER
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <FaBus size={"100"} />
          <div className="text-4xl font-serif">247</div>
          <p className="text-2xl font-serif">Comfortable Vans</p>
          <div className="flex flex-col items-center font-light">
            {" "}
            <p className=" text-center">
              Our vans are equipped with all the necessary amenities for a
              comfortable journey
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <FaMap size={100} />
          <div className="text-4xl font-serif">4560</div>
          <p className="text-2xl font-serif">Completed Tours</p>
          <div className="flex flex-col items-center font-light">
            {" "}
            <p className="text-center">
              We have already organized 4560 tours in 86 citiesand more than 450
              landmarks
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
