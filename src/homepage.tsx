import { useEffect } from "react";
import arrow from "./assets/arrow.svg";

const Homepage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="w-full min-h-[85vh] bg-white flex flex-col pt-[66px] md:pt-[80px]">
      <section className="mt-[35px] pt-[90px] flex items-center flex-col md:flex-row justify-center gap-10 w-full px-5 md:px-[152px] pb-[264px] bg-[#f8f8f8]">
        <div className="w-full flex flex-col items-center justify-center border gap-6 md:items-start">
          <div className="pr-0 flex items-center justify-start gap-[7px] cursor-pointer pl-[104px] rounded-full py-[13px] relative group w-[352px] bg -[#eaffb9]/50">
            <div className="rounded-full flex items-center justify-center absolute md:left-[6px] left-[40%] ri ght-0 max-w-min mx-auto group-hover:left-[6px] group-hover:rig ht-auto duration-300 transition-all z-30 bg-[#bdff1c] py-1 px-2.5">
              <h4 className="be-vietnam-pro-semibold leading-[21.6px] text-base text-black tracking-[-0.32px]">
                Updates
              </h4>
            </div>

            <div className="absolute left-[-1px] bord er top-[-0.5px] w-[352px] h-[43px] overflow-hidden mr-0  rounded-full">
              <div className="bg-[#eaffb9] w-[0.01px] w -full h-[43px] rounded-full absolute top-[0.1px] le ft-[-920px] group-hover:w-full left-[1px] transition-all !duration-300"></div>
            </div>

            <h4 className="text-[14px] leading-[15.4px] tracking-[-0.14px] font-semibold text-transparent  group-hover:text-black transition-all z-40 be-vietnam-pro-medium duration-300">
              We secured 3M Series A funding
            </h4>

            <img src={arrow} alt="" className="w-3 h-3 z-40 opacity-0 group-hover:opacity-100 duration-300" />
            
          </div>
          <h1></h1>
          <p></p>
          <div></div>
        </div>

        <div></div>
      </section>
    </div>
  );
};

export default Homepage;
