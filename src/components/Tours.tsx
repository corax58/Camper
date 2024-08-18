import bg from "../assets/images/balloons.jpg";

const Tours = () => {
  return (
    <div className=" h-96 md:h-80 w-full bg-black mt-24 ">
      <div className="h-96 md:h-80 w-full absolute">
        <img
          src={bg}
          alt=""
          className="h-full w-full object-cover brightness-50 opacity-45 sepia-[90%]"
        />
      </div>

      <div className="relative h-full ">
        <div className="flex px-5 flex-col items items-center w-full h-full justify-center  space-y-7">
          <div className="   text-xl sm:text-2xl md:text-3xl font-serif text-white ">
            The CAMPER Has Other Tools As Well
          </div>
          <p className=" md:w-2/3 lg:w-1/2 text-justify md:text-center text-white font-light">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
            voluptates debitis ipsa quasi minima voluptatem, suscipit error
            perferendis tenetur dicta sint porro velit repellendus. Possimus
            inventore doloribus quas odit vero?
          </p>
          <button className="btn-primary px-6 py-2 font-serif ">
            See The Tours
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tours;
