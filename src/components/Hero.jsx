import React from 'react'
import { RiCheckboxBlankCircleFill, RiPlayFill } from "react-icons/ri";


const Hero = () => {
  return <section className='h-[90vh] grid grid-cols-1 md:grid-cols-8'>
    {/* Information */}
    <div className=' md:col-span-5 flex items-center justify-center p-16'>
        <div className='flex flex-col gap-8'>
            <h1 className='text-7xl font-bold leading-[7rem]'>
                We Design Impactful Digital{" "} 
                <span className='text-primary py-0 px-6 border-8 border-primary relative'>
                    Products
                    <RiCheckboxBlankCircleFill className='text-white text-base absolute -left-5 -top-5 text-white p-2 bg-primary rounded-full box-content' />
                    <RiCheckboxBlankCircleFill className='text-white text-base absolute -right-5 -top-5 text-white p-2 bg-primary rounded-full box-content' />
                    <RiCheckboxBlankCircleFill className='text-white text-base absolute -left-5 -bottom-5 text-white p-2 bg-primary rounded-full box-content' />
                    <RiCheckboxBlankCircleFill className='text-white text-base absolute -right-5 -bottom-5 text-white p-2 bg-primary rounded-full box-content' />
                </span>
            </h1>
            <p className='text-gray-500 text-xl leading-[2.5rem]'>
                Help find solutions with intitutive and in accordance with client business goals, we provide a high-quality services.
            </p>
            <div className='flex items-center gap-4'>
                <button className='bg-primary text-white py-2 px-8 rounded-xl text-xl'>Contact Us</button>
                <button className='flex items-center justify-start text-left gap-4 py-2 px-8 rounded-xl text-xl'>
                    <RiPlayFill className='bg-secondary text-primary p-4 rounded-full box-content'/> Watch our <br /> introduction video
                </button>
            </div>
        </div>
    </div>
    {/* Image */}
    <div className='md:col-span-3 flex items-center justify-center relative'>
        <div>
            <img src="hero.png" className='w-[450] h-[450] object-cover -mt-28' />
            <div className='bg-green-300'>
                <div className=' bg-red-100 flex justify-center max-w-[250px]'>
                    <img src="https://i.pinimg.com/originals/19/87/90/198790eb7e08830027c1ae1686496c72.png" 
                    className='w-10 h-10 object-contain rounded-full' />
                </div>
                
            </div>
        </div>
        <div className='absolute top-1/2 -translate-y-1/2 
            left-1/2 -translate-x-1/2 w-[380px] h-[380px] 
           bg-white border-[10px] border-primary rounded-full -z-10
            '>
            
        </div>
    </div>
</section>;
}

export default Hero