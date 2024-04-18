import { Link } from "react-router-dom";
import logo from "./assets/logo.svg";

const Footer = () => {
  return (
    <footer className="px-[24px] md:px-[80px] z-40 py-[32px]  flex flex-col md:flex-row gap-[42px] items-center justify-between w-full bg-white">
      <Link to="/" className="flex items-center gap-2.5 cursor-pointer">
        <img src={logo} alt="Propellent Logo" className="w-[50px] h-[50px]" />

        <h2 className="text-[22px] leading-[24.2px] tracking-[-0.6px] poppins-medium">
          Propellent
        </h2>
      </Link>

      <div className="w-full flex items-center justify-center gap-[5px] be-vietnam-pro-regular text- text-[16px] leading-[23.2px] tracking-[-0.32px]">
        <p>
          Design by
          <a href="https://twitter.com/AndreaMontini" target="_blank" className="underline text-[#878787] hover:text-black hover:no-underline transition-all cursor-pointer duration-300 ml-[5px]">
            Adrea Montinni
          </a>
        </p>
        <p>
          | Development by
          <a href="https://www.victorwilliams.me" target="_blank" className="underline text-[#878787] hover:text-black hover:no-underline transition-all cursor-pointer duration-300 mx-[5px]">
            Victor Williams
          </a>
          - Copyright 2024
        </p>
      </div>

      <Link
        to="https://andrea-montini.lemonsqueezy.com/"
        target="_blank"
        className="text-base leading-[21.6px] tracking-[-0.48px] be-vietnam-pro-medium text-[#854dff] border border-[#854dff] bg-transparent rounded-lg px-[18px] py-2.5 md:flex items-center justify-center min-w-max"
      >
        Get Template
      </Link>
    </footer>
  );
};

export default Footer;
