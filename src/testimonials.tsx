import { motion } from "framer-motion";
import TestimonialCarouselDesktop from "./testimonial-carousel-desktop";
import TestimonialCarouselMobile from "./testimonial-carousel-mobile";
import { Link } from "react-router-dom";
import { useRef } from "react";

const Testimonials = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  return (
    <section className="bg-[#f5f5f5] flex flex-col items-center w-full py-[60px] md:pb-[80px] px-[30px] xl:px-[56px] gap-[60px] md:gap-[80px] relative">
      <div className="w-full flex flex-col gap-[45px] items-center pb-[60px] md:pb-[120px]">
        <div className="w-full flex flex-col items-center gap-[15px] md:w-[850px]">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                damping: 40,
                stiffness: 150,
                mass: 1,
                delay: 0.2,
              },
            }}
            viewport={{
              amount: "some",
              once: true,
            }}
            className="flex items-center py-2 px-3 bg-[#bdff1c] rounded-[11px]"
          >
            <h4 className="ibm-plex-mono-semibold uppercase text-black text-[12px] leading-[13.2px] text-center tracking-[1.2px]">
              Metrics
            </h4>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                delay: 0.3,
                ease: [0.44, 0, 0, 1],
              },
            }}
            viewport={{
              amount: "some",
              once: true,
            }}
            className="w-full sm:w-[669px] poppins-medium text-[40px] leading-[48px] tracking-[-1.2px] md:text-[44px] md:leading-[52.8px] text-center text-[#0f1728] md:w-full"
          >
            You can bet on it
          </motion.h1>
        </div>

        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-10 md:gap-8">
          <div className="flex flex-col gap-3 items-center w-full md:w-1/3 xl:w-[445px] md:border-r border-[#B9BED1] md:pr-2.5 xl:pr-0">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  damping: 40,
                  stiffness: 160,
                  mass: 1,
                  delay: 0.4,
                },
              }}
              viewport={{
                amount: "some",
                once: true,
              }}
              className="text-[#854dff] font-medium text-[48px] leading-[48px] md:text-[62px] xl:text-[80px] md:font-semi bold md:leading-[80px] tracking-[-3px]"
            >
              75%
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  damping: 40,
                  stiffness: 160,
                  mass: 1,
                  delay: 0.5,
                },
              }}
              viewport={{
                amount: "some",
                once: true,
              }}
              className="text-[18px] leading-[24.3px] md:text-[20px] text-center md:leading-[27px] tracking-[-0.5px]"
            >
              Candidate match rate
            </motion.p>
          </div>
          <div className="flex flex-col gap-3 items-center w-full md:w-1/3 xl:w-[445px] md:border-r border-[#B9BED1] md:pr-2.5 xl:pr-0">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  damping: 40,
                  stiffness: 160,
                  mass: 1,
                  delay: 0.6,
                },
              }}
              viewport={{
                amount: "some",
                once: true,
              }}
              className="text-[#854dff] font-medium text-[48px] leading-[48px] md:text-[62px] xl:text-[80px] md:font-semi bold md:leading-[80px] tracking-[-3px]"
            >
              4,000+
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  damping: 40,
                  stiffness: 160,
                  mass: 1,
                  delay: 0.7,
                },
              }}
              viewport={{
                amount: "some",
                once: true,
              }}
              className="text-[18px] leading-[24.3px] md:text-[20px] text-center md:leading-[27px] tracking-[-0.5px]"
            >
              Successful placement
            </motion.p>
          </div>
          <div className="flex flex-col gap-3 items-center w-full md:w-1/3 xl:w-[445px] md:pr-2.5 xl:pr-0">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  damping: 40,
                  stiffness: 160,
                  mass: 1,
                  delay: 0.8,
                },
              }}
              viewport={{
                amount: "some",
                once: true,
              }}
              className="text-[#854dff] font-medium text-[48px] leading-[48px] md:text-[62px] xl:text-[80px] md:font-semi bold md:leading-[80px] tracking-[-3px]"
            >
              50+
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  damping: 40,
                  stiffness: 160,
                  mass: 1,
                  delay: 0.9,
                },
              }}
              viewport={{
                amount: "some",
                once: true,
              }}
              className="text-[18px] leading-[24.3px] md:text-[20px] text-center md:leading-[27px] tracking-[-0.5px]"
            >
              Operating countries
            </motion.p>
          </div>
        </div>
      </div>

      <div
        ref={targetRef}
        className="w-full flex flex-col items-center gap-[80px]"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              delay: 0.3,
              ease: [0.44, 0, 0, 1],
            },
          }}
          viewport={{
            amount: "some",
            once: true,
          }}
          className="text-[40px] leading-[42px] tracking-[-1.6px] md:text-[56px] md:leading-[56px] md:tracking-[-2px] flex flex-col items-center w-full poppins-medium relative"
        >
          <h3 className="text-[#a3a6ae]">Real stories.</h3>
          <h3 className="text-[#0f1728] mt- [-8px] md:mt-[-0px] text-center md:text-left">
            Don’t take our word for it.
          </h3>

          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 0.8,
                delay: 0.8,
                ease: [0.44, 0, 0, 1],
              },
            }}
            viewport={{
              amount: "some",
              once: true,
            }}
            src="https://framerusercontent.com/images/VL43VhHmWPuTeXXKbTYxdaAoyU.png?scale-down-to=512"
            alt=""
            className="absolute w-[152px] hidden xl:block top-[-30.5px] right-[223px] rotate-[-43deg]"
          />
        </motion.div>
        <div className="flex md:hidden w-full items-center">
          <TestimonialCarouselMobile />
        </div>
        <div className="hidden md:flex w-full items-center">
          <TestimonialCarouselDesktop />
        </div>
      </div>

      <Link
        to="https://www.victorwilliams.me/"
        className="w-full flex items-center justify-center"
      >
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              delay: 0.5,
              ease: [0.44, 0, 0, 1],
            },
          }}
          viewport={{
            amount: "some",
            once: true,
          }}
          className="text-base mt-[-20px] leading-[21.6px] tracking-[-0.48px] be-vietnam-pro-medium text-[#854dff] border border-[#854dff] bg-transparent rounded-full px-[18px] py-[14px] md:px-5 flex items-center justify-center w-full md:max-w-max"
        >
          Read all stories
        </motion.button>
      </Link>

      <div
        id="faqs"
        className="absolute w-4 h-4 bg-black bottom-20 opacity-0"
      />
    </section>
  );
};

export default Testimonials;
