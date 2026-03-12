import Cursive from "@/components/Cursive";
import header_img from "@/assets/images/header_img.svg";
import { MapPin } from "lucide-react";

const Header = () => {
  return (
    <div className="border-white h-full flex flex-col justify-center items-center">
      <div className="text-center z-20">
        <p className="text-white text-20 ">
          Hi, I'm Unique Maharjan{" "}
          <Cursive text="a Software Engineer" className="inline" /> building{" "}
          <Cursive text="Purposeful" className="inline" />
        </p>
        <div className="relative text-center">
          <p className="absolute -top-space-20 text-90 text-white font-normal">
            Experiences.
          </p>
        </div>
      </div>
      <div className="relative max-w-space-793 max-h-space-742  top-space-32">
        <div className="relative w-auto h-auto z-10">
          <img src={header_img} alt="windows" />
        </div>
        <div className="absolute top-0 w-full h-full z-10 flex items-center">
            <div className=" px-space-75 flex flex-row h-space-203 w-full">
              <div className="flex justify-center items-center mx-space-100 h-full w-space-156 text-white">
                <div className="w-3/5 max-w-3/5 ">
                  <p className="text-18 text-center font-normal"><Cursive text="1+ year experience" className="inline" /> as a full stack developer</p>
                </div>
              </div>
            </div>
        </div>
      </div>
      <div className = "w-full p-space-4 flex flex-col justify-center items-center">
  
          <p className="text-white text-center text-24 font-normal flex flex-row items-center gap-space-4"><Cursive text = "Based" className="inline"/> in Lalitpur, Nepal<span><MapPin/></span></p>
      </div>
    </div>
  );
};

export default Header;
