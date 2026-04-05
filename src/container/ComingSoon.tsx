import React from 'react'
import {motion} from 'motion/react';

const ComingSoon = () => {
  return (
    <motion.section 
    initial={{
        opacity: 0,
        y: -200
    }}
    animate={{
        opacity: 1,
        y: 0
    }}
    transition={{
        delay: 0.3,
        duration: 0.5,
        ease: "easeIn"
    }}
    className='w-full border border-white bottom-0 p-space-4 flex flex-1 items-center justify-center'>
        <h1 className='text-white'>More Content coming soon . . .</h1>
    </motion.section>
  )
}

export default ComingSoon