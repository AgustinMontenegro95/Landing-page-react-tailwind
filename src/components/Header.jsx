import React, {useState} from 'react'
// icons
import { RiCheckboxBlankCircleFill, RiCloseLine, RiMenu3Fill } from "react-icons/ri";

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
  return (<header className='flex items-center justify-between xl: justify-start w-full py-4 px-8 h-[10vh] z-50'>
       <div className='xk:w-1/6 text-center -mt-4'>
            <a href='a' className='text-2xl font-bold relative p-1 bg-white'>
                Power<span className='text-primary text-5xl'>.</span> 
                <RiCheckboxBlankCircleFill className='absolute -left-3 -bottom-3 text-primary -z-10' />
            </a>
       </div>
       <nav className={`fixed bg-white w-[80%] md:w-[40%] xl:w-full h-full ${showMenu ? "left-0" : "-left-full"} 
        top-0 xl:static flex-1 flex flex-col xl:flex-row items-center gap-10 justify-center
        transition-all duration-500`}>
            <a href="a" className=''>Home</a>
            <a href="a" className=''>About Us</a>
            <a href="a" className=''>Services</a>
            <a href="a" className=''>Products</a>
       </nav>
       <button onClick={() => setShowMenu(!showMenu)} className='text-2xl p-2'>
            {showMenu ? <RiCloseLine /> :<RiMenu3Fill />}
        </button>
    </header>);
  
}

export default Header