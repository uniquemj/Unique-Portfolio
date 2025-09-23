import Cursive from '@/components/Cursive'

const Header = () => {
  return (
    <div className='border-white h-full flex flex-col justify-center items-center'>
        <div className='text-center'>
            <p className='text-white text-20 '>Hi, I'm Unique Maharjan <Cursive text = "a Software Engineer" className='inline'/> building <Cursive text = 'Purposeful' className='inline'/></p>
            <div className='relative  w-space-825 h-space-203'>
                <p className='absolute text-156 text-white font-normal -top-space-62'>Experiences.</p>
            </div>
        </div>
    </div>
  )
}

export default Header