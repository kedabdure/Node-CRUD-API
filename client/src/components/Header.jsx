import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col items-center mt-20 px-4 text-center text-gray-800'>
      <img src={assets.header_img} alt="header image"
        className='w-36 h-36 rounded-full mb-6 ' />
      <h1 className="">Hey Developer
        <img src={assets.hand_wave} alt="hand wave" className='w-8 aspect-square' />
      </h1>
      <h2 className='text-3xl sm:text-5xl font-semibold mb-4'>Welcome to out app</h2>
      <p className='mb-8 mx-w-md'>Let&apos;s start with a quick product tour and we will have you up and running in no time!</p>
      <button className='border border-gray-500 rounded-full px-8 py-2.5 hover:bg-gray-100 transition-all'>Get Started</button>
    </div>
  )
}

export default Header