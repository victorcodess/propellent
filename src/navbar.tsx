import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.svg";

const Navbar = () => {
  const [navbarVisible, setNavbarVisible] = useState<boolean>(false);

  return (
    <nav
      id="navbar"
      className={`px-[24px] md:px-[80px] z-40 py-[25px] flex items-center justify-between w-full top-[0px] left-0 fixed bg-white`}
    >
      <Link to="/" className="flex items-center gap-2.5 cursor-pointer">
        <img src={logo} alt="Propellent Logo" className="w-[50px] h-[50px]" />

        <h2 className="text-[22px] leading-[24.2px] tracking-[-0.6px] poppins-medium">
          Propellent
        </h2>
      </Link>

      <div className="md:flex items-center justify-center gap-8 hidden be-vietnam-pro-medium">
        <Link
          to="/#benefits"
          className="text-[16px] leading-[21.6px] tracking-[-0.32px] font-medium text-[#000] cursor-pointer hover:text-[#878787] transition-all"
        >
          Benefits
        </Link>
        <Link
          to="/#products"
          className="text-[16px] leading-[21.6px] tracking-[-0.32px] font-medium text-[#000] cursor-pointer hover:text-[#878787] transition-all"
        >
          Products
        </Link>
        <Link
          to="/#testimonials"
          className="text-[16px] leading-[21.6px] tracking-[-0.32px] font-medium text-[#000] cursor-pointer hover:text-[#878787] transition-all"
        >
          Testimonials
        </Link>
        <Link
          to="/#faqs"
          className="text-[16px] leading-[21.6px] tracking-[-0.32px] font-medium text-[#000] cursor-pointer hover:text-[#878787] transition-all"
        >
          FAQs
        </Link>
      </div>

      <Link
        to="https://andrea-montini.lemonsqueezy.com/"
        target="_blank"
        className="text-base hidden leading-[21.6px] tracking-[-0.48px] be-vietnam-pro-medium text-[#854dff] border border-[#854dff] bg-transparent rounded-lg px-[18px] py-2.5 md:flex items-center justify-center max-w-max"
      >
        Get Template
      </Link>

      {navbarVisible ? (
        <svg
          width="100%"
          height="1.5em"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="rgb(0, 0, 0)"
          className="md:hidden cursor-pointer w-10 h-10"
          onClick={() => setNavbarVisible(!navbarVisible)}
        >
          <path
            d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      ) : (
        <svg
          stroke-width="1.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="rgb(0, 0, 0)"
          className="md:hidden cursor-pointer w-10 h-10"
          onClick={() => setNavbarVisible(!navbarVisible)}
        >
          <path
            d="M3 5h18M3 12h18M3 19h18"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}

      <div
        className={`pb-[5px] transition-all ${
          navbarVisible ? "top-[99px]" : "-top-[400px] "
        } shadow-[0px_23px_30px_0px_rgba(0,0,0,0.1)] flex flex-col items-center justify-between w-full gap-10 left-0 absolute  bg-white px-6 md:hidden pt-4 pb-10`}
      >
        <div className="max-w-max flex flex-col items-center justify-center gap-[33px] be-vietnam-pro-medium">
          <Link
            to="/#benefits"
            className="text-[20px] leading-[27px] tracking-[-0.4px] font-medium text-[#000] cursor-pointer hover:text-[#878787] transition-all"
          >
            Benefits
          </Link>
          <Link
            to="/#products"
            className="text-[20px] leading-[27px] tracking-[-0.4px] font-medium text-[#000] cursor-pointer hover:text-[#878787] transition-all"
          >
            Product
          </Link>
          <Link
            to="/#testimonials"
            className="text-[20px] leading-[27px] tracking-[-0.4px] font-medium text-[#000] cursor-pointer hover:text-[#878787] transition-all"
          >
            Testimonials
          </Link>
          <Link
            to="/#faqs"
            className="text-[20px] leading-[27px] tracking-[-0.4px] font-medium text-[#000] cursor-pointer hover:text-[#878787] transition-all"
          >
            FAQs
          </Link>
        </div>

        <Link
          to="/"
          className="text-base leading-[21.6px] tracking-[-0.48px] be-vietnam-pro-medium text-[#854dff] border border-[#854dff] bg-transparent rounded-lg px-[18px] py-[14px] flex items-center justify-center w-full"
        >
          Get Template
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
