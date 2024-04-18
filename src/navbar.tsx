import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navbarVisible, setNavbarVisible] = useState<boolean>(false);

  return (
    <nav
      id="navbar"
      className={`px-[40px] md:px-[130px] z-40 py-[18px] shadow-2xl shadow-blue-900/20 flex items-center justify-between w-full top-[0px] left-0 fixed bg-white`}
    >
      <Link
        to="/"
        className="text-[20px] md:text-[30px] md:font-bold font-medium text-[#333333]"
      >
        Codepad
      </Link>

      <div className="md:flex items-center justify-center gap-14 hidden">
        <Link
          to="/products"
          className="text-[16px] leading-[24px] font-medium text-[#333333] cursor-pointer"
        >
          Products
        </Link>
        <Link
          to="/about-us"
          className="text-[16px] leading-[24px] font-medium text-[#333333] cursor-pointer"
        >
          About
        </Link>

        <Link
          to="/contact-us"
          className="text-[16px] leading-[24px] font-medium text-[#333333] cursor-pointer"
        >
          Contact
        </Link>
      </div>

      {navbarVisible ? (
        <svg
          className="md:hidden cursor-pointer w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0 0 50 50"
          onClick={() => setNavbarVisible(!navbarVisible)}
        >
          <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
        </svg>
      ) : (
        <svg
          className="md:hidden cursor-pointer"
          fill="currentColor"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          onClick={() => setNavbarVisible(!navbarVisible)}
        >
          <path d="M3 13h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 7h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 19h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path>
        </svg>
      )}

      <div
        className={`pb-[5px] transition duration-300 ease-in-out ${
          navbarVisible ? "top-[66px]" : "-top-[300px]"
        } shadow-2xl shadow-blue-900/20 flex flex-col items-center justify-between w-full left-0 absolute bg-white px-10 md:hidden`}
      >
        <Link
          to="/products"
          className="text-[16px] leading-[24px] font-normal text-[#333333] cursor-pointer text-left w-full border-b py-3 hover:text-green-500 transition-colors"
        >
          Products
        </Link>
        <Link
          to="/about-us"
          className="text-[16px] leading-[24px] font-normal text-[#333333] cursor-pointer text-left w-full border-b py-3 hover:text-green-500 transition-colors"
        >
          About
        </Link>

        <Link
          to="/contact-us"
          className="text-[16px] leading-[24px] font-normal text-[#333333] cursor-pointer text-left w-full py-3 hover:text-green-500 transition-colors"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
