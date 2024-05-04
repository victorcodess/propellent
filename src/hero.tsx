import { motion } from "framer-motion";
import arrow from "./assets/arrow.svg";
import stars from "./assets/stars.svg";
import StartupCarousel from "./startup-carousel";
import Form from "./form";

const Hero = () => {
  return (
    <section className="mt-[35px] pt-[99px] md:pt-[101px] flex items-center flex-col justify-center gap-40 w-full px-5 md:px-16 xl:pl-[152px] xl:pr-[120px] pb-[264px] bg-[#f8f8f8] relative overflow-hidden">
      <div className="flex items-center flex-col xl:flex-row justify-center gap-10 md:gap-20 w-full relative">
        <div className="w-full flex flex-col items-center justify-center gap-6 md:items-start relative">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                damping: 30,
                stiffness: 180,
                mass: 1,
                delay: 0.2,
              },
            }}
            viewport={{
              amount: "some",
              once: true,
            }}
            className="pr-0 flex items-center justify-start gap-[7px] cursor-pointer pl-[104px] rounded-full py-[13px] relative group w-[352px] bg -[#eaffb9]/50"
          >
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
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                ease: [0.44, 0, 0, 1],
              },
            }}
            viewport={{
              amount: "some",
              once: true,
            }}
            className="text-[45px] leading-[47.25px] md:text-[72px] md:leading-[75.6px] tracking-[-2px] md:tracking-[-3px] poppins-medium text-center md:text-left md:w-[610px] z-20"
          >
            Ease your mind on business operations.
          </motion.h1>

          <motion.img
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                damping: 100,
                stiffness: 300,
                mass: 1,
                delay: 0.3,
              },
            }}
            viewport={{
              amount: "some",
              once: true,
            }}
            src="https://framerusercontent.com/images/aTjtJJGxuy3avHrtmudaw8F06g.png?scale-down-to=512"
            alt=""
            className="z-10 absolute w-[186px] top-[84px] left-[-16px] hidden md:block"
          />

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                delay: 0.2,
                ease: [0.44, 0, 0, 1],
              },
            }}
            viewport={{
              amount: "some",
              once: true,
            }}
            className="be-vietnam-pro-medium text-[#475466] text-[18px] leading-[24.3px] tracking-[-0.54px] md:text-[20px] md:leading-[27px] md:tracking-[-0.6px] text-center md:text-left w-full md:w-[480px]"
          >
            From intuitive task management to advanced data analytics, our
            software equips you with the tools you need to thrive in today's
            competitive business landscape.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                delay: 0.4,
                ease: [0.44, 0, 0, 1],
              },
            }}
            viewport={{
              amount: "some",
              once: true,
            }}
            className="flex flex-col md:flex-row gap-4 md:gap-1.5 items-center"
          >
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
          </motion.div>
        </div>

        <Form />
      </div>

      <StartupCarousel />

      <motion.img
        initial={{ opacity: 0, y: 20 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            damping: 100,
            stiffness: 300,
            mass: 1,
            delay: 0.5,
          },
        }}
        viewport={{
          amount: "some",
          once: true,
        }}
        src="https://framerusercontent.com/images/uTKvR6qfTzsBtXOvlLGL21I53YY.png?scale-down-to=512"
        alt=""
        className="absolute hidden md:block w-[271px] top-[616px] right-[560px] xl:top-[106px] xl:right-[455px]"
      />
      <motion.img
        initial={{ opacity: 0, y: 30 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            damping: 100,
            stiffness: 320,
            mass: 1,
            delay: 0.7,
          },
        }}
        viewport={{
          amount: "some",
          once: true,
        }}
        src="https://framerusercontent.com/images/AM9PX8l3tcHV41oVhZ9gWUkBSE.png?scale-down-to=512"
        alt=""
        className="absolute w-[301px] top-[776px] right-[-35px] md:top-[940px] md:right-[-20px] xl:top-[446px] xl:left-[1175px] !rotate-[-30deg]"
      />
    </section>
  );
};

export default Hero;
