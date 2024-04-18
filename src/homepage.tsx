import { useEffect } from "react";

const Homepage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="w-full h-[85vh] bg-slate-50 flex flex-col pt-[66px] md:pt-[80px]">
      
    </div>
  );
};

export default Homepage;
