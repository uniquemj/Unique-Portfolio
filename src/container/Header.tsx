import Cursive from "@/components/Cursive";
import windows from "@/assets/images/window.svg";
import codesnippet from "@/assets/images/codesnippet.svg";
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
          <img src={windows} alt="windows" />
        </div>
        <div className="absolute top-0 w-full h-full z-10 flex items-center">
            <div className=" px-space-75 flex flex-row justify-evenly h-space-203 w-full">
              <div className="flex justify-center items-center h-full w-space-156 text-white">
                <div className="w-3/5 max-w-3/5">
                  <p className="text-18 text-center font-normal"><Cursive text="1+ year experience" className="inline" /> as a full stack developer</p>
                </div>
              </div>
              <div className="border h-full w-space-156">
                <div className="w-full h-full">
                  <img src={codesnippet} alt="codesnippet" />
                </div>
              </div>
            </div>
        </div>
      </div>
      <div className = "w-full p-space-4 flex flex-col justify-center items-center">
  
          <p className="text-white text-center text-24 font-normal inline"><Cursive text = "Based" className="inline"/> in Lalitpur, Nepal<span><MapPin/></span></p>
      </div>
    </div>
  );
};

export default Header;
