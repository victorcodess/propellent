import { Player } from "@lottiefiles/react-lottie-player";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Form = () => {
  const playerRef = useRef<Player>(null);

  const [submitted, setSubmitted] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      playerRef?.current?.pause();
    }, 2000);

    return () => clearTimeout(timer);
  }, [submitted]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: {
          duration: 0.5,
          delay: 0.3,
          ease: [0.44, 0, 0.22, 0.99],
        },
      }}
      viewport={{
        amount: "some",
        once: true,
      }}
      className="bg-[#fdffff] w-full px-[32px] py-[40px] flex flex-col gap-6 shadow-[5px_25px_25px_0px_rgba(0,0,0,0.1)] rounded-[24px] items-center xl:max-w-min z-10"
    >
      <div className="flex flex-col gap-3 w-full items-center justify-center xl:w-[392px]">
        <h3 className="be-vietnam-pro-medium text-[26px] leading-[31.2px] tracking-[-1px] text-center text-[#0f1728]">
          Secure your spot now
        </h3>
        <p className="be-vietnam-pro-regular text-[16px] leading-[21.6px] tracking-[-0.32px] text-center text-[#475466]">
          Be the first to know when the product launches and other not-to-miss
          updates.
        </p>
      </div>

      {submitted ? (
        <div className="overflow-hidden w-[300px] h-[187px] flex items-center justify-center">
          <Player
            src="https://lottie.host/cdf2112a-f1d1-4c60-93f5-bb7a15cf867a/mA5Gs35pNH.json"
            className="w-[340px] pt-[120px]"
            autoplay
            ref={playerRef}
          />
        </div>
      ) : (
        <form
          action=""
          className="mx-auto w-full flex flex-col gap-[15px] xl:w-[392px]"
        >
          <input
            type="text"
            className="bg-[#ebebeb] text-[#757575] leading-[22.4px] text-[16px] block w-full p-[15px] rounded-lg focus:outline-none placeholder:text-[#757575]"
            placeholder="Your name"
          />
          <input
            type="text"
            className="bg-[#ebebeb] text-[#757575] leading-[22.4px] text-[16px] block w-full p-[15px] rounded-lg focus:outline-none placeholder:text-[#757575]"
            placeholder="Your email"
          />

          <button
            type="submit"
            // disabled={isButtonDisabled}
            className="text-base leading-[22.4px] text-center  font-medium text-white bg-[#854dfc] rounded-lg p-[15px] hover:bg-[#9D71FD] w-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-orange-500"
            onClick={() => setSubmitted(true)}
          >
            Join the waitlist
          </button>
        </form>
      )}

      <p className="be-vietnam-pro-regular text-[14px] leading-[16.8px] tracking-[-0.28px] text-center text-[#9ca3bd] md:w-[392px]">
        By subscribing, you agree with our
        <span className="text-[#343b55] underline ml-1 cursor-pointer">
          Terms of License
        </span>
      </p>
    </motion.div>
  );
};

export default Form;
