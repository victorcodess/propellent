import { motion } from "framer-motion";
import fingerprint from "./assets/fingerprint.svg";

const Benefits = () => {
  return (
    <section
      id="benefits"
      className="pt-[80px] lg:pt-[120px]  bg-white w-full px-[24px] md:px-[32px] xl:px-[178px] flex flex-col items-center gap-[60px]"
    >
      <div className="flex flex-col items-center gap-5 w-full xl:w-[800px]">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
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
          className="w-full sm:w-[669px] poppins-medium text-[50px] leading-[60px] tracking-[-2px] md:text-[56px] md:leading-[67.2px] text-center text-[#0f1728]"
        >
          Good-bye to traditional startup hassle.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
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
          className="font-normal text-[18px] leading-[24.3px] text-center tracking-[-0.54px] md:text-[20px] md:leadng-[27px] md:tracking-[-0.6px] text-[#475466]"
        >
          Say farewell to the complexities of the past and unlock a smoother
          path to success. Welcome to a new era of simplicity and efficiency.
        </motion.p>
      </div>

      <div className="flex flex-col md:flex-row gap-[24px] w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              damping: 40,
              stiffness: 160,
              mass: 1,
              delay: 0.2,
            },
          }}
          viewport={{
            amount: "some",
            once: true,
          }}
          className="flex flex-col p-8 bg-[#bdff1c] rounded-[24px] items-start justify-start h-full gap-16 md:gap-10 sm:h-[274px] md:h-[435px] lg:h-[348px] md:w-1/3"
        >
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
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
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
          className="flex flex-col p-8 bg-[#bdff1c] rounded-[24px] items-start justify-start h-full gap-16 md:gap-10 sm:h-[274px] md:h-[435px] lg:h-[348px] md:w-1/3"
        >
          <img src={fingerprint} alt="" className="w-16 h-16" />
          <div className="w-full flex flex-col items-start gap-2">
            <h3 className="font-medium text-[26px] leading-[31.2px] tracking-[-1px] text-[#0f1728]">
              Make informed business decision
            </h3>
            <p className="font-normal leading-[21.6px] text-base tracking-[-0.32px] text-black/50">
              Our software provides comprehensive analytics, empowering you to
              identify trends, track performance, and adjust your strategies for
              success.{" "}
            </p>
          </div>
        </motion.div>
        <motion.div
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
          className="flex flex-col p-8 bg-[#bdff1c] rounded-[24px] items-start justify-start h-full gap-16 md:gap-10 sm:h-[274px] md:h-[435px] lg:h-[348px] md:w-1/3"
        >
          <img src={fingerprint} alt="" className="w-16 h-16" />
          <div className="w-full flex flex-col items-start gap-2">
            <h3 className="font-medium text-[26px] leading-[31.2px] tracking-[-1px] text-[#0f1728]">
              Scale your startup with confidence
            </h3>
            <p className="font-normal leading-[21.6px] text-base tracking-[-0.32px] text-black/50">
              Our software is designed to grow alongside your business, adapting
              to your evolving needs. Scale your startup with confidence.{" "}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
