import { motion, useScroll, useTransform } from "framer-motion";
import { RefObject } from "react";
// import { useCallback, useLayoutEffect, useRef, useState } from "react";

interface TestimonialCarouselDesktopProps {
  targetRef: RefObject<HTMLElement>;
}

const TestimonialCarouselDesktop = (
  targetRef: TestimonialCarouselDesktopProps
) => {
  const { scrollYProgress } = useScroll({
    target: targetRef.targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["-40%", "1%"]);

  return (
    <div className="flex flex-col items-start pl-[68px] w-full overflow-hidden">
      <motion.div style={{ x }} className="flex gap-10">
        <div className="flex flex-row gap-[40px] items-center  justify-center bg-white p-[40px] rounded-[16px] w-[1000px] relative ">
          <img
            src="https://framerusercontent.com/images/jCl7IxnOEN5iV2G3osyfKLdVdoU.jpg?scale-down-to=512"
            alt=""
            className="rounded-[16px] w-[496px] h-[360px] object-cover"
          />

          <img
            src="https://framerusercontent.com/images/WnkIoa1XyN6AiA7NvBYZZ7JIRC4.png"
            alt=""
            className="absolute top-[20px] w-[49px] left-[508px] rotate-[-20deg]"
          />

          <div className="flex flex-col items-start justify-between w-full gap-6">
            <h4 className="text-[32px] leading-[38.4px] tracking-[-1px] text-[#050505] w-full poppins-medium">
              "We struggled to find the right talent globally, but with their
              automated candidate ranking, we quickly identified top-notch
              candidates who perfectly fit our requirements."
            </h4>

            <div className="flex flex-col gap-1">
              <h5 className="text-[18px] leading-[28px] text-[#0f1728] font-semibold">
                Sarah Johnson
              </h5>
              <p className="leading-[24px] text-[#475466]">
                Small Business Owner, Sarah's Boutique
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-[40px] items-center  justify-center bg-[#dffab7] p-[40px] py-0 rounded-[16px] w-[1000px] relative max-h-[440px]">
          <img
            src="https://framerusercontent.com/images/GE1vHAv9NlgFtmyw1WPO1Fsrw28.jpg?scale-down-to=512"
            alt=""
            className="rounded-[16px] w-[496px] h-[360px] object-cover"
          />

          <img
            src="https://framerusercontent.com/images/WnkIoa1XyN6AiA7NvBYZZ7JIRC4.png"
            alt=""
            className="absolute top-[20px] w-[49px] left-[508px] rotate-[-20deg]"
          />

          <div className="flex flex-col items-start justify-between w-full gap-6">
            <h4 className="text-[32px] leading-[38.4px] tracking-[-1px] text-[#050505] w-full poppins-medium">
              "As a fast-growing startup, we needed an efficient way to find
              skilled professionals from various regions. This AI tool exceeded
              our expectations."
            </h4>

            <div className="flex flex-col gap-1">
              <h5 className="text-[18px] leading-[28px] text-[#0f1728] font-semibold">
                Luke Skywalker
              </h5>
              <p className="leading-[24px] text-[#475466]">
                Digital Manager @ ABC Inc.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TestimonialCarouselDesktop;
