import { CgCopyright } from "react-icons/cg";
import { FaPhone } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className="bg-[#051118] h-min w-full    ">
      <div className="flex flex-col md:flex-row space-y-5  justify-between pt-16 px-10 ">
        <div className="flex  flex-col text-white space-y-5">
          <div className="text-2xl font-semibold capitalize">STAY INFORMED</div>
          <form
            onSubmit={() => {
              window.alert("Thank you");
            }}
          >
            <input
              type="text"
              placeholder="my email "
              className=" bg-inherit border-b border-white "
            />
          </form>
        </div>
        <div className="flex flex-col space-y-2">
          <p className=" text-xl text-primary font-semibold">Information</p>
          <div className="text-white font-light space-y-1 flex flex-col">
            <a href="#">About</a>

            <a href="#">Hotels</a>
            <a href="#">Price</a>
          </div>
        </div>
        <div className="flex flex-col  space-y-2">
          <p className="text-xl text-primary font-semibold">Contact</p>
          <div className="text-white font-light flex flex-col space-y-1">
            <div className=" flex items-center space-x-2">
              <FaPhone /> <p> +251916115888</p>
            </div>
            <div className="flex items-center space-x-2">
              {" "}
              <IoIosMail /> <p>Abubekera87@gmail.com</p>
            </div>
          </div>
        </div>
        <div className=" text-primary text-3xl font-bold  flex items-center">
          CAMPER
        </div>
      </div>
      <div className="flex items-center w-full justify-center space-x-2 text-white mt-16">
        <CgCopyright />
        <p> 2024 CAMPER All rights reserved</p>{" "}
      </div>
    </div>
  );
};

export default Footer;
