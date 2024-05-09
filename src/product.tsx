import { motion } from "framer-motion";
import invest from "./assets/invest.svg";
import earn from "./assets/earn.svg";
import sell from "./assets/sell.svg";
import secure from "./assets/secure.png";
import integrated from "./assets/integrated.png";
import fingerprintTwo from "./assets/fingerprint-two.svg";

const Product = () => {
  return (
    <section
      id="product"
      className="flex flex-col items-center w-full pt-[120px] md:pt-[160px] pb-[190px] md:pb-[150px] px-[24px] md:px-[32px] xl:px-[152px] gap-[80px] relative"
    >
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
            Features
          </h4>
        </motion.div>
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
          className="w-full sm:w-[669px] poppins-medium text-[40px] leading-[44px] tracking-[-2px] md:text-[56px] md:leading-[61.6px] md:tracking-[-2.4px] text-center text-[#0f1728] md:w-full"
        >
          Unlock your full potential with our cutting-edge features
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
          className="font-normal mt-[9px] text-[18px] leading-[24.3px] text-center tracking-[-0.54px] md:text-[20px] md:leadng-[27px] md:tracking-[-0.6px] text-[#475466] md:w-[765px]"
        >
          From intuitive task management to advanced data analytics, our
          software equips you with the tools you need to thrive in today's
          competitive business landscape.
        </motion.p>
      </div>

      <div className="flex-col flex w-full pb-2">
        <div className="flex flex-col xl:flex-row gap-[40px] items-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                damping: 30,
                stiffness: 400,
                mass: 1,
                delay: 0,
              },
            }}
            viewport={{
              amount: 0.5,
              once: true,
            }}
            className="flex flex-col p-10 md:p -16  bg-[#f5f5f5] rounded-[24px] items-center gap-[40px] justify-between h-full w-full xl:w-[588px] xl:h-[588px] 2xl:w-1/2"
          >
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
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                damping: 30,
                stiffness: 400,
                mass: 1,
                delay: 0.1,
              },
            }}
            viewport={{
              amount: 0.5,
              once: true,
            }}
            className="flex flex-col p-10 md:px -16 bg-[#f5f5f5] rounded-[24px] items-center gap-[22px] justify-between h-full w-full xl:w-[588px] md:h-[588px] 2xl:w-1/2"
          >
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
          </motion.div>
        </div>

        <div className="mt-10 md:mt-[60px] flex flex-col xl:flex-row gap-10 items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                damping: 30,
                stiffness: 400,
                mass: 1,
                delay: 0.2,
              },
            }}
            viewport={{
              amount: "some",
              once: true,
            }}
            className="flex flex-col p-[32px]  bg-[#bdff1c] rounded-[24px] items-start gap-[40px] justify-end overflow-hidden relative w-full h-[450px] md:min-w-[421px]"
          >
            <img
              src={sell}
              alt=""
              className="w-[347px] sm:w-[473px] absolute top-[40px] sm:top-[21px] left-8 sm:left-0 right-0 mx-auto md:w-[347px] md:top-[60px]"
            />
            <div className="w-full flex flex-col items-start gap-3">
              <h3 className="font-medium text-[25px] leading-[30px] tracking-[-0.5px] text-[#000] poppins-medium">
                Sell at your wish
              </h3>
              <p className="font-normal leading-[21.6px] text-[18px] tracking-[-0.18px] text-black/50 xl:w-[315px]">
                For anyone to start building their real estate portfolio, no
                matter the size of your wallet.
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
                damping: 30,
                stiffness: 400,
                mass: 1,
                delay: 0.3,
              },
            }}
            viewport={{
              amount: "some",
              once: true,
            }}
            className="flex w-full flex-col sm:flex-row gap-10"
          >
            <div className="flex flex-col rounded-[24px] items-start gap-[40px] md:gap-0 justify-between w-full h-[450px] md:w-1/2 xl:w-[357px]">
              <img
                src={secure}
                alt=""
                className="w-full sm:w-[357px] h-[311px] object-cover rounded-[24px] md:w-full"
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

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  damping: 30,
                  stiffness: 400,
                  mass: 1,
                  delay: 0.4,
                },
              }}
              viewport={{
                amount: "some",
                once: true,
              }}
              className="flex flex-col md:gap-0 rounded-l-[24px] items-start gap-[40px] justify-between w-full h-[450px] md:w-1/2 xl:w-[357px]"
            >
              <img
                src={integrated}
                alt=""
                className="w-full sm:w-[357px] h-[317px] object-cover rounded-l-[24px] md:w-full"
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
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center pt-[60px] gap-10 md:px-[4px]">
        <motion.h2
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
          className="poppins-medium text-[33px] leading-[36.3px] tracking-[-1px] text-[#0f1728] md:text-[46px] md:leading-[50.6px] md:tracking-[-1.5px]"
        >
          And more is coming
        </motion.h2>

        <div className="w-full flex flex-col md:flex-col gap-5 items-center">
          <div className="w-full flex flex-col md:flex-row gap-6 md:gap-10 xl:max-w-min">
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
              className="flex flex-col xl:flex-row gap-4 items-center md:items-start w-full md:w-[376px] md:py-6 md:pl-8 rounded-[24px]"
            >
              <img src={fingerprintTwo} alt="" className="w-[96px]" />
              <div className="w-full flex flex-col items-center md:items-start gap-1 md:gap-2">
                <h3 className="font-medium text-[24px] leading-[28.8px] tracking-[-1px] text-[#0f1728]">
                  AI-powered editor
                </h3>
                <p className="font-normal leading-[24.3px] text-[18px] tracking-[-0.36px] text-black/50 text-center md:text-left">
                  Assign tasks, set priorities, and track progress effortlessly
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
                  delay: 0.3,
                },
              }}
              viewport={{
                amount: "some",
                once: true,
              }}
              className="flex flex-col xl:flex-row gap-4 items-center md:items-start w-full md:w-[376px] md:py-6 md:pl-8 rounded-[24px]"
            >
              <img src={fingerprintTwo} alt="" className="w-[96px]" />
              <div className="w-full flex flex-col items-center md:items-start gap-1 md:gap-2">
                <h3 className="font-medium text-[24px] leading-[28.8px] tracking-[-1px] text-[#0f1728]">
                  Tools integrations
                </h3>
                <p className="font-normal leading-[24.3px] text-[18px] tracking-[-0.36px] text-black/50 text-center md:text-left">
                  Visualize trends and monitor key performances
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
                  stiffness: 140,
                  mass: 1,
                  delay: 0.2,
                },
              }}
              viewport={{
                amount: "some",
                once: true,
              }}
              className="flex flex-col xl:flex-row gap-4 items-center md:items-start w-full md:w-[376px] md:py-6 md:pl-8 rounded-[24px]"
            >
              <img src={fingerprintTwo} alt="" className="w-[96px]" />
              <div className="w-full flex flex-col items-center md:items-start gap-1 md:gap-2">
                <h3 className="font-medium text-[24px] leading-[28.8px] tracking-[-1px] text-[#0f1728]">
                  Data analytics
                </h3>
                <p className="font-normal leading-[24.3px] text-[18px] tracking-[-0.36px] text-black/50 text-center md:text-left">
                  Customize workflows, add integrations, and adapt features
                </p>
              </div>
            </motion.div>
          </div>

          <div className="w-full md:flex flex-col md:flex-row gap-6 md:gap-10 hidden xl:max-w-min">
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
              className="flex flex-col xl:flex-row gap-4 items-center md:items-start w-full md:w-[376px] md:py-6 md:pl-8 rounded-[24px]"
            >
              <img src={fingerprintTwo} alt="" className="w-[96px]" />
              <div className="w-full flex flex-col items-center md:items-start gap-1 md:gap-2">
                <h3 className="font-medium text-[24px] leading-[28.8px] tracking-[-1px] text-[#0f1728]">
                  Intuitive Task Management
                </h3>
                <p className="font-normal leading-[24.3px] text-[18px] tracking-[-0.36px] text-black/50">
                  Assign tasks, set priorities, and track progress effortlessly
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
                  delay: 0.3,
                },
              }}
              viewport={{
                amount: "some",
                once: true,
              }}
              className="flex flex-col xl:flex-row gap-4 items-center md:items-start w-full md:w-[376px] md:py-6 md:pl-8 rounded-[24px]"
            >
              <img src={fingerprintTwo} alt="" className="w-[96px]" />
              <div className="w-full flex flex-col items-center md:items-start gap-1 md:gap-2">
                <h3 className="font-medium text-[24px] leading-[28.8px] tracking-[-1px] text-[#0f1728]">
                  Advanced Data Analytics
                </h3>
                <p className="font-normal leading-[24.3px] text-[18px] tracking-[-0.36px] text-black/50">
                  Visualize trends and monitor key performances
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
                  delay: 0.2,
                },
              }}
              viewport={{
                amount: "some",
                once: true,
              }}
              className="flex flex-col xl:flex-row gap-4 items-center md:items-start w-full md:w-[376px] md:py-6 md:pl-8 rounded-[24px]"
            >
              <img src={fingerprintTwo} alt="" className="w-[96px]" />
              <div className="w-full flex flex-col items-center md:items-start gap-1 md:gap-2">
                <h3 className="font-medium text-[24px] leading-[28.8px] tracking-[-1px] text-[#0f1728]">
                  Scalability and Customization
                </h3>
                <p className="font-normal leading-[24.3px] text-[18px] tracking-[-0.36px] text-black/50">
                  Customize workflows, add integrations, and adapt features
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div
        id="testimonials"
        className="absolute w-4 h-4 bg-black bottom-20 opacity-0"
      />
    </section>
  );
};

export default Product;
