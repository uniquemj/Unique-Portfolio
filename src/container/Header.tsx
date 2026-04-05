import { motion } from "motion/react";
import Cursive from "@/components/Cursive";
import header_img from "@/assets/images/header_img.svg";
import { MapPin } from "lucide-react";

const Header = () => {
  return (
    <motion.header
      initial={{
        opacity: 0,
        y:-200
      }}
      animate={{
        opacity: 1,
        y:0
      }}
      transition={{
        delay: 0.5,
        duration: 0.5,
        ease: "easeIn",
      }}
    >
      <div className="relative z-20">
        <p className="text-white max-sm:text-16 text-20 text-center">
          Hi, I'm Unique Maharjan{" "}
          <Cursive text="a Software Engineer" className="inline" /> building{" "}
          <Cursive text="Purposeful" className="inline" />
        </p>
        <p className="absolute  w-full flex flex-1 justify-center items-center top-5 max-sm:translate-y-6 max-sm:text-42  max-md:text-70 md:top-1 md:translate-y-1 md:text-90 text-white font-normal">
          Experiences.
        </p>
      </div>
      <div className="relative max-w-space-793 max-h-space-742  top-space-32">
        <div className="flex-1">
          <img src={header_img} alt="windows" />
        </div>
        <div className="absolute top-0 w-full h-full z-10 flex items-center">
          <div className="px-space-37 md:px-space-75 flex flex-row flex-1 h-space-203 w-full">
            <div className="relative flex flex-1 justify-center items-center mbM:mx-space-45 mbL:mx-space-75 sm:mx-space-100 h-full text-white">
                <p className="absolute left-0 max-mbM:left-1/10 translate-x-1/4 w-1/4 sm:w-1/4 text-16 max-mbL:text-8 max-sm:text-12 md:text-18 text-center font-normal">
                  <Cursive text="1+ year experience" className="inline" /> as a
                  full stack developer
                </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full flex flex-col justify-center items-center">
        <p className="absolute top-2 sm:-translate-y-5 text-white text-center text-16 sm:text-24 font-normal flex flex-row items-center gap-space-4">
          <Cursive text="Based" className="inline" /> in Lalitpur, Nepal
          <span>
            <MapPin />
          </span>
        </p>
      </div>
    </motion.header>
  );
};

export default Header;
