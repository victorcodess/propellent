// import { useEffect } from "react";
import arrow from "./assets/arrow.svg";
import stars from "./assets/stars.svg";
import StartupCarousel from "./startup-carousel";
import fingerprint from "./assets/fingerprint.svg";
import fingerprintTwo from "./assets/fingerprint-two.svg";
import invest from "./assets/invest.svg";
import earn from "./assets/earn.svg";
import sell from "./assets/sell.svg";
import secure from "./assets/secure.png";
import integrated from "./assets/integrated.png";

const Homepage = () => {
  // useEffect(() => {
  //   window.scrollTo({
  //     top: 0,
  //     left: 0,
  //     behavior: "smooth",
  //   });
  // }, []);

  return (
    <div
      id="hero"
      className="w-full min-h-[85vh] bg-white flex flex-col pt-[66px] md:pt-[66px]"
    >
      <section className="mt-[35px] pt-[99px] md:pt-[101px] flex items-center flex-col justify-center gap-40 w-full px-5 md:pl-[152px] md:pr-[120px] pb-[264px] bg-[#f8f8f8] relative overflow-hidden">
        <div className="flex items-center flex-col md:flex-row justify-center gap-10 w-full relative">
          <div className="w-full flex flex-col items-center justify-center gap-6 md:items-start relative">
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
                We secured 3M Series B round
              </h4>

              <img
                src={arrow}
                alt=""
                className="w-3 h-3 z-40 opacity-0 group-hover:opacity-100 duration-300"
              />
            </div>

            <h1 className="text-[45px] leading-[47.25px] md:text-[72px] md:leading-[75.6px] tracking-[-2px] md:tracking-[-3px] poppins-medium text-center md:text-left md:w-[610px] z-20">
              Ease your mind on business operations.
            </h1>

            <img
              src="https://framerusercontent.com/images/aTjtJJGxuy3avHrtmudaw8F06g.png?scale-down-to=512"
              alt=""
              className="z-10 absolute w-[186px] top-[84px] left-[-16px] hidden md:block"
            />

            <p className="be-vietnam-pro-medium text-[#475466] text-[18px] leading-[24.3px] tracking-[-0.54px] md:text-[20px] md:leading-[27px] md:tracking-[-0.6px] text-center md:text-left w-full md:w-[480px]">
              From intuitive task management to advanced data analytics, our
              software equips you with the tools you need to thrive in today's
              competitive business landscape.
            </p>

            <div className="flex flex-col md:flex-row gap-4 md:gap-1.5 items-center">
              <div className="flex w-[108px] h-[37px] relative">
                <img
                  src="https://framerusercontent.com/images/PUja2jlMhB77g7YskLJxlVzkBAA.jpg?scale-down-to=512"
                  alt=""
                  className="rounded-full w-[37px] h-[37px] object-cover border-[2px] border-white absolute left-0 hover:top-[-10px] top-0 transition-all duration-300"
                />
                <img
                  src="https://framerusercontent.com/images/0OBj7uN1ncKrMVzB0GprNt5uI.jpg?scale-down-to=512"
                  alt=""
                  className="rounded-full w-[37px] h-[37px] object-cover border-[2px] z-10 absolute left-6 border-white hover:top-[-10px] top-0 transition-all duration-300"
                />
                <img
                  src="https://framerusercontent.com/images/lVDVGe7ZXiK6CfmkoqwS5fUXY.jpg?scale-down-to=512"
                  alt=""
                  className="rounded-full w-[37px] h-[37px] object-cover border-[2px] z-20 absolute left-12 border-white hover:top-[-10px] top-0 transition-all duration-300"
                />
                <img
                  src="https://framerusercontent.com/images/JhbGle453RWF0QjzZnSxbtxRBiA.jpg?scale-down-to=512"
                  alt=""
                  className="rounded-full w-[37px] h-[37px] object-cover border-[2px] z-30 absolute left-[72px] border-white hover:top-[-10px] top-0 transition-all duration-300"
                />
              </div>

              <img src={stars} alt="" className="w-[116px]" />
            </div>
          </div>

          <div className="bg-[#fdffff] w-full px-[32px] py-[40px] flex flex-col gap-6 shadow-[5px_25px_25px_0px_rgba(0,0,0,0.1)] rounded-[24px] items-center md:max-w-min z-10">
            <div className="flex flex-col gap-3 w-full items-center justify-center md:w-[392px]">
              <h3 className="be-vietnam-pro-medium text-[26px] leading-[31.2px] tracking-[-1px] text-center text-[#0f1728]">
                Secure your spot now
              </h3>
              <p className="be-vietnam-pro-regular text-[16px] leading-[21.6px] tracking-[-0.32px] text-center text-[#475466]">
                Be the first to know when the product launches and other
                not-to-miss updates.
              </p>
            </div>

            <form
              action=""
              className="mx-auto w-full flex flex-col gap-[15px] md:w-[392px]"
            >
              <input
                type="text"
                className="bg-[#ebebeb] text-gray-900 leading-[22.4px] text-[16px] block w-full p-[15px] rounded-lg focus:outline-none placeholder:text-[#757575]"
                placeholder="Your name"
                required
              />
              <input
                type="email"
                className="bg-[#ebebeb] text-gray-900 leading-[22.4px] text-[16px] block w-full p-[15px] rounded-lg focus:outline-none placeholder:text-[#757575]"
                placeholder="Your email"
                required
              />

              <button
                type="submit"
                // disabled={isButtonDisabled}
                className="text-base leading-[22.4px] text-center  font-medium text-white bg-[#854dfc] rounded-lg p-[15px] hover:bg-[#9D71FD] w-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-orange-500"
                // onClick={handleSubmit}
              >
                Join the Waitlist
              </button>
            </form>

            <p className="be-vietnam-pro-regular text-[14px] leading-[16.8px] tracking-[-0.28px] text-center text-[#9ca3bd] md:w-[392px]">
              By subscribing, you agree with our
              <span className="text-[#343b55] underline ml-1 cursor-pointer">
                Terms of License
              </span>
            </p>
          </div>
        </div>

        <StartupCarousel />

        <img
          src="https://framerusercontent.com/images/uTKvR6qfTzsBtXOvlLGL21I53YY.png?scale-down-to=512"
          alt=""
          className="absolute hidden md:block w-[271px] top-[106px] right-[455px]"
        />
        <img
          src="https://framerusercontent.com/images/AM9PX8l3tcHV41oVhZ9gWUkBSE.png?scale-down-to=512"
          alt=""
          className="absolute w-[301px] top-[776px] right-[-35px] md:top-[446px] md:left-[1175px] rotate-[-30deg]"
        />
      </section>

      <section
        id="benefits"
        className="pt-[80px] md:pt-[120px]  bg-white w-full px-[24px] md:px-[178px] flex flex-col items-center gap-[60px]"
      >
        <div className="flex flex-col items-center gap-5 w-full md:w-[800px]">
          <h1 className="w-full sm:w-[669px] poppins-medium text-[50px] leading-[60px] tracking-[-2px] md:text-[56px] md:leading-[67.2px] text-center text-[#0f1728]">
            Good-bye to traditional startup hassle.
          </h1>
          <p className="font-normal text-[18px] leading-[24.3px] text-center tracking-[-0.54px] md:text-[20px] md:leadng-[27px] md:tracking-[-0.6px] text-[#475466]">
            Say farewell to the complexities of the past and unlock a smoother
            path to success. Welcome to a new era of simplicity and efficiency.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-[24px] w-full">
          <div className="flex flex-col p-8 bg-[#bdff1c] rounded-[24px] items-start justify-between h-[274px] md:h-[348px]">
            <img src={fingerprint} alt="" className="w-16 h-16" />
            <div className="w-full flex flex-col items-start gap-2">
              <h3 className="font-medium text-[26px] leading-[31.2px] tracking-[-1px] text-[#0f1728]">
                Optimize your daily operations
              </h3>
              <p className="font-normal leading-[21.6px] text-base tracking-[-0.32px] text-black/50">
                Our software simplifies complex business processes, helping you
                efficiently manage tasks, projects, and resources.
              </p>
            </div>
          </div>
          <div className="flex flex-col p-8 bg-[#bdff1c] rounded-[24px] items-start justify-between h-[274px] md:h-[348px]">
            <img src={fingerprint} alt="" className="w-16 h-16" />
            <div className="w-full flex flex-col items-start gap-2">
              <h3 className="font-medium text-[26px] leading-[31.2px] tracking-[-1px] text-[#0f1728]">
                Make informed business decision
              </h3>
              <p className="font-normal leading-[21.6px] text-base tracking-[-0.32px] text-black/50">
                Our software provides comprehensive analytics, empowering you to
                identify trends, track performance, and adjust your strategies
                for success.{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-col p-8 bg-[#bdff1c] rounded-[24px] items-start justify-between h-[274px] md:h-[348px]">
            <img src={fingerprint} alt="" className="w-16 h-16" />
            <div className="w-full flex flex-col items-start gap-2">
              <h3 className="font-medium text-[26px] leading-[31.2px] tracking-[-1px] text-[#0f1728]">
                Scale your startup with confidence
              </h3>
              <p className="font-normal leading-[21.6px] text-base tracking-[-0.32px] text-black/50">
                Our software is designed to grow alongside your business,
                adapting to your evolving needs. Scale your startup with
                confidence.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="product"
        className="flex flex-col items-center w-full pt-[120px] md:pt-[160px] pb-[190px] md:pb-[150px] px-[24px] md:px-[152px] gap-[80px]"
      >
        <div className="w-full flex flex-col items-center gap-[15px] md:w-[850px]">
          <div className="flex items-center py-2 px-3 bg-[#bdff1c] rounded-[11px]">
            <h4 className="ibm-plex-mono-semibold uppercase text-black text-[12px] leading-[13.2px] text-center tracking-[1.2px]">
              Features
            </h4>
          </div>
          <h1 className="w-full sm:w-[669px] poppins-medium text-[40px] leading-[44px] tracking-[-2px] md:text-[56px] md:leading-[61.6px] md:tracking-[-2.4px] text-center text-[#0f1728] md:w-full">
            Unlock your full potential with our cutting-edge features
          </h1>
          <p className="font-normal mt-[9px] text-[18px] leading-[24.3px] text-center tracking-[-0.54px] md:text-[20px] md:leadng-[27px] md:tracking-[-0.6px] text-[#475466] md:w-[765px]">
            From intuitive task management to advanced data analytics, our
            software equips you with the tools you need to thrive in today's
            competitive business landscape.
          </p>
        </div>

        <div className="flex-col flex w-full pb-2">
          <div className="flex flex-col md:flex-row gap-[40px] items-center w-full">
            <div className="flex flex-col p-10 md:p -16  bg-[#f5f5f5] rounded-[24px] items-center gap-[40px] justify-between h-full md:w-[588px] md:h-[588px]">
              <img src={invest} alt="" className="w-[473px]" />
              <div className="w-full flex flex-col items-start gap-2">
                <h3 className="font-medium text-[25px] leading-[30px] tracking-[-0.5px] text-[#000]">
                  Invest as low as € 100*
                </h3>
                <p className="font-normal leading-[21.6px] text-[18px] tracking-[-0.18px] text-black/50">
                  For anyone to start building their real estate portfolio, no
                  matter the size of your wallet.
                </p>
              </div>
            </div>
            <div className="flex flex-col p-10 md:px -16 bg-[#f5f5f5] rounded-[24px] items-center gap-[22px] justify-between h-full w-full md:w-[588px] md:h-[588px]">
              <img
                src={earn}
                alt=""
                className="sm:min-w-[473px] ml-[39px] mt-[18px]"
              />
              <div className="w-full flex flex-col items-start gap-2">
                <h3 className="font-medium text-[25px] leading-[30px] tracking-[-0.5px] text-[#000]">
                  Earn while you sleep
                </h3>
                <p className="font-normal leading-[21.6px] text-[18px] tracking-[-0.18px] text-black/50">
                  For anyone to start building their real estate portfolio, no
                  matter the size of your wallet.
                </p>
              </div>
            </div>
          </div>

          <div className=" mt-10 md:mt-[60px] flex flex-col md:flex-row gap-10 items-center justify-center">
            <div className="flex flex-col p-[32px]  bg-[#bdff1c] rounded-[24px] items-start gap-[40px] justify-end  relative w-full h-[450px] md:min-w-[421px]">
              <img
                src={sell}
                alt=""
                className="w-[390px] sm:w-[473px] absolute top-[40px] sm:top-[21px] left-0 right-0 mx-auto md:w-[347px] md:top-[60px]"
              />
              <div className="w-full flex flex-col items-start gap-3">
                <h3 className="font-medium text-[25px] leading-[30px] tracking-[-0.5px] text-[#000] poppins-medium">
                  Sell at your wish
                </h3>
                <p className="font-normal leading-[21.6px] text-[18px] tracking-[-0.18px] text-black/50 md:w-[315px]">
                  For anyone to start building their real estate portfolio, no
                  matter the size of your wallet.
                </p>
              </div>
            </div>

            <div className="flex w-full flex-col sm:flex-row gap-10">
              <div className="flex flex-col rounded-[24px] items-start gap-[40px] md:gap-0 justify-between w-full h-[450px] md:w-[357px]">
                <img
                  src={secure}
                  alt=""
                  className="w-full sm:w-[357px] h-[311px] object-cover rounded-[24px]"
                />
                <div className="w-full flex flex-col items-start gap-3">
                  <h3 className="font-medium text-[25px] leading-[30px] tracking-[-0.5px] text-[#000] poppins-medium">
                    Secure and reliable
                  </h3>
                  <p className="font-normal leading-[21.6px] text-[18px] tracking-[-0.18px] text-black/50">
                    For anyone to start building their real estate portfolio, no
                    matter the size of your wallet.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:gap-0 rounded-l-[24px] items-start gap-[40px] justify-between w-full h-[450px] md:w-[357px]">
                <img
                  src={integrated}
                  alt=""
                  className="w-full sm:w-[357px] h-[317px] object-cover rounded-l-[24px]"
                />
                <div className="w-full flex flex-col items-start gap-3">
                  <h3 className="font-medium text-[25px] leading-[30px] tracking-[-0.5px] text-[#000] poppins-medium">
                    100% integrated
                  </h3>
                  <p className="font-normal leading-[21.6px] text-[18px] tracking-[-0.18px] text-black/50">
                    For anyone to start building their real estate portfolio, no
                    matter the size of your wallet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col items-center pt-[60px] gap-10 md:px-[4px]">
          <h2 className="poppins-medium text-[33px] leading-[36.3px] tracking-[-1px] text-[#0f1728] md:text-[46px] md:leading-[50.6px] md:tracking-[-1.5px]">
            And more is coming
          </h2>

          <div className="w-full flex flex-col md:flex-col gap-5 items-center">
            <div className="w-full flex flex-col md:flex-row gap-6 md:gap-10">
              <div className="flex flex-col md:flex-row gap-4 items-center md:items-start w-full md:w-[376px] md:py-6 md:pl-8 rounded-[24px]">
                <img src={fingerprintTwo} alt="" className="w-[96px]" />
                <div className="w-full flex flex-col items-center md:items-start gap-1 md:gap-2">
                  <h3 className="font-medium text-[24px] leading-[28.8px] tracking-[-1px] text-[#0f1728]">
                    AI-powered editor
                  </h3>
                  <p className="font-normal leading-[24.3px] text-[18px] tracking-[-0.36px] text-black/50">
                    Assign tasks, set priorities, and track progress
                    effortlessly
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4 items-center md:items-start w-full md:w-[376px] md:py-6 md:pl-8 rounded-[24px]">
                <img src={fingerprintTwo} alt="" className="w-[96px]" />
                <div className="w-full flex flex-col items-center md:items-start gap-1 md:gap-2">
                  <h3 className="font-medium text-[24px] leading-[28.8px] tracking-[-1px] text-[#0f1728]">
                    Tools integrations
                  </h3>
                  <p className="font-normal leading-[24.3px] text-[18px] tracking-[-0.36px] text-black/50">
                    Visualize trends and monitor key performances
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4 items-center md:items-start w-full md:w-[376px] md:py-6 md:pl-8 rounded-[24px]">
                <img src={fingerprintTwo} alt="" className="w-[96px]" />
                <div className="w-full flex flex-col items-center md:items-start gap-1 md:gap-2">
                  <h3 className="font-medium text-[24px] leading-[28.8px] tracking-[-1px] text-[#0f1728]">
                    Data analytics
                  </h3>
                  <p className="font-normal leading-[24.3px] text-[18px] tracking-[-0.36px] text-black/50">
                    Customize workflows, add integrations, and adapt features
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:flex flex-col md:flex-row gap-6 md:gap-10 hidden">
              <div className="flex flex-col md:flex-row gap-4 items-center md:items-start w-full md:w-[376px] md:py-6 md:pl-8 rounded-[24px]">
                <img src={fingerprintTwo} alt="" className="w-[96px]" />
                <div className="w-full flex flex-col items-center md:items-start gap-1 md:gap-2">
                  <h3 className="font-medium text-[24px] leading-[28.8px] tracking-[-1px] text-[#0f1728]">
                    Intuitive Task Management
                  </h3>
                  <p className="font-normal leading-[24.3px] text-[18px] tracking-[-0.36px] text-black/50">
                    Assign tasks, set priorities, and track progress
                    effortlessly
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4 items-center md:items-start w-full md:w-[376px] md:py-6 md:pl-8 rounded-[24px]">
                <img src={fingerprintTwo} alt="" className="w-[96px]" />
                <div className="w-full flex flex-col items-center md:items-start gap-1 md:gap-2">
                  <h3 className="font-medium text-[24px] leading-[28.8px] tracking-[-1px] text-[#0f1728]">
                    Advanced Data Analytics
                  </h3>
                  <p className="font-normal leading-[24.3px] text-[18px] tracking-[-0.36px] text-black/50">
                    Visualize trends and monitor key performances
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4 items-center md:items-start w-full md:w-[376px] md:py-6 md:pl-8 rounded-[24px]">
                <img src={fingerprintTwo} alt="" className="w-[96px]" />
                <div className="w-full flex flex-col items-center md:items-start gap-1 md:gap-2">
                  <h3 className="font-medium text-[24px] leading-[28.8px] tracking-[-1px] text-[#0f1728]">
                    Scalability and Customization
                  </h3>
                  <p className="font-normal leading-[24.3px] text-[18px] tracking-[-0.36px] text-black/50">
                    Customize workflows, add integrations, and adapt features
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
