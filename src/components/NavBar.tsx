import React, { useEffect, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { FaBurger } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isExpanded, setExpanded] = useState<boolean>(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 z-50  shadow-secondary  w-full transition-all duration-300 ${
        isScrolled || isExpanded
          ? "bg-primary shadow-sm"
          : "bg-transparent text-white"
      }`}
    >
      <div className=" flex justify-between items-center px-10 md:px-20 py-1  transition-all  ">
        <div className="text-3xl font-bold ">CAMPER</div>
        <div className=" hidden space-x-10 md:flex">
          <a href="#">Travel Map</a>
          <a href="#">About Us</a>
          <a href="#">Blog</a>
        </div>
        <div className=" hidden md:flex">Account</div>
        <div className="flex md:hidden ">
          {isExpanded ? (
            <button onClick={() => setExpanded(!isExpanded)}>
              <IoClose size={25} />
            </button>
          ) : (
            <button onClick={() => setExpanded(!isExpanded)}>
              <CiMenuBurger size={25} />
            </button>
          )}
        </div>
      </div>
      <div
        className={
          " flex  overflow-hidden flex-col items-center pb-2 transition-all font-bold" +
          (isExpanded ? " h-20  " : " h-0 ")
        }
      >
        <a className="mt-2" href="#">
          Travel Map
        </a>
        <a href="#">About Us</a>
        <a href="#">Blog</a>
      </div>
    </div>
  );
};

export default NavBar;
