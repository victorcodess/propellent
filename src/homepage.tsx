import Benefits from "./benefits";
import Faqs from "./faqs";
import Hero from "./hero";
import Product from "./product";
import Testimonials from "./testimonials";

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
      <Hero />
      <Benefits />
      <Product />
      <Testimonials />
      <Faqs />
    </div>
  );
};

export default Homepage;
