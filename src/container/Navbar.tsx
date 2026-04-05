import {motion} from 'motion/react';
import Cursive from "@/components/Cursive";
import Arrow from "@/components/SVG/Arrow";
import { Button } from "@/components/ui/button";
import { NAVBAR_OPTION } from "@/constants/navbar";
import {Menu} from 'lucide-react';


interface NavbarOption {
  id: number;
  title: string;
  url: string;
}

const Navbar = () => {
  return (
    <motion.nav 
    initial={{
      opacity: 0,
      y: -200,
    }}
    animate = {{
      opacity: 1,
      y: 0
    }}
    transition={{
      delay: 0.5,
      duration: 0.5,
      ease: 'easeIn'
    }}
    >
      <div>
        <Cursive text="U.mj" className="font-normal text-32 text-white" />
      </div>
      <div>
        <ul>
          {NAVBAR_OPTION.map((item: NavbarOption) => (
            <li className="hover-zigzag-underline">{item.title}</li>
          ))}
        </ul>
      </div>
      <motion.div
        whileHover = {{scale: 1.1}}
        whileTap={{scale: 0.96}}
        className='max-sm:hidden'
      >
        <Button className="rounded-5 py-space-4 px-space-12 bg-primary-800 flex item-center gap-space-10 w-space-113 h-space-27 hover:cursor-pointer hover:bg-primary-800">
          <span className="text-white font-normal text-16">Contact</span>
          <Arrow
            className="text-white w-space-23 h-space-3"
            width="23"
            height="10"
          />
        </Button>
      </motion.div>

      <div className="sm:hidden">
            <Menu className='text-white'/>
      </div>
    </motion.nav>
  );
};

export default Navbar;
