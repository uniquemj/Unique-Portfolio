import Cursive from "@/components/Cursive";
import Arrow from "@/components/SVG/Arrow";
import { Button } from "@/components/ui/button";
import React from "react";

const Navbar = () => {
  return (
    <div className="relative flex flex-row items-center justify-between w-full px-space-24 py-space-10 bg-white/10 backdrop-blur-4 rounded-4">
      <div>
        <Cursive text="U.mj" className="font-normal text-32 text-white" />
      </div>
      <div className="flex flex-row gap-space-62 text-white font-normal">
        <h1 className="hover-zigzag-underline w-space-45">Home</h1>
        <h1 className="hover-zigzag-underline">Projects</h1>
        <h1 className="hover-zigzag-underline">About</h1>
      </div>
      <div>
        <Button className="rounded-5 py-space-4 px-space-12 bg-primary-800 flex item-center gap-space-10 w-space-113 h-space-27 hover:cursor-pointer hover:bg-primary-800">
            <span className="text-white font-normal text-16">Contact</span>
            <Arrow className="text-white w-space-23 h-space-3" width="23" height="10"/>
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
